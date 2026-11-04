// Official Uzbekistan mobile and regional landline operator prefixes
export const UZ_OPERATOR_PREFIXES = new Set([
  "20", "33", "50", "55", "71", "72", "73", "74", "75", "76", "77", "79", "88", "90", "91", "93", "94", "95", "97", "98", "99"
]);

export const digitsOnly = (value = "") => String(value || "").replace(/\D/g, "");

export const extractUzLocalPhoneDigits = (value = "") => {
  let digits = digitsOnly(value);

  if (digits.startsWith("998")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.replace(/^0+/, "");
  }

  return digits.slice(0, 9);
};

export const isValidUzOperator = (value = "") => {
  const local = extractUzLocalPhoneDigits(value);
  if (local.length < 2) return false;
  return UZ_OPERATOR_PREFIXES.has(local.slice(0, 2));
};

export const isRepetitiveJunkPhone = (value = "") => {
  const local = extractUzLocalPhoneDigits(value);
  if (local.length !== 9) return false;
  // If all 9 digits are the same, e.g. 000000000 or 111111111
  return /^(\d)\1{8}$/.test(local);
};

export const formatUzPhone = (value = "", prevValue = "") => {
  const raw = String(value || "");
  if (!raw.trim()) return "";

  let local = extractUzLocalPhoneDigits(raw);

  if (
    prevValue &&
    prevValue.endsWith(")") &&
    !raw.endsWith(")") &&
    local.length === 2 &&
    extractUzLocalPhoneDigits(prevValue) === local
  ) {
    local = local.slice(0, 1);
  }

  if (!local) {
    return "";
  }

  const a = local.slice(0, 2);
  const b = local.slice(2, 5);
  const c = local.slice(5, 7);
  const d = local.slice(7, 9);

  let formatted = "+998";
  if (a) {
    formatted += ` (${a}`;
    if (a.length === 2) formatted += ")";
  }
  if (b) formatted += ` ${b}`;
  if (c) formatted += `-${c}`;
  if (d) formatted += `-${d}`;
  return formatted;
};

export const isUzPhoneComplete = (value = "") => {
  const local = extractUzLocalPhoneDigits(value);
  if (local.length !== 9) return false;
  if (!isValidUzOperator(local)) return false;
  if (isRepetitiveJunkPhone(local)) return false;
  return true;
};
