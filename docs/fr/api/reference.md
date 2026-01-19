# Référence API

Détails des fonctions exportées par le package `validator-tax-id`.

## Fonction Générique

Si vous préférez une validation dynamique basée sur le code pays.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `CountryCode` ('es' | 'fr' | 'pt')
- **taxId**: `string` - Le document à valider
- **Retourne**: `boolean`

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "501964843"); // true
validateIdentification("fr", "732829320"); // true
validateIdentification("es", "12345678Z"); // true
```

---

## Validateurs d'Auto-détection par Pays

Ces fonctions auto-détectent le type de document dans un pays.

### `validateFR(value)`

Valide n'importe quel ID français (SIREN, SIRET ou NIR). Auto-détecte par longueur.

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // true (SIREN - 9 chiffres)
validateFR("44306184100047"); // true (SIRET - 14 chiffres)
validateFR("188057512301180"); // true (NIR - 15 chiffres)
```

### `validateES(value)`

Valide n'importe quel ID espagnol (DNI, NIE ou CIF). Auto-détecte le type.

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // true (DNI)
validateES("X1234567L"); // true (NIE)
validateES("A58818501"); // true (CIF)
```

### `validatePT(value)`

Valide le NIF portugais. Alias de `validateNIF`.

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // true
```

---

## Validateurs Individuels 🇫🇷 France

### `validateSIREN(value)`

Valide **uniquement** le SIREN français (9 chiffres, algorithme de Luhn).

```typescript
import { validateSIREN } from "validator-tax-id";

validateSIREN("443061841"); // true (Google France)
validateSIREN("552100554"); // true (Total SA)
```

### `validateSIRET(value)`

Valide **uniquement** le SIRET français (14 chiffres = SIREN + NIC, algorithme de Luhn).

```typescript
import { validateSIRET } from "validator-tax-id";

validateSIRET("44306184100047"); // true
```

### `validateNIR(value)`

Valide **uniquement** le NIR français / Numéro de Sécurité Sociale (15 chiffres, Mod 97).

```typescript
import { validateNIR } from "validator-tax-id";

validateNIR("188057512301180"); // true
validateNIR("199072A12801261"); // true (Corse 2A)
```

---

## Validateurs Individuels 🇪🇸 Espagne

### `validateDNI(value)`

Valide **uniquement** le DNI espagnol (8 chiffres + lettre).

```typescript
import { validateDNI } from "validator-tax-id";

validateDNI("12345678Z"); // true
validateDNI("X1234567L"); // false (c'est un NIE, pas un DNI)
```

### `validateNIE(value)`

Valide **uniquement** le NIE espagnol (X/Y/Z + 7 chiffres + lettre).

```typescript
import { validateNIE } from "validator-tax-id";

validateNIE("X1234567L"); // true
validateNIE("Y2345678Z"); // true
validateNIE("12345678Z"); // false (c'est un DNI, pas un NIE)
```

### `validateCIF(value)`

Valide **uniquement** le CIF espagnol (lettre + 7 chiffres + contrôle).

```typescript
import { validateCIF } from "validator-tax-id";

validateCIF("A58818501"); // true (entreprise SA)
validateCIF("B99286320"); // true (entreprise SL)
validateCIF("P7800001E"); // true (organisme public)
```

---

## Validateurs Individuels 🇵🇹 Portugal

### `validateNIF(value)`

Valide le NIF portugais (9 chiffres, algorithme Mod 11).

```typescript
import { validateNIF } from "validator-tax-id";

validateNIF("123456789"); // true (personnel)
validateNIF("501442600"); // true (entreprise - EDP)
```

---

## Résumé des Exportations

```typescript
import {
  // Générique
  validateIdentification,

  // France 🇫🇷
  validateFR, // Auto-détecte SIREN/SIRET/NIR
  validateSIREN, // SIREN uniquement
  validateSIRET, // SIRET uniquement
  validateNIR, // NIR uniquement

  // Espagne 🇪🇸
  validateES, // Auto-détecte DNI/NIE/CIF
  validateDNI, // DNI uniquement
  validateNIE, // NIE uniquement
  validateCIF, // CIF uniquement

  // Portugal 🇵🇹
  validatePT, // Alias de validateNIF
  validateNIF, // NIF
} from "validator-tax-id";
```
