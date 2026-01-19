# Portugal (PT)

Validation of tax documents for Portugal.

## Supported Documents

| Document | Description               | Format   |
| :------- | :------------------------ | :------- |
| **NIF**  | Tax Identification Number | 9 digits |

The NIF is used for both individuals and legal entities.

## Notes

- Validation includes the official modulo 11 checksum.
- The validator verifies valid NIF prefixes (1, 2, 3, 5, 6, 8, 9) to avoid false positives.
- Input may contain spaces or hyphens, which are automatically ignored.

### Valid NIF Prefixes

| Prefix  | Entity Type                              |
| :------ | :--------------------------------------- |
| 1, 2, 3 | Individual persons                       |
| 5       | Legal entities (companies)               |
| 6       | Public entities                          |
| 8       | Sole proprietors (empresário individual) |
| 9       | Irregular entities and others            |

## Usage

### Individual Validator (Recommended)

```typescript
import { validateNIF } from "validator-tax-id";

// Personal NIF
validateNIF("123456789"); // ✅ true
validateNIF("232013969"); // ✅ true

// Company NIF
validateNIF("501442600"); // ✅ true (EDP)

// Public entity
validateNIF("600084779"); // ✅ true

// With formatting
validateNIF("123-456-789"); // ✅ true
validateNIF("123 456 789"); // ✅ true
```

### Auto-detect (Alias)

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // ✅ true (same as validateNIF)
```

### Generic Function

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "123456789"); // ✅ true
validateIdentification("pt", "501 964 843"); // ✅ true
```
