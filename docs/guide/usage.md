# Basic Usage

The library exposes validation functions for each supported country.

## Simple Validation

You can import the specific validator for a country to keep your bundle small.

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

## Vanilla style

Don't worry, use it wherever you want

```JS
<script type="module">
        import { validateIdentification } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

        const input = document.getElementById("id-input");
        const dni = input.value.trim();
        validateIdentification("es", dni);

        if (validateIdentification("es", dni)) {
            result.textContent = "Correct ✅";
            result.style.color = "green";
        } else {
            result.textContent = "Incorrect ❌";
            result.style.color = "red";
        }
    </script>
```
