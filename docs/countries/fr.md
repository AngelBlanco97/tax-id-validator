# France (FR)

Validation of personal and business identification numbers for France.

## Supported Documents

| Document  | Description                                               | Format    |
| :-------- | :-------------------------------------------------------- | :-------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 digits  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 digits |
| **NIR**   | Numéro d'Inscription au Répertoire (Social Security)      | 15 digits |

## Notes

- SIREN and SIRET are used to identify companies and establishments and are validated using the Luhn algorithm.
- NIR is used to identify individuals and is validated using the official modulo 97 algorithm.
- Corsica departments use 2A and 2B codes, which are handled correctly.
- The validator automatically detects the document type based on the input length.

## Usage

### Individual Validators (Recommended)

For better performance and tree-shaking, use the specific validators:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// SIREN - Company identifier (9 digits)
validateSIREN("443061841"); // ✅ true (Google France)
validateSIREN("552100554"); // ✅ true (Total SA)

// SIRET - Establishment identifier (14 digits)
validateSIRET("44306184100047"); // ✅ true

// NIR - Social Security Number (15 digits)
validateNIR("188057512301180"); // ✅ true
validateNIR("199072A12801261"); // ✅ true (Corse 2A)
validateNIR("299072B12801238"); // ✅ true (Corse 2B)
```

### Auto-detect Type

If you don't know the document type:

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // ✅ true (auto-detected as SIREN - 9 digits)
validateFR("44306184100047"); // ✅ true (auto-detected as SIRET - 14 digits)
validateFR("188057512301180"); // ✅ true (auto-detected as NIR - 15 digits)
```

### Generic Function

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (company)
validateIdentification("fr", "443061841"); // ✅ true

// SIRET (establishment)
validateIdentification("fr", "443 061 841 00047"); // ✅ true

// NIR (individual)
validateIdentification("fr", "188057512301180"); // ✅ true
```
