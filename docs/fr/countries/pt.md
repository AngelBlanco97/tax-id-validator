# Portugal (PT)

Validation des documents fiscaux pour le Portugal.

## Documents Supportés

| Document | Description                    | Format     |
| :------- | :----------------------------- | :--------- |
| **NIF**  | Número de Identificação Fiscal | 9 chiffres |

Le NIF est utilisé à la fois pour les personnes physiques et morales.

## Notes

- La validation inclut le checksum officiel modulo 11.
- Le validateur vérifie les préfixes NIF valides (1, 2, 3, 5, 6, 8, 9) pour éviter les faux positifs.
- L'entrée peut contenir des espaces ou des tirets, qui sont automatiquement ignorés.

### Préfixes NIF Valides

| Préfixe | Type d'Entité                   |
| :------ | :------------------------------ |
| 1, 2, 3 | Personnes physiques             |
| 5       | Personnes morales (entreprises) |
| 6       | Entités publiques               |
| 8       | Entrepreneurs individuels       |
| 9       | Entités irrégulières et autres  |

## Utilisation

### Validateur Individuel (Recommandé)

```typescript
import { validateNIF } from "validator-tax-id";

// NIF personnel
validateNIF("123456789"); // ✅ true
validateNIF("232013969"); // ✅ true

// NIF d'entreprise
validateNIF("501442600"); // ✅ true (EDP)

// Entité publique
validateNIF("600084779"); // ✅ true

// Avec formatage
validateNIF("123-456-789"); // ✅ true
validateNIF("123 456 789"); // ✅ true
```

### Auto-détection (Alias)

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // ✅ true (identique à validateNIF)
```

### Fonction Générique

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "123456789"); // ✅ true
validateIdentification("pt", "501 964 843"); // ✅ true
```
