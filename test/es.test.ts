import { describe, it, expect } from "vitest";
import {
  validateIdentification,
  validateES,
  validateDNI,
  validateNIE,
  validateCIF,
} from "../src/index";

// ============================================================
// SPAIN (ES) - Tests using validateIdentification (legacy API)
// ============================================================
describe("Test validations of Spain (ES) - validateIdentification", () => {
  it("should validate a correct DNI", () => {
    expect(validateIdentification("es", "12345678Z")).toBe(true);
  });

  it("should validate a correct NIE (starts with X)", () => {
    expect(validateIdentification("es", "X1234567L")).toBe(true);
  });

  it("should validate a correct NIE (starts with Y)", () => {
    expect(validateIdentification("es", "Y2345678Z")).toBe(true);
  });

  it("should validate a correct NIE (starts with Z)", () => {
    expect(validateIdentification("es", "Z7654321H")).toBe(true);
  });

  it("should be case and dash insensitive", () => {
    expect(validateIdentification("es", "12345678-z")).toBe(true);
    expect(validateIdentification("es", "X-1234567-l")).toBe(true);
  });

  it("should validate a correct CIF (SA)", () => {
    expect(validateIdentification("es", "A58818501")).toBe(true);
  });

  it("should validate a correct CIF (SL)", () => {
    expect(validateIdentification("es", "B99286320")).toBe(true);
  });

  it("should validate a correct CIF (Public organism)", () => {
    expect(validateIdentification("es", "P7800001E")).toBe(true);
  });

  it("should fail a valid CIF with incorrect control digit", () => {
    expect(validateIdentification("es", "A58818502")).toBe(false);
  });

  it("should fail a invalid CIF, not valid first letter", () => {
    expect(validateIdentification("es", "Z1234567L")).toBe(false);
  });

  // --- INVALID CASES ---
  it("should fail with an incorrect letter", () => {
    expect(validateIdentification("es", "12345678A")).toBe(false);
  });

  it("should fail with incorrect format", () => {
    expect(validateIdentification("es", "patata")).toBe(false);
    expect(validateIdentification("es", "Z123456789H")).toBe(false);
  });
});

// ============================================================
// SPAIN (ES) - Individual validator functions
// ============================================================
describe("validateES - Auto-detect Spanish ID type", () => {
  it("should detect and validate DNI", () => {
    expect(validateES("12345678Z")).toBe(true);
  });

  it("should detect and validate NIE", () => {
    expect(validateES("X1234567L")).toBe(true);
  });

  it("should detect and validate CIF", () => {
    expect(validateES("A58818501")).toBe(true);
  });

  it("should reject invalid IDs", () => {
    expect(validateES("invalid")).toBe(false);
  });
});

describe("validateDNI - Spanish DNI only", () => {
  it("should validate correct DNI numbers", () => {
    expect(validateDNI("12345678Z")).toBe(true);
    expect(validateDNI("00000000T")).toBe(true);
    expect(validateDNI("99999999R")).toBe(true);
  });

  it("should handle lowercase letters", () => {
    expect(validateDNI("12345678z")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateDNI("12345678-Z")).toBe(true);
    expect(validateDNI("1234 5678 Z")).toBe(true);
  });

  it("should reject NIE format (even if valid NIE)", () => {
    expect(validateDNI("X1234567L")).toBe(false);
  });

  it("should reject CIF format", () => {
    expect(validateDNI("A58818501")).toBe(false);
  });

  it("should reject incorrect check letter", () => {
    expect(validateDNI("12345678A")).toBe(false);
    expect(validateDNI("12345678B")).toBe(false);
  });

  it("should reject invalid formats", () => {
    expect(validateDNI("1234567Z")).toBe(false); // too short
    expect(validateDNI("123456789Z")).toBe(false); // too long
    expect(validateDNI("1234567ZZ")).toBe(false); // wrong format
    expect(validateDNI("")).toBe(false);
    expect(validateDNI(null)).toBe(false);
    expect(validateDNI(undefined)).toBe(false);
    expect(validateDNI(12345678)).toBe(false); // not a string
  });
});

describe("validateNIE - Spanish NIE only", () => {
  it("should validate NIE starting with X", () => {
    expect(validateNIE("X1234567L")).toBe(true);
    expect(validateNIE("X0000000T")).toBe(true);
  });

  it("should validate NIE starting with Y", () => {
    expect(validateNIE("Y2345678Z")).toBe(true);
  });

  it("should validate NIE starting with Z", () => {
    expect(validateNIE("Z7654321H")).toBe(true);
  });

  it("should handle lowercase", () => {
    expect(validateNIE("x1234567l")).toBe(true);
    expect(validateNIE("y2345678z")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateNIE("X-1234567-L")).toBe(true);
    expect(validateNIE("X 1234567 L")).toBe(true);
  });

  it("should reject DNI format", () => {
    expect(validateNIE("12345678Z")).toBe(false);
  });

  it("should reject CIF format", () => {
    expect(validateNIE("A58818501")).toBe(false);
  });

  it("should reject incorrect check letter", () => {
    expect(validateNIE("X1234567A")).toBe(false);
  });

  it("should reject invalid formats", () => {
    expect(validateNIE("X123456L")).toBe(false); // too short
    expect(validateNIE("X12345678L")).toBe(false); // too long
    expect(validateNIE("A1234567L")).toBe(false); // wrong prefix
    expect(validateNIE("")).toBe(false);
    expect(validateNIE(null)).toBe(false);
  });
});

describe("validateCIF - Spanish CIF only", () => {
  it("should validate CIF with letter A (SA companies)", () => {
    expect(validateCIF("A58818501")).toBe(true);
  });

  it("should validate CIF with letter B (SL companies)", () => {
    expect(validateCIF("B99286320")).toBe(true);
  });

  it("should validate CIF with letter P (public organisms - letter control)", () => {
    expect(validateCIF("P7800001E")).toBe(true);
  });

  it("should validate CIF with letter N (foreign entities)", () => {
    expect(validateCIF("N0032484H")).toBe(true);
  });

  it("should handle lowercase", () => {
    expect(validateCIF("a58818501")).toBe(true);
    expect(validateCIF("b99286320")).toBe(true);
  });

  it("should handle dashes and spaces", () => {
    expect(validateCIF("A-58818501")).toBe(true);
    expect(validateCIF("A 5881 8501")).toBe(true);
  });

  it("should reject DNI format", () => {
    expect(validateCIF("12345678Z")).toBe(false);
  });

  it("should reject NIE format", () => {
    expect(validateCIF("X1234567L")).toBe(false);
  });

  it("should reject incorrect control digit/letter", () => {
    expect(validateCIF("A58818502")).toBe(false);
    expect(validateCIF("A58818503")).toBe(false);
  });

  it("should reject invalid first letters", () => {
    expect(validateCIF("I12345678")).toBe(false); // I not allowed
    expect(validateCIF("O12345678")).toBe(false); // O not allowed
    expect(validateCIF("Y12345678")).toBe(false); // Y not allowed
  });

  it("should reject invalid formats", () => {
    expect(validateCIF("A1234567")).toBe(false); // too short
    expect(validateCIF("A123456789")).toBe(false); // too long
    expect(validateCIF("")).toBe(false);
    expect(validateCIF(null)).toBe(false);
    expect(validateCIF(12345678)).toBe(false);
  });
});
