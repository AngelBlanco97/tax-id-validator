# Spain (ES)

Validation of tax documents for Spain.

## Supported Documents

| Document | Description                | Format                      |
| :------- | :------------------------- | :-------------------------- |
| **DNI**  | National Identity Document | 8 digits + Check digit      |
| **NIE**  | Foreign Identity Number    | X/Y/Z + 7 digits + Letter   |
| **CIF**  | Tax Identification Code    | Letter + 7 digits + Control |

# Notes

- DNI and NIE use a modulo 23 control letter.
- CIF uses a checksum based on entity type, with either a numeric or alphabetic control character.
- Input is case-insensitive and may include spaces or hyphens.

## Usage

```typescript
import { validateIdentification } from "validator-tax-id";

// DNI
validateIdentification("es", "12345678Z"); // ✅ true

// NIE
validateIdentification("es", "X-1234567-L"); // ✅ true

// CIF
validateIdentification("es", "A58818501"); // ✅ true
```
