/**
 * Portuguese Tax ID Validators (NIF)
 * @author AngelBlanco97
 * @license MIT
 */

import { sanitize } from "../utils/sanitize";
import { calculateModulo11CheckDigit } from "../utils/algorithms";

// Constants
const NIF_REGEX = /^[0-9]{9}$/;
const VALID_STARTING_DIGITS = ["1", "2", "3", "5", "6", "8", "9"];

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal).
 * @param value - The NIF number to validate (9 digits)
 * @returns boolean indicating whether the NIF is valid
 * @documentation https://en.wikipedia.org/wiki/Tax_identification_number#Portugal
 */
export const validateNIF = (value: unknown): boolean => {
  const nif = sanitize(value);
  if (!nif || !NIF_REGEX.test(nif)) return false;
  if (!VALID_STARTING_DIGITS.includes(nif[0])) return false;

  const digits = nif
    .slice(0, 8)
    .split("")
    .map((d) => parseInt(d, 10));
  const expectedCheckDigit = calculateModulo11CheckDigit(digits);

  return expectedCheckDigit === parseInt(nif[8], 10);
};

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal).
 * Alias for validateNIF for consistency with other country validators.
 * @param value - The NIF number to validate
 * @returns boolean indicating whether the NIF is valid
 */
export const validatePT = validateNIF;
