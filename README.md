# Tax ID Validator

A lightweight, zero-dependency, and universal TypeScript library to validate Tax IDs (Identification Numbers)

It uses precise mathematical algorithms to verify the integrity of the document number and follow guides of the country goberments

## Features

- 🚀 **Lightweight:** Zero external dependencies.
- 🔒 **Type-Safe:** Written in TypeScript with full type definitions.
- 🌍 **Universal:** Works in Node.js, React, Vue, Next.js, and Browsers (Legacy Script Tag).
- ⚡ **Tree-shakeable:** Only import what you need (if using advanced exports).

## Installation

```bash
npm install tax-id-validator
# or
yarn add tax-id-validator
# or
pnpm add tax-id-validator
```

## Usage

### Basic Usage

The main function `validateIdentification` takes two arguments: the **country code** (ISO 3166-1 alpha-2) and the **value** to validate.

```typescript
import { validateIdentification } from "tax-id-validator";

// 🇪🇸 Spain (ES)
// Validates DNI (8 digits + letter)
const isDniValid = validateIdentification("es", "12345678Z"); // true

// Validates NIE (X/Y/Z + 7 digits + letter)
const isNieValid = validateIdentification("es", "X1234567L"); // true

// 🇵🇹 Portugal (PT)
// Validates NIF (9 digits with checksum)
const isNifValid = validateIdentification("pt", "232013969"); // true

// 🇫🇷 France (FR)
// Validates SIREN (9 digits) or SIRET (14 digits)
const isSirenValid = validateIdentification("fr", "443061841"); // true
```

## API Reference

### `validateIdentification(country, value)`

- **country**: `CountryCode` ('es' | 'pt' | 'fr') - The ISO code of the country.
- **value**: `string` | `any` - The document string to validate.
- **Returns**: `boolean` (`true` if valid, `false` otherwise).

_Note: The validator sanitizes the input automatically (removes spaces, hyphens, and is case-insensitive)._

## SUPPORTED COUNTRIES

| Country  | Code | Documents Supported | Algorithm      |
| -------- | ---- | ------------------- | -------------- |
| Spain    | es   | DNI, NIE            | Modulo 23      |
| Portugal | pt   | NIF (Personal)      | Modulo 11      |
| France   | fr   | SIREN, SIRET        | Luhn Algorithm |

# Changelog

All notable changes to this project will be documented in this file.

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

## License

MIT
