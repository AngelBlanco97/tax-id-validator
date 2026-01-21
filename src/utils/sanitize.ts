/**
 * Sanitization utilities for Tax ID validation
 * Single Responsibility: Only handles string cleaning/normalization
 * @author AngelBlanco97
 * @license MIT
 */

import { isValidString } from "../types";

/**
 * Removes spaces, dashes and converts to uppercase
 * @param value - The value to sanitize
 * @returns Sanitized string or null if input is invalid
 */
export const sanitize = (value: unknown): string | null => {
  if (!isValidString(value)) return null;
  return value.toUpperCase().replace(/[\s-]/g, "");
};

/**
 * Sanitize and validate against a regex pattern
 * @param value - The value to validate
 * @param pattern - The regex pattern to match
 * @returns The sanitized string if valid, null otherwise
 */
export const sanitizeAndMatch = (
  value: unknown,
  pattern: RegExp,
): string | null => {
  const sanitized = sanitize(value);
  if (sanitized === null) return null;
  return pattern.test(sanitized) ? sanitized : null;
};
