const VALID_STARTING_DIGITS = ["1", "2", "3", "5", "6", "8", "9"];

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal).
 * @param value - The NIF number to validate (9 digits)
 * @returns boolean indicating whether the NIF is valid
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://en.wikipedia.org/wiki/Tax_identification_number#Portugal
 */
export const validateNIF = (value: any): boolean => {
  if (typeof value !== "string") return false;

  const nif = value.replace(/\s|-/g, "");

  if (!/^[0-9]{9}$/.test(nif)) return false;
  if (!VALID_STARTING_DIGITS.includes(nif[0])) return false;

  const total = nif
    .slice(0, 8)
    .split("")
    .reduce((acc, digit, index) => {
      const multiplier = 9 - index;
      return acc + parseInt(digit, 10) * multiplier;
    }, 0);

  const modulo11 = total % 11;
  let checkDigit = 11 - modulo11;
  if (checkDigit >= 10) checkDigit = 0;

  return checkDigit === parseInt(nif[8], 10);
};

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal).
 * Alias for validateNIF for consistency with other country validators.
 * @param value - The NIF number to validate
 * @returns boolean indicating whether the NIF is valid
 */
export const validatePT = validateNIF;
