# Spain (ES)

Validation of tax documents for Spain.

## Supported Documents

| Document | Description                | Format                    |
| :------- | :------------------------- | :------------------------ |
| **DNI**  | National Identity Document | 8 digits + Check digit    |
| **NIE**  | Foreign Identity Number    | X/Y/Z + 7 digits + Letter |
| **CIF**  | Tax Identification Code    | Letter + 8 digits/letters |

## Usage

```typescript
import { validateIdentification } from "validator-tax-id";

// DNI
validateIdentification("es", "12345678Z");
```
