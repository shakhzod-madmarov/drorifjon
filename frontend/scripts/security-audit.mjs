import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

console.log("=== Stomatolog Orifjon: Security Audit Scan ===");

let findings = [];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== "dist" && entry.name !== "dist-ssr" && entry.name !== ".git") {
        scanDir(fullPath);
      }
    } else if (entry.isFile() && /\.(jsx?|tsx?|html)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

function scanFile(filePath) {
  const rel = path.relative(root, filePath);
  const content = fs.readFileSync(filePath, "utf-8");

  // 1. Check target="_blank" without rel="noopener"
  const linkMatches = content.match(/<a\s+[^>]*target=["']_blank["'][^>]*>/gi) || [];
  for (const match of linkMatches) {
    if (!/rel=["'][^"']*noopener[^"']*["']/i.test(match)) {
      findings.push({
        type: "Reverse Tabnabbing (Missing noopener)",
        file: rel,
        snippet: match,
      });
    }
  }

  // 2. Check innerHTML
  if (content.includes("innerHTML") && !rel.includes("prerender.mjs") && !rel.includes("Seo.jsx")) {
    findings.push({
      type: "Potential XSS (innerHTML)",
      file: rel,
    });
  }

  // 3. Check eval / Function
  if (/\beval\s*\(/.test(content)) {
    findings.push({
      type: "Arbitrary Code Execution (eval)",
      file: rel,
    });
  }

  // 4. Check for hardcoded API secrets or tokens
  const tokenRegex = /(api[_-]?key|secret|token|password|auth_token)\s*[:=]\s*["'][a-zA-Z0-9_\-]{16,}["']/gi;
  let match;
  while ((match = tokenRegex.exec(content)) !== null) {
    findings.push({
      type: "Hardcoded Secret",
      file: rel,
      snippet: match[0],
    });
  }
}

scanDir(root);

console.log(`Scan completed. Total findings: ${findings.length}`);
if (findings.length > 0) {
  console.log(JSON.stringify(findings, null, 2));
} else {
  console.log("ALL CODEBASE SECURITY CHECKS PASSED: 0 vulnerabilities found.");
}
