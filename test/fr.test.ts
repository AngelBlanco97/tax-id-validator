import { describe, it, expect } from "vitest";
import {
  validateIdentification,
  validateFR,
  validateNIR,
  validateSIREN,
  validateSIRET,
} from "../src/index";

// ============================================================
// FRANCE (FR) - Tests using validateIdentification (legacy API)
// ============================================================
describe("Test validations of France (FR) - validateIdentification", () => {
  it("should validate a correct SIREN (Google France)", () => {
    expect(validateIdentification("fr", "443061841")).toBe(true);
  });

  it("should validate a correct SIRET", () => {
    expect(validateIdentification("fr", "44306184100047")).toBe(true);
  });

  it("should fail with incorrect length", () => {
    expect(validateIdentification("fr", "123")).toBe(false);
  });

  it("should fail if the Luhn Checksum does not match", () => {
    expect(validateIdentification("fr", "443061842")).toBe(false);
  });
});

// ============================================================
// FRANCE (FR) - Individual validator functions
// ============================================================
describe("validateFR - Auto-detect French ID type", () => {
  it("should detect and validate SIREN (9 digits)", () => {
    expect(validateFR("443061841")).toBe(true);
  });

  it("should detect and validate SIRET (14 digits)", () => {
    expect(validateFR("44306184100047")).toBe(true);
  });

  it("should detect and validate NIR (15 digits)", () => {
    expect(validateFR("188057512301180")).toBe(true);
  });

  it("should reject invalid lengths", () => {
    expect(validateFR("12345")).toBe(false);
    expect(validateFR("1234567890123456")).toBe(false);
  });
});

describe("validateSIREN - French SIREN only", () => {
  it("should validate correct SIREN numbers", () => {
    expect(validateSIREN("443061841")).toBe(true); // Google France
    expect(validateSIREN("552100554")).toBe(true); // Total SA
    expect(validateSIREN("542051180")).toBe(true); // Orange
  });

  it("should handle dashes and spaces", () => {
    expect(validateSIREN("443-061-841")).toBe(true);
    expect(validateSIREN("443 061 841")).toBe(true);
  });

  it("should reject all-same-digit numbers (edge case)", () => {
    expect(validateSIREN("111111111")).toBe(false);
    expect(validateSIREN("000000000")).toBe(false);
  });

  it("should reject incorrect Luhn checksum", () => {
    expect(validateSIREN("443061842")).toBe(false);
    expect(validateSIREN("443061843")).toBe(false);
  });

  it("should reject wrong length", () => {
    expect(validateSIREN("44306184")).toBe(false); // 8 digits
    expect(validateSIREN("4430618410")).toBe(false); // 10 digits
  });

  it("should reject invalid formats", () => {
    expect(validateSIREN("")).toBe(false);
    expect(validateSIREN(null)).toBe(false);
    expect(validateSIREN(undefined)).toBe(false);
    expect(validateSIREN(443061841)).toBe(false); // not a string
    expect(validateSIREN("44306184A")).toBe(false); // has letter
  });
});

describe("validateSIRET - French SIRET only", () => {
  it("should validate correct SIRET numbers", () => {
    expect(validateSIRET("44306184100047")).toBe(true); // Google France
  });

  it("should handle dashes and spaces", () => {
    expect(validateSIRET("443 061 841 00047")).toBe(true);
    expect(validateSIRET("443-061-841-00047")).toBe(true);
  });

  it("should reject all-same-digit numbers", () => {
    expect(validateSIRET("11111111111111")).toBe(false);
    expect(validateSIRET("00000000000000")).toBe(false);
  });

  it("should reject incorrect Luhn checksum", () => {
    expect(validateSIRET("44306184100048")).toBe(false);
  });

  it("should reject wrong length", () => {
    expect(validateSIRET("4430618410004")).toBe(false); // 13 digits
    expect(validateSIRET("443061841000470")).toBe(false); // 15 digits
  });

  it("should reject SIREN (9 digits)", () => {
    expect(validateSIRET("443061841")).toBe(false);
  });

  it("should reject invalid formats", () => {
    expect(validateSIRET("")).toBe(false);
    expect(validateSIRET(null)).toBe(false);
    expect(validateSIRET(44306184100047)).toBe(false); // not a string
  });
});

describe("validateNIR - French NIR (Social Security Number)", () => {
  it("should validate correct male NIR", () => {
    expect(validateNIR("199072A12801261")).toBe(true); // Corse 2A
  });

  it("should validate correct female NIR", () => {
    expect(validateNIR("299072B12801238")).toBe(true); // Corse 2B
  });

  it("should validate NIR from DOM-TOM", () => {
    expect(validateNIR("197097501205678")).toBe(true); // Overseas territory (97x)
  });

  it("should validate standard NIR", () => {
    expect(validateNIR("188057512301180")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateNIR("1 88 05 75 123 011 80")).toBe(true);
    expect(validateNIR("1-88-05-75-123-011-80")).toBe(true);
  });

  it("should handle lowercase", () => {
    expect(validateNIR("199072a12801261")).toBe(true);
    expect(validateNIR("299072b12801238")).toBe(true);
  });

  it("should reject incorrect control key", () => {
    expect(validateNIR("188057512301170")).toBe(false);
    expect(validateNIR("188057512301181")).toBe(false);
  });

  it("should reject invalid sex digit", () => {
    expect(validateNIR("088057512301171")).toBe(false); // 0 not valid
    expect(validateNIR("988057512301171")).toBe(false); // 9 not valid
  });

  it("should reject invalid month", () => {
    expect(validateNIR("188137512301171")).toBe(false); // month 13
    expect(validateNIR("188007512301171")).toBe(false); // month 00
  });

  it("should reject invalid formats", () => {
    expect(validateNIR("")).toBe(false);
    expect(validateNIR(null)).toBe(false);
    expect(validateNIR("1880575123011")).toBe(false); // too short
    expect(validateNIR("18805751230117100")).toBe(false); // too long
  });
});
