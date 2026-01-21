/**
 * Common validation algorithms
 * Single Responsibility: Only contains mathematical validation algorithms
 * @author AngelBlanco97
 * @license MIT
 */

/**
 * Luhn algorithm (mod 10) - Used for credit cards, SIREN, SIRET, etc.
 * @param value - Numeric string to validate
 * @returns true if the checksum is valid
 */
export const validateLuhn = (value: string): boolean => {
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
 * Modulo 23 algorithm - Used for Spanish DNI/NIE
 * @param number - The numeric part
 * @param letters - The letter lookup table
 * @returns The corresponding letter
 */
export const getModulo23Letter = (number: number, letters: string): string => {
  return letters[number % 23];
};

/**
 * Modulo 11 algorithm - Used for Portuguese NIF
 * @param digits - Array of digits (first 8)
 * @returns The check digit (0-9)
 */
export const calculateModulo11CheckDigit = (digits: number[]): number => {
  const total = digits.reduce((acc, digit, index) => {
    const multiplier = 9 - index;
    return acc + digit * multiplier;
  }, 0);

  const modulo11 = total % 11;
  const checkDigit = 11 - modulo11;
  return checkDigit >= 10 ? 0 : checkDigit;
};

/**
 * Modulo 97 algorithm - Used for French NIR
 * @param value - The numeric value as BigInt
 * @returns The control key (0-96)
 */
export const calculateModulo97Key = (value: bigint): number => {
  return Number(97n - (value % 97n));
};

/**
 * CIF control digit calculation - Spanish company tax ID
 * @param numbers - 7 digit string
 * @returns Object with controlDigit (number) and controlLetter (string)
 */
export const calculateCIFControl = (
  numbers: string,
): { digit: number; letter: string } => {
  const CIF_CONTROL_LETTERS = "JABCDEFGHI";
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < numbers.length; i++) {
    const n = parseInt(numbers[i], 10);
    if (i % 2 === 0) {
      const doubled = n * 2;
      sumOdd += doubled > 9 ? doubled - 9 : doubled;
    } else {
      sumEven += n;
    }
  }

  const total = sumEven + sumOdd;
  const controlDigit = (10 - (total % 10)) % 10;

  return {
    digit: controlDigit,
    letter: CIF_CONTROL_LETTERS[controlDigit],
  };
};

/**
 * Check if all characters in string are the same
 * @param value - String to check
 * @returns true if all characters are identical
 */
export const isAllSameDigits = (value: string): boolean => {
  return /^(\d)\1+$/.test(value);
};
