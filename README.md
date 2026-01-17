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
```

## API Reference

### `validateIdentification(country, value)`

- **country**: `CountryCode` ('es' | 'pt') - The ISO code of the country.
- **value**: `string` | `any` - The document string to validate.
- **Returns**: `boolean` (`true` if valid, `false` otherwise).

_Note: The validator sanitizes the input automatically (removes spaces, hyphens, and is case-insensitive)._

## License

MIT
