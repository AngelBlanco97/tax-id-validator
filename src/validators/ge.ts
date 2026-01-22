/**
 * German Validators (SteuerIdNr,  VAT Number, W-IdNr)
 * @documentation https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/Documents/COSME/VAT%20numbers%20EU.pdf
 * @documentation https://www.iamexpat.de/expat-info/money-taxation/tax-identification-number-germany
 * @author AngelBlanco97
 * @license MIT
 */

import {
  calculateISO7064Mod10_11,
  hasSteuerIdNrStructure,
  sanitizeAndMatch,
} from "../utils";

// Constants - Single source of truth
const STEUERIDNR_REGEX = /^[0-9]{11}$/;
const VAT_NUMBER_REGEX = /^DE[0-9]{9}$/;
const WIDNR_REGEX = /^[0-9]{9}$/;

/**
 * Validate German Steueridentifikationsnummer (Tax Identification Number).
 * Unique per person, lifetime validity.
 * Format: 11 digits.
 * Checksum: ISO 7064 Mod 11,10.
 * * @param value - The value to validate
 * @returns boolean indicating whether the SteuerIdNr is valid
 */
export const validateSteuerIdNr = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, STEUERIDNR_REGEX);
  if (!str) return false;

  const body = str.substring(0, 10);
  const checkDigit = parseInt(str.substring(10, 11), 10);

  if (!hasSteuerIdNrStructure(body)) {
    return false;
  }

  const calculatedCheckDigit = calculateISO7064Mod10_11(body);

  return calculatedCheckDigit === checkDigit;
};

/**
 * Validate German VAT Number (Umsatzsteuer-Id).
 * Format: DE + 9 digits.
 * Checksum: ISO 7064 Mod 11,10.
 * * @param value - The value to validate
 * @returns boolean indicating whether the VAT number is valid
 */
export const validateVatNumber = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, VAT_NUMBER_REGEX);
  if (!str) return false;

  const numbers = str.substring(2);

  const body = numbers.substring(0, 8);
  const checkDigit = parseInt(numbers.substring(8, 9), 10);

  const calculatedCheckDigit = calculateISO7064Mod10_11(body);

  return calculatedCheckDigit === checkDigit;
};

/**
 * Validate Business identification number (W-IdNr)
 * Format: DE + 9 digits + suffix (usually).
 * Based on your regex, we validate the 9 digit core.
 * Checksum: ISO 7064 Mod 11,10 (Same as VAT).
 * * @param value - The value to validate
 * @returns boolean indicating whether the W-IdNr is valid
 */
export const validateWidnr = (value: unknown): boolean => {
  const str = sanitizeAndMatch(value, WIDNR_REGEX);
  if (!str) return false;

  const body = str.substring(0, 8);
  const checkDigit = parseInt(str.substring(8, 9), 10);

  const calculatedCheckDigit = calculateISO7064Mod10_11(body);

  return calculatedCheckDigit === checkDigit;
};

/**
 * Validate German Tax Identifiers (SteuerIdNr, Steuernummer, VAT Number, W-IdNr).
 * @param value - The value to validate
 * @returns boolean indicating whether any of the German tax identifiers is valid
 */
export const validateDE = (value: unknown): boolean => {
  return (
    validateSteuerIdNr(value) ||
    validateVatNumber(value) ||
    validateWidnr(value)
  );
};
