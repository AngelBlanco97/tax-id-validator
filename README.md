# Tax ID Validator

A lightweight, zero-dependency, and universal TypeScript library to validate Tax IDs (Identification Numbers)

It uses precise mathematical algorithms to verify the integrity of the document number and follow guides of the country governments

[![NPM Version](https://img.shields.io/npm/v/validator-tax-id?style=flat-square)](https://www.npmjs.com/package/validator-tax-id)
[![NPM Downloads](https://img.shields.io/npm/dm/validator-tax-id?style=flat-square)](https://www.npmjs.com/package/validator-tax-id)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/AngelBlanco97/tax-id-validator/blob/main/LICENSE)
[![CI Tests](https://github.com/AngelBlanco97/tax-id-validator/actions/workflows/publish.yml/badge.svg)](https://github.com/AngelBlanco97/tax-id-validator/actions)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://paypal.me/AngelBlanco747)

## Supported Countries

| Country     | Code | Documents Supported | Algorithm     |
| ----------- | ---- | ------------------- | ------------- |
| 🇪🇸 Spain    | es   | DNI, NIE , CIF      | Module 23     |
| 🇵🇹 Portugal | pt   | NIF (Personal)      | Module 11     |
| 🇫🇷 France   | fr   | SIREN, SIRET, NIR   | Luhn + Mod.97 |

## Features

- 🚀 **Lightweight:** Zero external dependencies.
- 🔒 **Type-Safe:** Written in TypeScript with full type definitions.
- 🌍 **Universal:** Works in Node.js, React, Vue, Next.js, and Browsers (Legacy Script Tag).
- ⚡ **Tree-shakeable:** Only import what you need (if using advanced exports).

## Installation

```bash
npm install validator-tax-id
# or
yarn add validator-tax-id
# or
pnpm add validator-tax-id
```

## Usage

### Basic Usage

The main function `validateIdentification` takes two arguments: the **country code** (ISO 3166-1 alpha-2) and the **value** to validate.

```typescript
import { validateIdentification } from "validator-tax-id";

// 🇪🇸 Spain (ES)
validateIdentification("es", "12345678Z"); // true (DNI)
validateIdentification("es", "X1234567L"); // true (NIE)
validateIdentification("es", "A58818501"); // true (CIF)

// 🇵🇹 Portugal (PT)
validateIdentification("pt", "232013969"); // true (NIF)

// 🇫🇷 France (FR)
validateIdentification("fr", "443061841"); // true (SIREN)
```

### Individual Validators (Recommended) ✨

For better tree-shaking and direct access, use individual validators:

```typescript
import {
  // Spain
  validateDNI,
  validateNIE,
  validateCIF,
  // France
  validateSIREN,
  validateSIRET,
  validateNIR,
  // Portugal
  validateNIF,
} from "validator-tax-id";

// 🇪🇸 Spain - Direct validation
validateDNI("12345678Z"); // true
validateNIE("X1234567L"); // true
validateCIF("A58818501"); // true

// 🇫🇷 France - Direct validation
validateSIREN("443061841"); // true
validateSIRET("44306184100047"); // true
validateNIR("188057512301180"); // true

// 🇵🇹 Portugal - Direct validation
validateNIF("123456789"); // true
```

### Country Auto-detect

If you don't know the specific document type:

```typescript
import { validateES, validateFR, validatePT } from "validator-tax-id";

validateES("12345678Z"); // true (auto-detects DNI)
validateES("A58818501"); // true (auto-detects CIF)
validateFR("443061841"); // true (auto-detects SIREN)
validatePT("123456789"); // true
```

## API Reference

### `validateIdentification(country, value)`

- **country**: `CountryCode` ('es' | 'pt' | 'fr') - The ISO code of the country.
- **value**: `string` | `any` - The document string to validate.
- **Returns**: `boolean` (`true` if valid, `false` otherwise).

_Note: The validator sanitizes the input automatically (removes spaces, hyphens, and is case-insensitive)._

# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-01-19

### Added 🚀

- **Individual Validators**: New exported functions for direct validation:
  - Spain: `validateDNI`, `validateNIE`, `validateCIF`, `validateES`
  - France: `validateSIREN`, `validateSIRET`, `validateNIR`, `validateFR`
  - Portugal: `validateNIF`, `validatePT`
- Better tree-shaking support with individual exports
- Country auto-detect validators (`validateES`, `validateFR`, `validatePT`)

## [1.1.3] - 2026-01-18

### Added 🚀

- **France (FR)** added validation for NIR document and fix SIREN-SIRET algorithm
- **Spain (ES)** added validation for CIF document.
- **Portugal (PT)** added validation on prefix in NIF document

## [1.1.0] - 2026-01-17

### Added 🚀

- **France (FR)** support added.
- Validation for **SIREN** (9 digits) and **SIRET** (14 digits) using Luhn algorithm.

## [1.0.0] - 2026-01-17

### Added

- Initial release.
- **Spain (ES)** support: DNI and NIE validation (Modulo 23).
- **Portugal (PT)** support: NIF validation (Modulo 11).
- Core logic and TypeScript types.

## Support

If this library helped you, consider buying me a coffee ☕

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://paypal.me/AngelBlanco747)

## License

MIT
