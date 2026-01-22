# Germany (DE)

Validation of tax identification numbers for Germany.

## Supported Documents

| Document       | Description                          | Format        |
| :------------- | :----------------------------------- | :------------ |
| **SteuerIdNr** | Tax Identification Number (Personal) | 11 digits     |
| **VAT Number** | Umsatzsteuer-Identifikationsnummer   | DE + 9 digits |
| **W-IdNr**     | Business Identification Number       | 9 digits      |

## Notes

- SteuerIdNr is a unique personal identifier assigned for life. It uses ISO 7064 Mod 10,11 checksum and has specific digit structure rules.
- VAT Number (USt-IdNr) is used for intra-EU trade and is prefixed with "DE".
- W-IdNr is used for business identification purposes.
- All validators use the ISO 7064 Mod 10,11 algorithm for checksum validation.
- Input is case-insensitive and may include spaces or hyphens.

## Usage

### Individual Validators (Recommended)

For better performance and tree-shaking, use the specific validators:

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// SteuerIdNr - Personal Tax ID (11 digits)
validateSteuerIdNr("86095742719"); // ✅ true
validateSteuerIdNr("65929970489"); // ✅ true
validateSteuerIdNr("86095742710"); // ❌ false (wrong checksum)

// VAT Number - Umsatzsteuer-ID (DE + 9 digits)
validateVatNumber("DE136695976"); // ✅ true
validateVatNumber("DE811128135"); // ✅ true (Google Germany)
validateVatNumber("DE136695970"); // ❌ false (wrong checksum)

// W-IdNr - Business ID (9 digits)
validateWidnr("136695976"); // ✅ true
validateWidnr("811128135"); // ✅ true
validateWidnr("136695970"); // ❌ false (wrong checksum)
```

### Auto-detect Type

If you don't know the document type:

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // ✅ true (auto-detected as SteuerIdNr - 11 digits)
validateDE("DE136695976"); // ✅ true (auto-detected as VAT Number)
validateDE("136695976"); // ✅ true (auto-detected as W-IdNr - 9 digits)
```

### Generic Function

```typescript
import { validateIdentification } from "validator-tax-id";

// SteuerIdNr (personal)
validateIdentification("de", "86095742719"); // ✅ true

// VAT Number (company)
validateIdentification("de", "DE 136 695 976"); // ✅ true

// W-IdNr (business)
validateIdentification("de", "136-695-976"); // ✅ true
```
