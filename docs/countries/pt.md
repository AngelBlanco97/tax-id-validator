# Portugal (PT)

Validation of tax documents for Portugal.

## Supported Documents

| Document | Description               | Format   |
| :------- | :------------------------ | :------- |
| **NIF**  | Tax Identification Number | 9 digits |

The NIF is used for both individuals and legal entities.

# Notes

- Validation includes the official modulo 11 checksum.
- The validator also verifies valid NIF prefixes to avoid false positives.
- Input may contain spaces or hyphens, which are automatically ignored.

## Usage

```typescript
import { validateIdentification } from "validator-tax-id";

// NIF (individual or company)
validateIdentification("pt", "123456789"); // ✅ true

// Accepts spaces or hyphens
validateIdentification("pt", "501 964 843"); // ✅ true
```
