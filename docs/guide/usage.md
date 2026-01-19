# Basic Usage

The library exposes validation functions for each supported country.

## Generic Validation

Use `validateIdentification` for dynamic validation based on country code:

```typescript
import { validateIdentification } from "validator-tax-id";

// Validate Spanish DNI
const isDniValid = validateIdentification("es", "12345678Z");

if (isDniValid) {
  console.log("Correct ✅");
} else {
  console.error("Incorrect ❌");
}
```

## Individual Validators (Recommended) ✨

For better tree-shaking and direct access, use the individual validator functions:

```typescript
import { validateDNI, validateCIF, validateNIE } from "validator-tax-id";

// Validate specific document types directly
validateDNI("12345678Z"); // ✅ true - Spanish DNI only
validateNIE("X1234567L"); // ✅ true - Spanish NIE only
validateCIF("A58818501"); // ✅ true - Spanish CIF only
```

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// French validators
validateSIREN("443061841"); // ✅ true - SIREN only
validateSIRET("44306184100047"); // ✅ true - SIRET only
validateNIR("188057512301180"); // ✅ true - NIR only
```

```typescript
import { validateNIF } from "validator-tax-id";

// Portuguese validator
validateNIF("123456789"); // ✅ true - Portuguese NIF
```

## Auto-detect by Country

If you don't know the specific document type, use the country validator:

```typescript
import { validateES, validateFR, validatePT } from "validator-tax-id";

// Auto-detects DNI, NIE, or CIF
validateES("12345678Z"); // ✅ true (detected as DNI)
validateES("A58818501"); // ✅ true (detected as CIF)

// Auto-detects SIREN, SIRET, or NIR by length
validateFR("443061841"); // ✅ true (detected as SIREN - 9 digits)
validateFR("44306184100047"); // ✅ true (detected as SIRET - 14 digits)

// Portuguese NIF
validatePT("123456789"); // ✅ true
```

## Vanilla style

Don't worry, use it wherever you want

```JS
<script type="module">
    import { validateDNI, validateCIF } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

    const input = document.getElementById("id-input");
    const value = input.value.trim();

    // Direct validation
    if (validateDNI(value)) {
        result.textContent = "Valid DNI ✅";
    } else if (validateCIF(value)) {
        result.textContent = "Valid CIF ✅";
    } else {
        result.textContent = "Invalid ❌";
    }
</script>
```
