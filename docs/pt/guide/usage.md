# Uso Básico

A biblioteca expõe funções de validação para cada país suportado.

## Validação Genérica

Use `validateIdentification` para validação dinâmica baseada no código do país:

```typescript
import { validateIdentification } from "validator-tax-id";

// Validar NIF português
const isNifValid = validateIdentification("pt", "123456789");

if (isNifValid) {
  console.log("Correto ✅");
} else {
  console.error("Incorreto ❌");
}
```

## Validadores Individuais (Recomendado) ✨

Para melhor tree-shaking e acesso direto, use as funções de validação individuais:

```typescript
import { validateNIF } from "validator-tax-id";

// Validador português
validateNIF("123456789"); // ✅ true - NIF português
```

```typescript
import { validateDNI, validateCIF, validateNIE } from "validator-tax-id";

// Valida tipos de documento específicos diretamente
validateDNI("12345678Z"); // ✅ true - Apenas DNI espanhol
validateNIE("X1234567L"); // ✅ true - Apenas NIE espanhol
validateCIF("A58818501"); // ✅ true - Apenas CIF espanhol
```

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// Validadores franceses
validateSIREN("443061841"); // ✅ true - Apenas SIREN
validateSIRET("44306184100047"); // ✅ true - Apenas SIRET
validateNIR("188057512301180"); // ✅ true - Apenas NIR
```

## Auto-deteção por País

Se não conhecer o tipo específico de documento, use o validador do país:

```typescript
import { validateES, validateFR, validatePT } from "validator-tax-id";

// Auto-deteta DNI, NIE ou CIF
validateES("12345678Z"); // ✅ true (detetado como DNI)
validateES("A58818501"); // ✅ true (detetado como CIF)

// Auto-deteta SIREN, SIRET ou NIR por comprimento
validateFR("443061841"); // ✅ true (detetado como SIREN - 9 dígitos)
validateFR("44306184100047"); // ✅ true (detetado como SIRET - 14 dígitos)

// NIF português
validatePT("123456789"); // ✅ true
```

## Estilo Vanilla

Não se preocupe, use onde quiser

```JS
<script type="module">
    import { validateNIF } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

    const input = document.getElementById("id-input");
    const value = input.value.trim();

    // Validação direta
    if (validateNIF(value)) {
        result.textContent = "NIF Válido ✅";
    } else {
        result.textContent = "Inválido ❌";
    }
</script>
```
