# Api Reference

Details of the functions exported by the `validator-tax-id` package.

## Generic function

If you prefer dynamic validation based on the country code.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `string` (Código ISO 3166-1 alpha-2, ej: 'ES', 'FR', 'PT').
- **taxId**: `string` (El documento a validar).
- **Returns**: `boolean`.

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("PT", "501964843"); // true
validateIdentification("FR", "732829320"); // true
```
