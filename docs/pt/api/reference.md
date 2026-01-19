# Referência API

Detalhes das funções exportadas pelo pacote `validator-tax-id`.

## Função Genérica

Se preferir validação dinâmica baseada no código do país.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `CountryCode` ('es' | 'fr' | 'pt')
- **taxId**: `string` - O documento a validar
- **Retorna**: `boolean`

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "501964843"); // true
validateIdentification("fr", "732829320"); // true
validateIdentification("es", "12345678Z"); // true
```

---

## Validadores de Auto-deteção por País

Estas funções auto-detetam o tipo de documento dentro de um país.

### `validateES(value)`

Valida qualquer ID espanhol (DNI, NIE ou CIF). Auto-deteta o tipo.

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // true (DNI)
validateES("X1234567L"); // true (NIE)
validateES("A58818501"); // true (CIF)
```

### `validateFR(value)`

Valida qualquer ID francês (SIREN, SIRET ou NIR). Auto-deteta por comprimento.

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // true (SIREN - 9 dígitos)
validateFR("44306184100047"); // true (SIRET - 14 dígitos)
validateFR("188057512301180"); // true (NIR - 15 dígitos)
```

### `validatePT(value)`

Valida NIF português. Alias de `validateNIF`.

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // true
```

---

## Validadores Individuais 🇵🇹 Portugal

### `validateNIF(value)`

Valida NIF português (9 dígitos, algoritmo Mod 11).

```typescript
import { validateNIF } from "validator-tax-id";

validateNIF("123456789"); // true (pessoal)
validateNIF("501442600"); // true (empresa - EDP)
```

---

## Validadores Individuais 🇪🇸 Espanha

### `validateDNI(value)`

Valida **apenas** DNI espanhol (8 dígitos + letra).

```typescript
import { validateDNI } from "validator-tax-id";

validateDNI("12345678Z"); // true
validateDNI("X1234567L"); // false (isto é um NIE, não DNI)
```

### `validateNIE(value)`

Valida **apenas** NIE espanhol (X/Y/Z + 7 dígitos + letra).

```typescript
import { validateNIE } from "validator-tax-id";

validateNIE("X1234567L"); // true
validateNIE("Y2345678Z"); // true
validateNIE("12345678Z"); // false (isto é um DNI, não NIE)
```

### `validateCIF(value)`

Valida **apenas** CIF espanhol (letra + 7 dígitos + controlo).

```typescript
import { validateCIF } from "validator-tax-id";

validateCIF("A58818501"); // true (empresa SA)
validateCIF("B99286320"); // true (empresa SL)
validateCIF("P7800001E"); // true (organismo público)
```

---

## Validadores Individuais 🇫🇷 França

### `validateSIREN(value)`

Valida **apenas** SIREN francês (9 dígitos, algoritmo de Luhn).

```typescript
import { validateSIREN } from "validator-tax-id";

validateSIREN("443061841"); // true (Google France)
validateSIREN("552100554"); // true (Total SA)
```

### `validateSIRET(value)`

Valida **apenas** SIRET francês (14 dígitos = SIREN + NIC, algoritmo de Luhn).

```typescript
import { validateSIRET } from "validator-tax-id";

validateSIRET("44306184100047"); // true
```

### `validateNIR(value)`

Valida **apenas** NIR francês / Número de Segurança Social (15 dígitos, Mod 97).

```typescript
import { validateNIR } from "validator-tax-id";

validateNIR("188057512301180"); // true
validateNIR("199072A12801261"); // true (Córsega 2A)
```

---

## Resumo de Exportações

```typescript
import {
  // Genérico
  validateIdentification,

  // Portugal 🇵🇹
  validatePT, // Alias de validateNIF
  validateNIF, // NIF

  // Espanha 🇪🇸
  validateES, // Auto-deteta DNI/NIE/CIF
  validateDNI, // Apenas DNI
  validateNIE, // Apenas NIE
  validateCIF, // Apenas CIF

  // França 🇫🇷
  validateFR, // Auto-deteta SIREN/SIRET/NIR
  validateSIREN, // Apenas SIREN
  validateSIRET, // Apenas SIRET
  validateNIR, // Apenas NIR
} from "validator-tax-id";
```
