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

const validators = {
  es: validateES,
  pt: validatePT,
  fr: validateFR,
};

export type CountryCode = keyof typeof validators;

/**
 * Function to validate identification numbers based on country/type.
 * @param Country - The country code representing the type of identification number (e.g., 'es' for Spain, 'pt' for Portugal)
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification number is valid (true) or not (false)
 * @author AngelBlanco97
 * @license MIT
 */
export const validateIdentification = (
  country: CountryCode,
  value: any,
): boolean => {
  const validatorFn = validators[country];

  if (!validatorFn) {
    console.warn(`[TaxIDValidator] Country '${country}' not supported yet.`);
    return false;
  }

  return validatorFn(value);
};
