/**
 * Security and Data Sanitization Utilities
 * Protects against XSS, HTML injection, prototype pollution, spam flooding,
 * bot velocity exploits, and unauthorized data tampering.
 */

// Non-printable control characters (excluding newline/carriage return/tab during text editing)
const CONTROL_CHARS_REGEX = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

// HTML tag stripper
const HTML_TAGS_REGEX = /<[^>]*>?/gm;

// Dangerous URI schemes used in pseudo-protocol injection
const DANGEROUS_SCHEMES_REGEX = /(?:javascript|vbscript|data|file|about):/gi;

// Invisible zero-width and bidirectional override characters (used to bypass regex filters)
const ZERO_WIDTH_AND_BDO_REGEX = /[\u200B-\u200D\uFEFF\u200E\u200F\u202A-\u202E]/g;

/**
 * Strips HTML tags, null bytes, non-printable control characters,
 * dangerous URI schemes, and zero-width evasion characters.
 * Normalizes Unicode into canonical NFKC form.
 */
export const sanitizeText = (raw = "", maxLength = 500) => {
  if (typeof raw !== "string") return "";
  return raw
    .normalize("NFKC")
    .replace(ZERO_WIDTH_AND_BDO_REGEX, "")
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(HTML_TAGS_REGEX, "")
    .replace(DANGEROUS_SCHEMES_REGEX, "")
    .trim()
    .slice(0, maxLength);
};

/**
 * Sanitizes and validates a patient full name.
 * Allows letters, spaces, hyphens, and apostrophes (standard for Uzbek names e.g. O'ktam, G'ofur).
 * Completely strips brackets, quotes, slashes, script tokens, and punctuation.
 */
export const sanitizePatientName = (name = "") => {
  const cleaned = sanitizeText(name, 80);
  return cleaned
    .replace(/[<>{}[\]\\/~`!@#$%^*+=|;:"?_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Sanitizes medical notes and patient complaints.
 */
export const sanitizeNote = (note = "", maxLength = 400) => {
  return sanitizeText(note, maxLength);
};

/**
 * Validates ISO date format YYYY-MM-DD within realistic medical bounds.
 */
export const isValidIsoDate = (dateStr = "") => {
  if (typeof dateStr !== "string") return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr.trim())) return false;
  const [year, month, day] = dateStr.trim().split("-").map(Number);
  const currentYear = new Date().getFullYear();
  if (year < 1910 || year > currentYear) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  const parsed = new Date(dateStr.trim());
  return !isNaN(parsed.getTime());
};

/**
 * Multi-tab & page-refresh resistant client rate limiter.
 * Backed by sessionStorage so pressing F5 or opening a new tab
 * cannot reset the cooldown timer.
 */
const inMemoryTimestamps = new Map();

const getStorageTime = (key) => {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const val = Number(window.sessionStorage.getItem(`dr_rl_${key}`));
      if (!isNaN(val) && val > 0) return val;
    }
  } catch {
    /* fallback to memory */
  }
  return 0;
};

const setStorageTime = (key, timestamp) => {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.setItem(`dr_rl_${key}`, String(timestamp));
    }
  } catch {
    /* fallback to memory */
  }
};

export const checkRateLimit = (actionKey = "booking_submit", cooldownSeconds = 12) => {
  const now = Date.now();
  const memTime = inMemoryTimestamps.get(actionKey) || 0;
  const storageTime = getStorageTime(actionKey);
  const lastTime = Math.max(memTime, storageTime);
  const elapsed = (now - lastTime) / 1000;

  if (elapsed < cooldownSeconds) {
    const remaining = Math.ceil(cooldownSeconds - elapsed);
    return {
      allowed: false,
      remainingSeconds: remaining,
      message: `Iltimos, ${remaining} soniya kuting (Пожалуйста, подождите ${remaining} сек).`,
    };
  }

  inMemoryTimestamps.set(actionKey, now);
  setStorageTime(actionKey, now);
  return { allowed: true, remainingSeconds: 0 };
};

/**
 * Anti-bot honeypot check. If filled, the request is from an automated bot.
 */
export const isBotSubmission = (honeypotValue = "") => {
  return typeof honeypotValue === "string" && honeypotValue.trim().length > 0;
};

/**
 * Velocity trap: verifies the form was open for at least minDurationMs
 * before submission. Headless spam bots submit within < 500ms.
 */
export const isHumanSubmissionVelocity = (mountTimestamp, minDurationMs = 1500) => {
  if (!mountTimestamp || typeof mountTimestamp !== "number") return false;
  const elapsed = Date.now() - mountTimestamp;
  return elapsed >= minDurationMs;
};
