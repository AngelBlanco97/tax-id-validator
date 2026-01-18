# Portugal (PT)

Validation of tax documents for Portugal.

## Supported Documents

| Document | Description               | Format   |
| :------- | :------------------------ | :------- |
| **NIF**  | Tax Identification Number | 9 digits |

The NIF is used for both individuals and legal entities.

## Usage

```typescript
import { validateIdentification } from "validator-tax-id";

// NIF
validateIdentification("pt", "123456789");

// Accepts strings with spaces or hyphens (these are automatically cleaned up)
validateIdentification("pt", "501 964 843"); // ✅ True
```
