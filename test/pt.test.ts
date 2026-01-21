import { describe, it, expect } from "vitest";
import { validateIdentification, validatePT, validateNIF } from "../src/index";

// ============================================================
// PORTUGAL (PT) - Tests using validateIdentification (legacy API)
// ============================================================
describe("Test validations of Portugal (PT) - validateIdentification", () => {
  it("should validate a correct personal NIF", () => {
    expect(validateIdentification("pt", "232013969")).toBe(true);
  });

  it("should validate another generated NIF", () => {
    expect(validateIdentification("pt", "123456789")).toBe(true);
  });

  it("should fail if the checksum is incorrect", () => {
    expect(validateIdentification("pt", "232013961")).toBe(false);
  });

  it("should fail if the length is incorrect", () => {
    expect(validateIdentification("pt", "123")).toBe(false);
  });
});

// ============================================================
// PORTUGAL (PT) - Individual validator functions
// ============================================================
describe("validatePT / validateNIF - Portuguese NIF", () => {
  it("should validate personal NIFs (start with 1, 2, 3)", () => {
    expect(validateNIF("123456789")).toBe(true);
    expect(validateNIF("232013969")).toBe(true);
  });

  it("should validate company NIFs (start with 5)", () => {
    expect(validateNIF("501442600")).toBe(true); // EDP
  });

  it("should validate public entities (start with 6)", () => {
    expect(validateNIF("600084779")).toBe(true);
  });

  it("should validate NIFs starting with 8", () => {
    expect(validateNIF("800184343")).toBe(true);
  });

  it("should validate NIFs starting with 9", () => {
    expect(validateNIF("980472377")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateNIF("123-456-789")).toBe(true);
    expect(validateNIF("123 456 789")).toBe(true);
  });

  it("should reject NIFs with invalid starting digits (0, 4, 7)", () => {
    expect(validateNIF("012345678")).toBe(false);
    expect(validateNIF("412345678")).toBe(false);
    expect(validateNIF("712345678")).toBe(false);
  });

  it("should reject incorrect checksum", () => {
    expect(validateNIF("123456780")).toBe(false);
    expect(validateNIF("232013961")).toBe(false);
  });

  it("should reject invalid formats", () => {
    expect(validateNIF("12345678")).toBe(false); // too short
    expect(validateNIF("1234567890")).toBe(false); // too long
    expect(validateNIF("12345678A")).toBe(false); // has letter
    expect(validateNIF("")).toBe(false);
    expect(validateNIF(null)).toBe(false);
    expect(validateNIF(undefined)).toBe(false);
    expect(validateNIF(123456789)).toBe(false); // not a string
  });

  it("validatePT should be an alias for validateNIF", () => {
    expect(validatePT("123456789")).toBe(validateNIF("123456789"));
    expect(validatePT("232013969")).toBe(validateNIF("232013969"));
    expect(validatePT("invalid")).toBe(validateNIF("invalid"));
  });
});
