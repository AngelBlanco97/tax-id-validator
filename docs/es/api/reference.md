# Referencia API

Detalles de las funciones exportadas por el paquete `validator-tax-id`.

## Función Genérica

Si prefieres validación dinámica basada en el código de país.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `CountryCode` ('es' | 'fr' | 'pt')
- **taxId**: `string` - El documento a validar
- **Retorna**: `boolean`

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "501964843"); // true
validateIdentification("fr", "732829320"); // true
validateIdentification("es", "12345678Z"); // true
```

---

## Validadores de Auto-detección por País

Estas funciones auto-detectan el tipo de documento dentro de un país.

### `validateES(value)`

Valida cualquier ID español (DNI, NIE o CIF). Auto-detecta el tipo.

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // true (DNI)
validateES("X1234567L"); // true (NIE)
validateES("A58818501"); // true (CIF)
```

### `validateFR(value)`

Valida cualquier ID francés (SIREN, SIRET o NIR). Auto-detecta por longitud.

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // true (SIREN - 9 dígitos)
validateFR("44306184100047"); // true (SIRET - 14 dígitos)
validateFR("188057512301180"); // true (NIR - 15 dígitos)
```

### `validatePT(value)`

Valida NIF portugués. Alias de `validateNIF`.

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // true
```

---

## Validadores Individuales 🇪🇸 España

### `validateDNI(value)`

Valida **solo** DNI español (8 dígitos + letra).

```typescript
import { validateDNI } from "validator-tax-id";

validateDNI("12345678Z"); // true
validateDNI("X1234567L"); // false (esto es un NIE, no DNI)
```

### `validateNIE(value)`

Valida **solo** NIE español (X/Y/Z + 7 dígitos + letra).

```typescript
import { validateNIE } from "validator-tax-id";

validateNIE("X1234567L"); // true
validateNIE("Y2345678Z"); // true
validateNIE("12345678Z"); // false (esto es un DNI, no NIE)
```

### `validateCIF(value)`

Valida **solo** CIF español (letra + 7 dígitos + control).

```typescript
import { validateCIF } from "validator-tax-id";

validateCIF("A58818501"); // true (empresa SA)
validateCIF("B99286320"); // true (empresa SL)
validateCIF("P7800001E"); // true (organismo público)
```

---

## Validadores Individuales 🇫🇷 Francia

### `validateSIREN(value)`

Valida **solo** SIREN francés (9 dígitos, algoritmo de Luhn).

```typescript
import { validateSIREN } from "validator-tax-id";

validateSIREN("443061841"); // true (Google France)
validateSIREN("552100554"); // true (Total SA)
```

### `validateSIRET(value)`

Valida **solo** SIRET francés (14 dígitos = SIREN + NIC, algoritmo de Luhn).

```typescript
import { validateSIRET } from "validator-tax-id";

validateSIRET("44306184100047"); // true
```

### `validateNIR(value)`

Valida **solo** NIR francés / Número de Seguridad Social (15 dígitos, Mod 97).

```typescript
import { validateNIR } from "validator-tax-id";

validateNIR("188057512301180"); // true
validateNIR("199072A12801261"); // true (Córcega 2A)
```

---

## Validadores Individuales 🇵🇹 Portugal

### `validateNIF(value)`

Valida NIF portugués (9 dígitos, algoritmo Mod 11).

```typescript
import { validateNIF } from "validator-tax-id";

validateNIF("123456789"); // true (personal)
validateNIF("501442600"); // true (empresa - EDP)
```

---

## Resumen de Exportaciones

```typescript
import {
  // Genérico
  validateIdentification,

  // España 🇪🇸
  validateES, // Auto-detecta DNI/NIE/CIF
  validateDNI, // Solo DNI
  validateNIE, // Solo NIE
  validateCIF, // Solo CIF

  // Francia 🇫🇷
  validateFR, // Auto-detecta SIREN/SIRET/NIR
  validateSIREN, // Solo SIREN
  validateSIRET, // Solo SIRET
  validateNIR, // Solo NIR

  // Portugal 🇵🇹
  validatePT, // Alias de validateNIF
  validateNIF, // NIF
} from "validator-tax-id";
```
