const NIR_REGEX =
  /^[1-8]\d{2}(0[1-9]|1[0-2]|[2-9]\d)(\d{2}|2A|2B|97\d)\d{6}\d{2}$/;

/**
 *  Validates French identification numbers: NIR (Numéro d'Inscription au Répertoire), SIREN, and SIRET.
 * @param value - The identification number to validate
 * @returns boolean indicating whether the identification number is valid (true) or not (false)
 * @author AngelBlanco97
 * @license MIT
 * @documentation https://www.service-public.gouv.fr/
 */

export const validateFR = (value: any): boolean => {
  if (typeof value !== "string") return false;

  const v = value.replace(/\s|-/g, "");

  if (v.length === 15) return validateFR_NIR(v);
  if (v.length === 9 || v.length === 14) return validateFR_SIREN_SIRET(v);

  return false;
};
/**
 * Validate French NIR (Numéro d'Inscription au Répertoire).
 * @param value - The NIR number to validate
 * @returns boolean indicating whether the NIR is valid (true) or not (false)
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
 * Validate French SIREN/SIRET numbers using the Luhn algorithm.
 * @param value - The SIREN or SIRET number to validate
 * @returns boolean indicating whether the SIREN/SIRET is valid (true) or not (false)
 */
export const validateFR_SIREN_SIRET = (value: string): boolean => {
  const v = value.replace(/\s|-/g, "");
  if (!/^\d{9}$/.test(v) && !/^\d{14}$/.test(v)) return false;
  if (/^(\d)\1+$/.test(v)) return false; // edge legal
  return validateLuhn(v);
};
/**
 * Validate French NIR (Numéro d'Inscription au Répertoire).
 * @param value - The NIR number to validate
 * @returns boolean indicating whether the NIR is valid (true) or not (false)
 */
export const validateFR_NIR = (value: string): boolean => {
  const nir = value.toUpperCase().replace(/\s|-/g, "");

  if (!NIR_REGEX.test(nir)) {
    return false;
  }

  const key = parseInt(nir.slice(-2), 10);
  let base = nir.slice(0, -2);

  const dept = base.slice(5, 7);
  if (dept === "2A") base = base.slice(0, 5) + "19" + base.slice(7);
  if (dept === "2B") base = base.slice(0, 5) + "18" + base.slice(7);

  const num = BigInt(base);
  return Number(97n - (num % 97n)) === key;
};
