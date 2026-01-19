# Utilisation de Base

La bibliothèque expose des fonctions de validation pour chaque pays supporté.

## Validation Générique

Utilisez `validateIdentification` pour une validation dynamique basée sur le code pays:

```typescript
import { validateIdentification } from "validator-tax-id";

// Valider un SIREN français
const isSirenValid = validateIdentification("fr", "443061841");

if (isSirenValid) {
  console.log("Correct ✅");
} else {
  console.error("Incorrect ❌");
}
```

## Validateurs Individuels (Recommandé) ✨

Pour un meilleur tree-shaking et un accès direct, utilisez les fonctions de validation individuelles:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// Validateurs français
validateSIREN("443061841"); // ✅ true - SIREN uniquement
validateSIRET("44306184100047"); // ✅ true - SIRET uniquement
validateNIR("188057512301180"); // ✅ true - NIR uniquement
```

```typescript
import { validateDNI, validateCIF, validateNIE } from "validator-tax-id";

// Valide des types de documents spécifiques directement
validateDNI("12345678Z"); // ✅ true - DNI espagnol uniquement
validateNIE("X1234567L"); // ✅ true - NIE espagnol uniquement
validateCIF("A58818501"); // ✅ true - CIF espagnol uniquement
```

```typescript
import { validateNIF } from "validator-tax-id";

// Validateur portugais
validateNIF("123456789"); // ✅ true - NIF portugais
```

## Auto-détection par Pays

Si vous ne connaissez pas le type spécifique de document, utilisez le validateur du pays:

```typescript
import { validateES, validateFR, validatePT } from "validator-tax-id";

// Auto-détecte SIREN, SIRET ou NIR par longueur
validateFR("443061841"); // ✅ true (détecté comme SIREN - 9 chiffres)
validateFR("44306184100047"); // ✅ true (détecté comme SIRET - 14 chiffres)
validateFR("188057512301180"); // ✅ true (détecté comme NIR - 15 chiffres)

// Auto-détecte DNI, NIE ou CIF
validateES("12345678Z"); // ✅ true (détecté comme DNI)
validateES("A58818501"); // ✅ true (détecté comme CIF)

// NIF portugais
validatePT("123456789"); // ✅ true
```

## Style Vanilla

Ne vous inquiétez pas, utilisez-le où vous voulez

```JS
<script type="module">
    import { validateSIREN, validateSIRET } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

    const input = document.getElementById("id-input");
    const value = input.value.trim();

    // Validation directe
    if (validateSIREN(value)) {
        result.textContent = "SIREN Valide ✅";
    } else if (validateSIRET(value)) {
        result.textContent = "SIRET Valide ✅";
    } else {
        result.textContent = "Invalide ❌";
    }
</script>
```
