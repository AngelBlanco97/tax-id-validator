import { describe, it, expect } from "vitest";
import {
  validateIdentification,
  // Spain individual validators
  validateES,
  validateDNI,
  validateNIE,
  validateCIF,
  // France individual validators
  validateFR,
  validateNIR,
  validateSIREN,
  validateSIRET,
  // Portugal individual validators
  validatePT,
  validateNIF,
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

// ============================================================
// EDGE CASES AND OTHER TESTS
// ============================================================
describe("Test validations of other cases", () => {
  it("should return false for unsupported countries", () => {
    // @ts-ignore
    expect(validateIdentification("ge", "123")).toBe(false);
    // @ts-ignore
    expect(validateIdentification("de", "123456789")).toBe(false);
    // @ts-ignore
    expect(validateIdentification("it", "RSSMRA85M01H501Z")).toBe(false);
  });

  it("should handle empty strings gracefully", () => {
    expect(validateIdentification("es", "")).toBe(false);
    expect(validateIdentification("fr", "")).toBe(false);
    expect(validateIdentification("pt", "")).toBe(false);
  });

  it("should handle null/undefined gracefully", () => {
    expect(validateIdentification("es", null)).toBe(false);
    expect(validateIdentification("es", undefined)).toBe(false);
    expect(validateIdentification("fr", null)).toBe(false);
    expect(validateIdentification("pt", null)).toBe(false);
  });

  it("should handle non-string types gracefully", () => {
    expect(validateIdentification("es", 12345678)).toBe(false);
    expect(validateIdentification("es", {})).toBe(false);
    expect(validateIdentification("es", [])).toBe(false);
    expect(validateIdentification("fr", 443061841)).toBe(false);
  });
});

// ============================================================
// CONSISTENCY TESTS - Ensure individual validators match generic
// ============================================================
describe("Consistency between validateIdentification and individual validators", () => {
  const spanishTestCases = [
    "12345678Z", // DNI
    "X1234567L", // NIE
    "A58818501", // CIF
    "invalid",
    "",
  ];

  spanishTestCases.forEach((testCase) => {
    it(`ES: validateIdentification should match validateES for "${testCase}"`, () => {
      expect(validateIdentification("es", testCase)).toBe(validateES(testCase));
    });
  });

  const frenchTestCases = [
    "443061841", // SIREN
    "44306184100047", // SIRET
    "invalid",
    "",
  ];

  frenchTestCases.forEach((testCase) => {
    it(`FR: validateIdentification should match validateFR for "${testCase}"`, () => {
      expect(validateIdentification("fr", testCase)).toBe(validateFR(testCase));
    });
  });

  const portugueseTestCases = ["123456789", "232013969", "invalid", ""];

  portugueseTestCases.forEach((testCase) => {
    it(`PT: validateIdentification should match validatePT for "${testCase}"`, () => {
      expect(validateIdentification("pt", testCase)).toBe(validatePT(testCase));
    });
  });
});
