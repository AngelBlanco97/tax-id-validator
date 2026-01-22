# Allemagne (DE)

Validation des numéros d'identification fiscale pour l'Allemagne.

## Documents Supportés

| Document       | Description                               | Format          |
| :------------- | :---------------------------------------- | :-------------- |
| **SteuerIdNr** | Numéro d'Identification Fiscale Personnel | 11 chiffres     |
| **VAT Number** | Umsatzsteuer-Identifikationsnummer (TVA)  | DE + 9 chiffres |
| **W-IdNr**     | Numéro d'Identification d'Entreprise      | 9 chiffres      |

## Notes

- SteuerIdNr est un identifiant personnel unique attribué à vie. Il utilise l'algorithme ISO 7064 Mod 10,11 et a des règles spécifiques de structure des chiffres.
- Le numéro de TVA (USt-IdNr) est utilisé pour le commerce intra-UE et est préfixé par "DE".
- W-IdNr est utilisé pour l'identification des entreprises.
- Tous les validateurs utilisent l'algorithme ISO 7064 Mod 10,11 pour la validation du checksum.
- L'entrée est insensible à la casse et peut inclure des espaces ou des tirets.

## Utilisation

### Validateurs Individuels (Recommandé)

Pour de meilleures performances et tree-shaking, utilisez les validateurs spécifiques:

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// SteuerIdNr - ID Fiscal Personnel (11 chiffres)
validateSteuerIdNr("86095742719"); // ✅ true
validateSteuerIdNr("65929970489"); // ✅ true
validateSteuerIdNr("86095742710"); // ❌ false (checksum incorrect)

// VAT Number - Umsatzsteuer-ID (DE + 9 chiffres)
validateVatNumber("DE136695976"); // ✅ true
validateVatNumber("DE811128135"); // ✅ true (Google Allemagne)
validateVatNumber("DE136695970"); // ❌ false (checksum incorrect)

// W-IdNr - ID Entreprise (9 chiffres)
validateWidnr("136695976"); // ✅ true
validateWidnr("811128135"); // ✅ true
validateWidnr("136695970"); // ❌ false (checksum incorrect)
```

### Auto-détection de Type

Si vous ne connaissez pas le type de document:

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // ✅ true (auto-détecté comme SteuerIdNr - 11 chiffres)
validateDE("DE136695976"); // ✅ true (auto-détecté comme VAT Number)
validateDE("136695976"); // ✅ true (auto-détecté comme W-IdNr - 9 chiffres)
```

### Fonction Générique

```typescript
import { validateIdentification } from "validator-tax-id";

// SteuerIdNr (personnel)
validateIdentification("de", "86095742719"); // ✅ true

// VAT Number (entreprise)
validateIdentification("de", "DE 136 695 976"); // ✅ true

// W-IdNr (entreprise)
validateIdentification("de", "136-695-976"); // ✅ true
```
