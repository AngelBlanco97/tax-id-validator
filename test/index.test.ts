import { describe, it, expect } from "vitest";
import { validateIdentification } from "../src/index";

describe("Test validations of Spain (ES)", () => {
  // --- VALID CASES ---
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

  // --- INVALID CASES ---
  it("should fail with an incorrect letter", () => {
    expect(validateIdentification("es", "12345678A")).toBe(false);
  });

  it("should fail with incorrect format", () => {
    expect(validateIdentification("es", "patata")).toBe(false);
    expect(validateIdentification("es", "Z123456789H")).toBe(false);
  });
});

describe("Test validations of Portugal (PT)", () => {
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

describe("Other cases", () => {
  it("should return false for unsupported countries", () => {
    // @ts-ignore
    expect(validateIdentification("fr", "123")).toBe(false);
  });
});
