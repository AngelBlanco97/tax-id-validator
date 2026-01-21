/**
 * Tax ID Validator - Main Entry Point
 * @author AngelBlanco97
 * @license MIT
 */

import {
  validateES,
  validateDNI,
  validateNIE,
  validateCIF,
} from "./validators/es";
import {
  validateFR,
  validateNIR,
  validateSIREN,
  validateSIRET,
} from "./validators/fr";
import { validatePT, validateNIF } from "./validators/pt";

// Re-export types
export type { CountryCode, TaxIdInput, ValidatorFunction } from "./types";
export { isValidString, isValidCountryCode } from "./types";

// Re-export all individual validators for direct imports
export {
  // Spain
  validateES,
  validateDNI,
  validateNIE,
  validateCIF,
  // France
  validateFR,
  validateNIR,
  validateSIREN,
  validateSIRET,
  // Portugal
  validatePT,
  validateNIF,
};

// Import types for internal use
import type { CountryCode, CountryValidators } from "./types";

const validators: CountryValidators = {
  es: validateES,
  pt: validatePT,
  fr: validateFR,
};

/**
 * Function to validate identification numbers based on country/type.
 * @param country - The country code representing the type of identification number (e.g., 'es' for Spain, 'pt' for Portugal)
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification number is valid (true) or not (false)
 */
export const validateIdentification = (
  country: CountryCode,
  value: unknown,
): boolean => {
  const validatorFn = validators[country];

  if (!validatorFn) {
    console.warn(`[TaxIDValidator] Country '${country}' not supported yet.`);
    return false;
  }

  return validatorFn(value);
};
