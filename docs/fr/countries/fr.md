# France (FR)

Validation des numéros d'identification personnels et professionnels pour la France.

## Documents Supportés

| Document  | Description                                               | Format      |
| :-------- | :-------------------------------------------------------- | :---------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 chiffres  |
| **SIRET** | Système d'Identification du Répertoire des Établissements | 14 chiffres |
| **NIR**   | Numéro d'Inscription au Répertoire (Sécurité Sociale)     | 15 chiffres |

## Notes

- SIREN et SIRET sont utilisés pour identifier les entreprises et établissements et sont validés avec l'algorithme de Luhn.
- Le NIR est utilisé pour identifier les individus et est validé avec l'algorithme officiel modulo 97.
- Les départements de Corse utilisent les codes 2A et 2B, qui sont traités correctement.
- Le validateur détecte automatiquement le type de document en fonction de la longueur de l'entrée.

## Utilisation

### Validateurs Individuels (Recommandé)

Pour de meilleures performances et tree-shaking, utilisez les validateurs spécifiques:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// SIREN - Identifiant d'entreprise (9 chiffres)
validateSIREN("443061841"); // ✅ true (Google France)
validateSIREN("552100554"); // ✅ true (Total SA)

// SIRET - Identifiant d'établissement (14 chiffres)
validateSIRET("44306184100047"); // ✅ true

// NIR - Numéro de Sécurité Sociale (15 chiffres)
validateNIR("188057512301180"); // ✅ true
validateNIR("199072A12801261"); // ✅ true (Corse 2A)
validateNIR("299072B12801238"); // ✅ true (Corse 2B)
```

### Auto-détection de Type

Si vous ne connaissez pas le type de document:

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // ✅ true (auto-détecté comme SIREN - 9 chiffres)
validateFR("44306184100047"); // ✅ true (auto-détecté comme SIRET - 14 chiffres)
validateFR("188057512301180"); // ✅ true (auto-détecté comme NIR - 15 chiffres)
```

### Fonction Générique

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (entreprise)
validateIdentification("fr", "443061841"); // ✅ true

// SIRET (établissement)
validateIdentification("fr", "443 061 841 00047"); // ✅ true

// NIR (individuel)
validateIdentification("fr", "188057512301180"); // ✅ true
```
