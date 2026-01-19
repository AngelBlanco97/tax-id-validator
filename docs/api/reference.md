# API Reference

Details of the functions exported by the `validator-tax-id` package.

## Generic Function

If you prefer dynamic validation based on the country code.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `CountryCode` ('es' | 'fr' | 'pt')
- **taxId**: `string` - The document to validate
- **Returns**: `boolean`

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "501964843"); // true
validateIdentification("fr", "732829320"); // true
validateIdentification("es", "12345678Z"); // true
```

---

## Country Auto-detect Validators

These functions auto-detect the document type within a country.

### `validateES(value)`

Validates any Spanish ID (DNI, NIE, or CIF). Auto-detects type.

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // true (DNI)
validateES("X1234567L"); // true (NIE)
validateES("A58818501"); // true (CIF)
```

### `validateFR(value)`

Validates any French ID (SIREN, SIRET, or NIR). Auto-detects by length.

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // true (SIREN - 9 digits)
validateFR("44306184100047"); // true (SIRET - 14 digits)
validateFR("188057512301180"); // true (NIR - 15 digits)
```

### `validatePT(value)`

Validates Portuguese NIF. Alias for `validateNIF`.

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // true
```

---

## Individual Validators 🇪🇸 Spain

### `validateDNI(value)`

Validates **only** Spanish DNI (8 digits + letter).

- **value**: `string` - The DNI to validate
- **Returns**: `boolean`

```typescript
import { validateDNI } from "validator-tax-id";

validateDNI("12345678Z"); // true
validateDNI("X1234567L"); // false (this is a NIE, not DNI)
```

### `validateNIE(value)`

Validates **only** Spanish NIE (X/Y/Z + 7 digits + letter).

- **value**: `string` - The NIE to validate
- **Returns**: `boolean`

```typescript
import { validateNIE } from "validator-tax-id";

validateNIE("X1234567L"); // true
validateNIE("Y2345678Z"); // true
validateNIE("12345678Z"); // false (this is a DNI, not NIE)
```

### `validateCIF(value)`

Validates **only** Spanish CIF (letter + 7 digits + control).

- **value**: `string` - The CIF to validate
- **Returns**: `boolean`

```typescript
import { validateCIF } from "validator-tax-id";

validateCIF("A58818501"); // true (SA company)
validateCIF("B99286320"); // true (SL company)
validateCIF("P7800001E"); // true (Public organism)
```

---

## Individual Validators 🇫🇷 France

### `validateSIREN(value)`

Validates **only** French SIREN (9 digits, Luhn algorithm).

- **value**: `string` - The SIREN to validate
- **Returns**: `boolean`

```typescript
import { validateSIREN } from "validator-tax-id";

validateSIREN("443061841"); // true (Google France)
validateSIREN("552100554"); // true (Total SA)
```

### `validateSIRET(value)`

Validates **only** French SIRET (14 digits = SIREN + NIC, Luhn algorithm).

- **value**: `string` - The SIRET to validate
- **Returns**: `boolean`

```typescript
import { validateSIRET } from "validator-tax-id";

validateSIRET("44306184100047"); // true
```

### `validateNIR(value)`

Validates **only** French NIR / Social Security Number (15 digits, Mod 97).

- **value**: `string` - The NIR to validate
- **Returns**: `boolean`

```typescript
import { validateNIR } from "validator-tax-id";

validateNIR("188057512301180"); // true
validateNIR("199072A12801261"); // true (Corse 2A)
```

---

## Individual Validators 🇵🇹 Portugal

### `validateNIF(value)`

Validates Portuguese NIF (9 digits, Mod 11 algorithm).

- **value**: `string` - The NIF to validate
- **Returns**: `boolean`

```typescript
import { validateNIF } from "validator-tax-id";

validateNIF("123456789"); // true (personal)
validateNIF("501442600"); // true (company - EDP)
```

---

## All Exports Summary

```typescript
import {
  // Generic
  validateIdentification,

  // Spain 🇪🇸
  validateES, // Auto-detect DNI/NIE/CIF
  validateDNI, // DNI only
  validateNIE, // NIE only
  validateCIF, // CIF only

  // France 🇫🇷
  validateFR, // Auto-detect SIREN/SIRET/NIR
  validateSIREN, // SIREN only
  validateSIRET, // SIRET only
  validateNIR, // NIR only

  // Portugal 🇵🇹
  validatePT, // Alias for validateNIF
  validateNIF, // NIF
} from "validator-tax-id";
```
