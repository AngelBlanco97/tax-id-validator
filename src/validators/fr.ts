/**
 * French Tax ID Validators (NIR, SIREN, SIRET)
 * @author AngelBlanco97
 * @license MIT
 */

import { sanitize, sanitizeAndMatch } from "../utils/sanitize";
import {
  validateLuhn,
  calculateModulo97Key,
  isAllSameDigits,
} from "../utils/algorithms";

// Constants
const NIR_REGEX =
  /^[1-8]\d{2}(0[1-9]|1[0-2]|[2-9]\d)(\d{2}|2A|2B|97\d)\d{6}\d{2}$/;
const SIREN_REGEX = /^\d{9}$/;
const SIRET_REGEX = /^\d{14}$/;

/**
 * Validate French NIR (Numéro d'Inscription au Répertoire) - Social Security Number.
 * @param value - The NIR number to validate (15 digits)
 * @returns boolean indicating whether the NIR is valid
 * @documentation https://www.service-public.gouv.fr/
 */
export const validateNIR = (value: unknown): boolean => {
  const nir = sanitizeAndMatch(value, NIR_REGEX);
  if (!nir) return false;

  const key = parseInt(nir.slice(-2), 10);
  let base = nir.slice(0, -2);

  // Handle Corsica departments (2A, 2B)
  const dept = base.slice(5, 7);
  if (dept === "2A") base = base.slice(0, 5) + "19" + base.slice(7);
  if (dept === "2B") base = base.slice(0, 5) + "18" + base.slice(7);

  return calculateModulo97Key(BigInt(base)) === key;
};

/**
 * Validate French SIREN (Système d'Identification du Répertoire des Entreprises).
 * @param value - The SIREN number to validate (9 digits)
 * @returns boolean indicating whether the SIREN is valid
 */
export const validateSIREN = (value: unknown): boolean => {
  const sanitized = sanitize(value);
  if (!sanitized || !SIREN_REGEX.test(sanitized)) return false;
  if (isAllSameDigits(sanitized)) return false;

  return validateLuhn(sanitized);
};

/**
 * Validate French SIRET (Système d'Identification du Répertoire des Établissements).
 * @param value - The SIRET number to validate (14 digits = SIREN + NIC)
 * @returns boolean indicating whether the SIRET is valid
 */
export const validateSIRET = (value: unknown): boolean => {
  const sanitized = sanitize(value);
  if (!sanitized || !SIRET_REGEX.test(sanitized)) return false;
  if (isAllSameDigits(sanitized)) return false;

  return validateLuhn(sanitized);
};

/**
 * Validate French SIREN or SIRET numbers (auto-detect by length).
 * @param value - The SIREN (9 digits) or SIRET (14 digits) number to validate
 * @returns boolean indicating whether the number is valid
 */
export const validateSIREN_SIRET = (value: unknown): boolean => {
  const sanitized = sanitize(value);
  if (!sanitized) return false;

  if (sanitized.length === 9) return validateSIREN(sanitized);
  if (sanitized.length === 14) return validateSIRET(sanitized);

  return false;
};

/**
 * Validates French identification numbers: NIR, SIREN, and SIRET (auto-detect).
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification number is valid
 * @documentation https://www.service-public.gouv.fr/
 */
export const validateFR = (value: unknown): boolean => {
  const sanitized = sanitize(value);
  if (!sanitized) return false;

  if (sanitized.length === 15) return validateNIR(value);
  if (sanitized.length === 9) return validateSIREN(value);
  if (sanitized.length === 14) return validateSIRET(value);

  return false;
};

// Legacy exports for backwards compatibility
export const validateFR_SIREN_SIRET = validateSIREN_SIRET;
export const validateFR_NIR = validateNIR;
