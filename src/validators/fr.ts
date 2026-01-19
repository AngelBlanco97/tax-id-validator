const NIR_REGEX =
  /^[1-8]\d{2}(0[1-9]|1[0-2]|[2-9]\d)(\d{2}|2A|2B|97\d)\d{6}\d{2}$/;

/**
 * Validate using the Luhn algorithm.
 * @param value - The number to validate
 * @returns boolean indicating whether the number passes Luhn validation
 */
const validateLuhn = (value: string): boolean => {
  let sum = 0;
  let double = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let n = parseInt(value[i], 10);
    if (double) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    double = !double;
  }

  return sum % 10 === 0;
};

/**
 * Validate French NIR (Numéro d'Inscription au Répertoire) - Social Security Number.
 * @param value - The NIR number to validate (15 digits)
 * @returns boolean indicating whether the NIR is valid
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.service-public.gouv.fr/
 */
export const validateNIR = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const nir = value.toUpperCase().replace(/\s|-/g, "");

  if (!NIR_REGEX.test(nir)) return false;

  const key = parseInt(nir.slice(-2), 10);
  let base = nir.slice(0, -2);

  const dept = base.slice(5, 7);
  if (dept === "2A") base = base.slice(0, 5) + "19" + base.slice(7);
  if (dept === "2B") base = base.slice(0, 5) + "18" + base.slice(7);

  const num = BigInt(base);
  return Number(97n - (num % 97n)) === key;
};

/**
 * Validate French SIREN (Système d'Identification du Répertoire des Entreprises).
 * @param value - The SIREN number to validate (9 digits)
 * @returns boolean indicating whether the SIREN is valid
 * @author AngelBlanco97
 * @license MIT
 */
export const validateSIREN = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const v = value.replace(/\s|-/g, "");

  if (!/^\d{9}$/.test(v)) return false;
  if (/^(\d)\1+$/.test(v)) return false; // reject all same digits

  return validateLuhn(v);
};

/**
 * Validate French SIRET (Système d'Identification du Répertoire des Établissements).
 * @param value - The SIRET number to validate (14 digits = SIREN + NIC)
 * @returns boolean indicating whether the SIRET is valid
 * @author AngelBlanco97
 * @license MIT
 */
export const validateSIRET = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const v = value.replace(/\s|-/g, "");

  if (!/^\d{14}$/.test(v)) return false;
  if (/^(\d)\1+$/.test(v)) return false; // reject all same digits

  return validateLuhn(v);
};

/**
 * Validate French SIREN or SIRET numbers (auto-detect by length).
 * @param value - The SIREN (9 digits) or SIRET (14 digits) number to validate
 * @returns boolean indicating whether the number is valid
 * @author AngelBlanco97
 * @license MIT
 */
export const validateSIREN_SIRET = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const v = value.replace(/\s|-/g, "");

  if (v.length === 9) return validateSIREN(v);
  if (v.length === 14) return validateSIRET(v);

  return false;
};

/**
 * Validates French identification numbers: NIR, SIREN, and SIRET (auto-detect).
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification number is valid
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.service-public.gouv.fr/
 */
export const validateFR = (value: any): boolean => {
  if (typeof value !== "string") return false;

  const v = value.replace(/\s|-/g, "");

  if (v.length === 15) return validateNIR(value);
  if (v.length === 9) return validateSIREN(value);
  if (v.length === 14) return validateSIRET(value);

  return false;
};

// Legacy export for backwards compatibility
export const validateFR_SIREN_SIRET = validateSIREN_SIRET;
export const validateFR_NIR = validateNIR;
