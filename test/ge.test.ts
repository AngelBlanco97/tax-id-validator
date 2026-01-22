import { describe, it, expect } from "vitest";
import {
  validateDE,
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "../src/validators/ge";

// ============================================================
// GERMANY (DE) - Steueridentifikationsnummer (SteuerIdNr)
// ============================================================
describe("validateSteuerIdNr - German Tax Identification Number", () => {
  it("should validate correct SteuerIdNr numbers", () => {
    // Valid SteuerIdNr examples with correct ISO 7064 Mod 10,11 checksum
    expect(validateSteuerIdNr("86095742719")).toBe(true);
    expect(validateSteuerIdNr("65929970489")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateSteuerIdNr("86 095 742 719")).toBe(true);
    expect(validateSteuerIdNr("86-095-742-719")).toBe(true);
  });

  it("should reject SteuerIdNr with invalid checksum", () => {
    expect(validateSteuerIdNr("86095742710")).toBe(false);
    expect(validateSteuerIdNr("86095742711")).toBe(false);
  });

  it("should reject SteuerIdNr with invalid structure (digit repetition rules)", () => {
    // SteuerIdNr cannot have more than 2 identical consecutive digits
    // and must have at least one digit appearing twice
    expect(validateSteuerIdNr("11111111111")).toBe(false);
    expect(validateSteuerIdNr("12345678901")).toBe(false);
  });

  it("should reject SteuerIdNr starting with 0", () => {
    expect(validateSteuerIdNr("01234567890")).toBe(false);
  });

  it("should reject wrong length", () => {
    expect(validateSteuerIdNr("1234567890")).toBe(false); // 10 digits
    expect(validateSteuerIdNr("123456789012")).toBe(false); // 12 digits
  });

  it("should reject invalid formats", () => {
    expect(validateSteuerIdNr("")).toBe(false);
    expect(validateSteuerIdNr(null)).toBe(false);
    expect(validateSteuerIdNr(undefined)).toBe(false);
    expect(validateSteuerIdNr(86095742719)).toBe(false); // not a string
    expect(validateSteuerIdNr("8609574271A")).toBe(false); // has letter
  });
});

// ============================================================
// GERMANY (DE) - VAT Number (Umsatzsteuer-Identifikationsnummer)
// ============================================================
describe("validateVatNumber - German VAT Number", () => {
  it("should validate correct VAT numbers", () => {
    // Format: DE + 9 digits with ISO 7064 Mod 10,11 checksum
    expect(validateVatNumber("DE136695976")).toBe(true);
    expect(validateVatNumber("DE811128135")).toBe(true); // Google Germany
  });

  it("should handle dashes and spaces", () => {
    expect(validateVatNumber("DE 136 695 976")).toBe(true);
    expect(validateVatNumber("DE-136-695-976")).toBe(true);
  });

  it("should be case insensitive for prefix", () => {
    expect(validateVatNumber("de136695976")).toBe(true);
    expect(validateVatNumber("De136695976")).toBe(true);
  });

  it("should reject VAT numbers with invalid checksum", () => {
    expect(validateVatNumber("DE136695970")).toBe(false);
    expect(validateVatNumber("DE136695971")).toBe(false);
  });

  it("should reject VAT numbers without DE prefix", () => {
    expect(validateVatNumber("136695976")).toBe(false);
    expect(validateVatNumber("FR136695976")).toBe(false);
  });

  it("should reject wrong length", () => {
    expect(validateVatNumber("DE12345678")).toBe(false); // 8 digits
    expect(validateVatNumber("DE1234567890")).toBe(false); // 10 digits
  });

  it("should reject invalid formats", () => {
    expect(validateVatNumber("")).toBe(false);
    expect(validateVatNumber(null)).toBe(false);
    expect(validateVatNumber(undefined)).toBe(false);
    expect(validateVatNumber("DE13669597A")).toBe(false); // has letter in numbers
  });
});

// ============================================================
// GERMANY (DE) - W-IdNr (Business Identification Number)
// ============================================================
describe("validateWidnr - German Business Identification Number", () => {
  it("should validate correct W-IdNr numbers", () => {
    // Format: 9 digits with ISO 7064 Mod 10,11 checksum
    expect(validateWidnr("136695976")).toBe(true);
    expect(validateWidnr("811128135")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateWidnr("136 695 976")).toBe(true);
    expect(validateWidnr("136-695-976")).toBe(true);
  });

  it("should reject W-IdNr with invalid checksum", () => {
    expect(validateWidnr("136695970")).toBe(false);
    expect(validateWidnr("136695971")).toBe(false);
  });

  it("should reject wrong length", () => {
    expect(validateWidnr("12345678")).toBe(false); // 8 digits
    expect(validateWidnr("1234567890")).toBe(false); // 10 digits
  });

  it("should reject invalid formats", () => {
    expect(validateWidnr("")).toBe(false);
    expect(validateWidnr(null)).toBe(false);
    expect(validateWidnr(undefined)).toBe(false);
    expect(validateWidnr(136695976)).toBe(false); // not a string
    expect(validateWidnr("13669597A")).toBe(false); // has letter
  });
});

// ============================================================
// GERMANY (DE) - Auto-detect German ID type
// ============================================================
describe("validateDE - Auto-detect German ID type", () => {
  it("should detect and validate SteuerIdNr (11 digits)", () => {
    expect(validateDE("86095742719")).toBe(true);
  });

  it("should detect and validate VAT Number (DE + 9 digits)", () => {
    expect(validateDE("DE136695976")).toBe(true);
  });

  it("should detect and validate W-IdNr (9 digits)", () => {
    expect(validateDE("136695976")).toBe(true);
  });

  it("should reject invalid IDs", () => {
    expect(validateDE("invalid")).toBe(false);
    expect(validateDE("12345")).toBe(false);
    expect(validateDE("")).toBe(false);
  });

  it("should handle various formats with spaces/dashes", () => {
    expect(validateDE("86 095 742 719")).toBe(true); // SteuerIdNr
    expect(validateDE("DE 136 695 976")).toBe(true); // VAT
    expect(validateDE("136-695-976")).toBe(true); // W-IdNr
  });
});
