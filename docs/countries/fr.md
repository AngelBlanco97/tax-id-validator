# France (FR)

Validation of personal and business identification numbers for France.

## Supported Documents

| Document  | Description                                               | Format    |
| :-------- | :-------------------------------------------------------- | :-------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 digits  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 digits |
| **NIR**   | Numéro d'Inscription au Répertoire                        | 15 digits |

## Notes

- SIREN and SIRET are used to identify companies and establishments and are validated using the Luhn algorithm.
- NIR is used to identify individuals and is validated using the official modulo 97 algorithm.
- The validator automatically detects the document type based on the input length.

## Usage

The function automatically detects the length to validate SIREN or SIRET.

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (company)
validateIdentification("fr", "732829320"); // ✅ true

// SIRET (establishment)
validateIdentification("fr", "732 829 320 00074"); // ✅ true

// NIR (individual)
validateIdentification("fr", "189079912345678"); // ✅ true
```
