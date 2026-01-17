const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";

/**
 * Validate Spanish DNI/NIE numbers.
 * @param value - The DNI or NIE number to validate
 * @returns boolean indicating whether the DNI/NIE is valid (true) or not (false)
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/
 */
export const validateES = (value: any): boolean => {
  if (typeof value !== "string") return false;

  const str = value.toUpperCase().replace(/\s|-/g, "");

  const regex = /^([0-9]{8}|[XYZ][0-9]{7})[A-Z]$/;

  if (!regex.test(str)) return false;

  let numberPart = str.slice(0, -1);
  const letter = str.slice(-1);

  numberPart = numberPart.replace("X", "0").replace("Y", "1").replace("Z", "2");

  const number = parseInt(numberPart, 10);

  return DNI_LETTERS[number % 23] === letter;
};
