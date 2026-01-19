const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
const CIF_CONTROL_LETTERS = "JABCDEFGHI";
const DNI_REGEX = /^[0-9]{8}[A-Z]$/;
const NIE_REGEX = /^[XYZ][0-9]{7}[A-Z]$/;
const CIF_REGEX = /^[ABCDEFGHJNPQRSUVW][0-9]{7}[0-9A-J]$/;

/**
 * Validate Spanish DNI (Documento Nacional de Identidad).
 * @param value - The DNI number to validate (8 digits + letter)
 * @returns boolean indicating whether the DNI is valid
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
 */
export const validateDNI = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const str = value.toUpperCase().replace(/\s|-/g, "");

  if (!DNI_REGEX.test(str)) return false;

  const numberPart = str.slice(0, -1);
  const letter = str.slice(-1);
  const number = parseInt(numberPart, 10);

  return DNI_LETTERS[number % 23] === letter;
};

/**
 * Validate Spanish NIE (Número de Identidad de Extranjero).
 * @param value - The NIE number to validate (X/Y/Z + 7 digits + letter)
 * @returns boolean indicating whether the NIE is valid
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
 */
export const validateNIE = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const str = value.toUpperCase().replace(/\s|-/g, "");

  if (!NIE_REGEX.test(str)) return false;

  let numberPart = str.slice(0, -1);
  const letter = str.slice(-1);

  numberPart = numberPart.replace("X", "0").replace("Y", "1").replace("Z", "2");

  const number = parseInt(numberPart, 10);
  return DNI_LETTERS[number % 23] === letter;
};

/**
 * Validate Spanish CIF (Código de Identificación Fiscal).
 * @param value - The CIF number to validate (letter + 7 digits + control)
 * @returns boolean indicating whether the CIF is valid
 * @author AngelBlanco97
 * @license MIT
 */
export const validateCIF = (value: any): boolean => {
  if (typeof value !== "string") return false;
  const str = value.toUpperCase().replace(/\s|-/g, "");

  if (!CIF_REGEX.test(str)) return false;

  const cifLetter = str[0];
  const numbers = str.slice(1, 8);
  const control = str[8];

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
  const controlLetter = CIF_CONTROL_LETTERS[controlDigit];

  if ("PQRSNW".includes(cifLetter)) return control === controlLetter;
  if ("ABEH".includes(cifLetter)) return control === String(controlDigit);

  return control === String(controlDigit) || control === controlLetter;
};

/**
 * Validate Spanish DNI/NIE/CIF numbers (auto-detect type).
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification is valid
 * @author AngelBlanco97
 * @license MIT
 */
export const validateES = (value: any): boolean => {
  return validateDNI(value) || validateNIE(value) || validateCIF(value);
};
