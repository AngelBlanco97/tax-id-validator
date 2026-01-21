/**
 * Spanish Tax ID Validators (DNI, NIE, CIF)
 * @author AngelBlanco97
 * @license MIT
 */

import { sanitizeAndMatch } from "../utils/sanitize";
import { getModulo23Letter, calculateCIFControl } from "../utils/algorithms";

// Constants - Single source of truth
const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
const DNI_REGEX = /^[0-9]{8}[A-Z]$/;
const NIE_REGEX = /^[XYZ][0-9]{7}[A-Z]$/;
const CIF_REGEX = /^[ABCDEFGHJNPQRSUVW][0-9]{7}[0-9A-J]$/;

// CIF type categories
const CIF_LETTER_CONTROL_ONLY = "PQRSNW";
const CIF_DIGIT_CONTROL_ONLY = "ABEH";

/**
 * Validate Spanish DNI (Documento Nacional de Identidad).
 * @param value - The DNI number to validate (8 digits + letter)
 * @returns boolean indicating whether the DNI is valid
 * @documentation https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
 */
export const validateDNI = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, DNI_REGEX);
  if (!str) return false;

  const numberPart = parseInt(str.slice(0, -1), 10);
  const letter = str.slice(-1);

  return getModulo23Letter(numberPart, DNI_LETTERS) === letter;
};

/**
 * Validate Spanish NIE (Número de Identidad de Extranjero).
 * @param value - The NIE number to validate (X/Y/Z + 7 digits + letter)
 * @returns boolean indicating whether the NIE is valid
 * @documentation https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
 */
export const validateNIE = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, NIE_REGEX);
  if (!str) return false;

  const letter = str.slice(-1);
  const prefix = str[0];
  const numericPrefix = prefix === "X" ? "0" : prefix === "Y" ? "1" : "2";
  const numberPart = parseInt(numericPrefix + str.slice(1, -1), 10);

  return getModulo23Letter(numberPart, DNI_LETTERS) === letter;
};

/**
 * Validate Spanish CIF (Código de Identificación Fiscal).
 * @param value - The CIF number to validate (letter + 7 digits + control)
 * @returns boolean indicating whether the CIF is valid
 */
export const validateCIF = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, CIF_REGEX);
  if (!str) return false;

  const cifLetter = str[0];
  const numbers = str.slice(1, 8);
  const control = str[8];
  const { digit, letter } = calculateCIFControl(numbers);

  // Some CIF types require letter control, others digit, some accept both
  if (CIF_LETTER_CONTROL_ONLY.includes(cifLetter)) {
    return control === letter;
  }
  if (CIF_DIGIT_CONTROL_ONLY.includes(cifLetter)) {
    return control === String(digit);
  }

  // Other types accept either
  return control === String(digit) || control === letter;
};

/**
 * Validate Spanish DNI/NIE/CIF numbers (auto-detect type).
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification is valid
 */
export const validateES = (value: unknown): boolean => {
  return validateDNI(value) || validateNIE(value) || validateCIF(value);
};
