# France (FR)

Validation of tax and business identifiers for France.

## Supported Documents

| Document  | Description                                               | Format    |
| :-------- | :-------------------------------------------------------- | :-------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 digits  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 digits |

## Usage

The function automatically detects the length to validate SIREN or SIRET.

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN
validateIdentification("fr", "732829320"); // ✅ True

// SIRET
validateIdentification("fr", "732 829 320 00074"); // ✅ True
```
