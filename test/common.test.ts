import { describe, it, expect } from "vitest";
import {
  validateIdentification,
  validateES,
  validateFR,
  validatePT,
  validateDE,
} from "../src/index";

// ============================================================
// EDGE CASES AND OTHER TESTS
// ============================================================
describe("Test validations of other cases", () => {
  it("should return false for unsupported countries", () => {
    // @ts-ignore - Testing runtime behavior with invalid country codes
    expect(validateIdentification("eu", "123")).toBe(false);
    // @ts-ignore
    expect(validateIdentification("it", "RSSMRA85M01H501Z")).toBe(false);
    // @ts-ignore
    expect(validateIdentification("uk", "AB123456C")).toBe(false);
  });

  it("should handle empty strings gracefully", () => {
    expect(validateIdentification("es", "")).toBe(false);
    expect(validateIdentification("fr", "")).toBe(false);
    expect(validateIdentification("pt", "")).toBe(false);
    expect(validateIdentification("de", "")).toBe(false);
  });

  it("should handle null/undefined gracefully", () => {
    expect(validateIdentification("es", null)).toBe(false);
    expect(validateIdentification("es", undefined)).toBe(false);
    expect(validateIdentification("fr", null)).toBe(false);
    expect(validateIdentification("pt", null)).toBe(false);
    expect(validateIdentification("de", null)).toBe(false);
    expect(validateIdentification("de", undefined)).toBe(false);
  });

  it("should handle non-string types gracefully", () => {
    expect(validateIdentification("es", 12345678)).toBe(false);
    expect(validateIdentification("es", {})).toBe(false);
    expect(validateIdentification("es", [])).toBe(false);
    expect(validateIdentification("fr", 443061841)).toBe(false);
    expect(validateIdentification("de", 86095742719)).toBe(false);
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

  const germanTestCases = [
    "86095742719", // SteuerIdNr
    "DE136695976", // VAT Number
    "136695976", // W-IdNr
    "invalid",
    "",
  ];

  germanTestCases.forEach((testCase) => {
    it(`DE: validateIdentification should match validateDE for "${testCase}"`, () => {
      expect(validateIdentification("de", testCase)).toBe(validateDE(testCase));
    });
  });
});
