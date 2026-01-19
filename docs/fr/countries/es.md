# Espagne (ES)

Validation des documents fiscaux pour l'Espagne.

## Documents Supportés

| Document | Description                     | Format                          |
| :------- | :------------------------------ | :------------------------------ |
| **DNI**  | Documento Nacional de Identidad | 8 chiffres + Lettre de contrôle |
| **NIE**  | Número de Identidad Extranjero  | X/Y/Z + 7 chiffres + Lettre     |
| **CIF**  | Código de Identificación Fiscal | Lettre + 7 chiffres + Contrôle  |

## Notes

- DNI et NIE utilisent une lettre de contrôle modulo 23.
- CIF utilise un checksum basé sur le type d'entité, avec un caractère de contrôle numérique ou alphabétique.
- L'entrée est insensible à la casse et peut inclure des espaces ou des tirets.

## Utilisation

### Validateurs Individuels (Recommandé)

Pour de meilleures performances et tree-shaking, utilisez les validateurs spécifiques:

```typescript
import { validateDNI, validateNIE, validateCIF } from "validator-tax-id";

// DNI - Documento Nacional de Identidad
validateDNI("12345678Z"); // ✅ true
validateDNI("00000000T"); // ✅ true
validateDNI("12345678A"); // ❌ false (lettre incorrecte)

// NIE - Número de Identidad de Extranjero
validateNIE("X1234567L"); // ✅ true
validateNIE("Y2345678Z"); // ✅ true
validateNIE("Z7654321H"); // ✅ true

// CIF - Código de Identificación Fiscal
validateCIF("A58818501"); // ✅ true (entreprise SA)
validateCIF("B99286320"); // ✅ true (entreprise SL)
validateCIF("P7800001E"); // ✅ true (organisme public)
```

### Auto-détection de Type

Si vous ne connaissez pas le type de document:

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // ✅ true (auto-détecté comme DNI)
validateES("X1234567L"); // ✅ true (auto-détecté comme NIE)
validateES("A58818501"); // ✅ true (auto-détecté comme CIF)
```

### Fonction Générique

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("es", "12345678Z"); // ✅ true
validateIdentification("es", "X-1234567-L"); // ✅ true
validateIdentification("es", "A58818501"); // ✅ true
```
