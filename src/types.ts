/**
 * Types for Tax ID Validator
 * @author AngelBlanco97
 * @license MIT
 */

/**
 * Supported country codes (ISO 3166-1 alpha-2)
 */
export type CountryCode = "es" | "pt" | "fr" | "de";

/**
 * Valid input type for tax ID validation.
 * Only strings are valid - this makes the API explicit.
 */
export type TaxIdInput = string;

/**
 * Validation function signature
 */
export type ValidatorFunction = (value: unknown) => boolean;

/**
 * Country validator map type
 */
export type CountryValidators = Record<CountryCode, ValidatorFunction>;

/**
 * Spanish document types
 */
export type SpanishDocumentType = "DNI" | "NIE" | "CIF";

/**
 * French document types
 */
export type FrenchDocumentType = "NIR" | "SIREN" | "SIRET";

/**
 * Portuguese document types
 */
export type PortugueseDocumentType = "NIF";

/**
 *  German document types
 */
export type DEDocumentType = "SteuerIdNr" | "VatNumber" | "Widnr";

/**
 * All document types
 */
export type DocumentType =
  | SpanishDocumentType
  | FrenchDocumentType
  | PortugueseDocumentType
  | DEDocumentType;

/**
 * Type guard to check if value is a non-empty string
 */
export const isValidString = (value: unknown): value is string => {
  return typeof value === "string" && value.length > 0;
};

/**
 * Type guard to check if country code is valid
 */
export const isValidCountryCode = (code: unknown): code is CountryCode => {
  return code === "es" || code === "pt" || code === "fr" || code === "de";
};
