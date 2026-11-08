import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function runEdge(args) {
  const argStr = args.map(a => `"${a}"`).join(' ');
  const cmd = `"${edgePath}" ${argStr}`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

async function main() {
  console.log('Generating Business Card Assets...');

  // 1. Generate 90x50mm 2-page PDF
  const card90x50Html = path.join(publicDir, 'business-card-print-90x50.html');
  const card90x50Pdf = path.join(publicDir, '01_Vizitka_90x50mm_Old_va_Orqa.pdf');
  runEdge([
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${card90x50Pdf}`,
    card90x50Html,
  ]);
  console.log('Generated 01_Vizitka_90x50mm_Old_va_Orqa.pdf');

  // 2. Generate A4 10-up sheet PDF
  const sheetHtml = path.join(publicDir, 'business-card-a4-sheet.html');
  const sheetPdf = path.join(publicDir, '02_Vizitka_A4_10talik_Chop_Varaqi.pdf');
  runEdge([
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${sheetPdf}`,
    sheetHtml,
  ]);
  console.log('Generated 02_Vizitka_A4_10talik_Chop_Varaqi.pdf');

  // 3. Generate High-Res Preview Screenshot of the presentation cards
  const previewHtml = path.join(publicDir, 'business-card.html');
  const previewPng = path.join(publicDir, 'Stomatolog_Orifjon_Business_Card_Preview.png');
  runEdge([
    '--headless=new',
    '--disable-gpu',
    '--window-size=1080,1050',
    `--screenshot=${previewPng}`,
    previewHtml,
  ]);
  console.log('Generated Stomatolog_Orifjon_Business_Card_Preview.png');

  // Also maintain the legacy name for direct link compatibility
  const legacyPdf = path.join(publicDir, 'Stomatolog_Orifjon_Business_Card.pdf');
  runEdge([
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${legacyPdf}`,
    previewHtml,
  ]);
  console.log('Generated Stomatolog_Orifjon_Business_Card.pdf');

  console.log('All business card assets generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
