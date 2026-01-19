# Spain (ES)

Validation of tax documents for Spain.

## Supported Documents

| Document | Description                | Format                      |
| :------- | :------------------------- | :-------------------------- |
| **DNI**  | National Identity Document | 8 digits + Check digit      |
| **NIE**  | Foreign Identity Number    | X/Y/Z + 7 digits + Letter   |
| **CIF**  | Tax Identification Code    | Letter + 7 digits + Control |

## Notes

- DNI and NIE use a modulo 23 control letter.
- CIF uses a checksum based on entity type, with either a numeric or alphabetic control character.
- Input is case-insensitive and may include spaces or hyphens.

## Usage

### Individual Validators (Recommended)

For better performance and tree-shaking, use the specific validators:

```typescript
import { validateDNI, validateNIE, validateCIF } from "validator-tax-id";

// DNI - National Identity Document
validateDNI("12345678Z"); // ✅ true
validateDNI("00000000T"); // ✅ true
validateDNI("12345678A"); // ❌ false (wrong letter)

// NIE - Foreign Identity Number
validateNIE("X1234567L"); // ✅ true
validateNIE("Y2345678Z"); // ✅ true
validateNIE("Z7654321H"); // ✅ true

// CIF - Tax Identification Code
validateCIF("A58818501"); // ✅ true (SA company)
validateCIF("B99286320"); // ✅ true (SL company)
validateCIF("P7800001E"); // ✅ true (Public organism)
```

### Auto-detect Type

If you don't know the document type:

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // ✅ true (auto-detected as DNI)
validateES("X1234567L"); // ✅ true (auto-detected as NIE)
validateES("A58818501"); // ✅ true (auto-detected as CIF)
```

### Generic Function

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("es", "12345678Z"); // ✅ true
validateIdentification("es", "X-1234567-L"); // ✅ true
validateIdentification("es", "A58818501"); // ✅ true
```
