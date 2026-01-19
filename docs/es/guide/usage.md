# Uso Básico

La librería expone funciones de validación para cada país soportado.

## Validación Genérica

Usa `validateIdentification` para validación dinámica basada en código de país:

```typescript
import { validateIdentification } from "validator-tax-id";

// Validar DNI español
const isDniValid = validateIdentification("es", "12345678Z");

if (isDniValid) {
  console.log("Correcto ✅");
} else {
  console.error("Incorrecto ❌");
}
```

## Validadores Individuales (Recomendado) ✨

Para mejor tree-shaking y acceso directo, usa las funciones de validación individuales:

```typescript
import { validateDNI, validateCIF, validateNIE } from "validator-tax-id";

// Valida tipos de documento específicos directamente
validateDNI("12345678Z"); // ✅ true - Solo DNI español
validateNIE("X1234567L"); // ✅ true - Solo NIE español
validateCIF("A58818501"); // ✅ true - Solo CIF español
```

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// Validadores franceses
validateSIREN("443061841"); // ✅ true - Solo SIREN
validateSIRET("44306184100047"); // ✅ true - Solo SIRET
validateNIR("188057512301180"); // ✅ true - Solo NIR
```

```typescript
import { validateNIF } from "validator-tax-id";

// Validador portugués
validateNIF("123456789"); // ✅ true - NIF portugués
```

## Auto-detección por País

Si no conoces el tipo específico de documento, usa el validador de país:

```typescript
import { validateES, validateFR, validatePT } from "validator-tax-id";

// Auto-detecta DNI, NIE o CIF
validateES("12345678Z"); // ✅ true (detectado como DNI)
validateES("A58818501"); // ✅ true (detectado como CIF)

// Auto-detecta SIREN, SIRET o NIR por longitud
validateFR("443061841"); // ✅ true (detectado como SIREN - 9 dígitos)
validateFR("44306184100047"); // ✅ true (detectado como SIRET - 14 dígitos)

// NIF portugués
validatePT("123456789"); // ✅ true
```

## Estilo Vanilla

No te preocupes, úsalo donde quieras

```JS
<script type="module">
    import { validateDNI, validateCIF } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

    const input = document.getElementById("id-input");
    const value = input.value.trim();

    // Validación directa
    if (validateDNI(value)) {
        result.textContent = "DNI Válido ✅";
    } else if (validateCIF(value)) {
        result.textContent = "CIF Válido ✅";
    } else {
        result.textContent = "Inválido ❌";
    }
</script>
```
