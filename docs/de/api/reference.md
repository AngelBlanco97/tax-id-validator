# API-Referenz

Details zu den vom Paket `validator-tax-id` exportierten Funktionen.

## Generische Funktion

Wenn Sie dynamische Validierung basierend auf dem Ländercode bevorzugen.

### `validateIdentification(countryCode, taxId)`

- **countryCode**: `CountryCode` ('es' | 'fr' | 'pt' | 'de')
- **taxId**: `string` - Das zu validierende Dokument
- **Gibt zurück**: `boolean`

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "501964843"); // true
validateIdentification("fr", "732829320"); // true
validateIdentification("es", "12345678Z"); // true
validateIdentification("de", "86095742719"); // true
```

---

## Auto-Erkennungs-Validatoren nach Land

Diese Funktionen erkennen automatisch den Dokumenttyp innerhalb eines Landes.

### `validateES(value)`

Validiert jede spanische ID (DNI, NIE oder CIF). Erkennt den Typ automatisch.

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // true (DNI)
validateES("X1234567L"); // true (NIE)
validateES("A58818501"); // true (CIF)
```

### `validateFR(value)`

Validiert jede französische ID (SIREN, SIRET oder NIR). Erkennt automatisch nach Länge.

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // true (SIREN - 9 Ziffern)
validateFR("44306184100047"); // true (SIRET - 14 Ziffern)
validateFR("188057512301180"); // true (NIR - 15 Ziffern)
```

### `validatePT(value)`

Validiert portugiesische NIF. Alias für `validateNIF`.

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // true
```

### `validateDE(value)`

Validiert jede deutsche Steuer-ID (SteuerIdNr, VAT Number oder W-IdNr). Erkennt den Typ automatisch.

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // true (SteuerIdNr - 11 Ziffern)
validateDE("DE136695976"); // true (VAT Number - DE + 9 Ziffern)
validateDE("136695976"); // true (W-IdNr - 9 Ziffern)
```

---

## Einzelne Validatoren 🇪🇸 Spanien

### `validateDNI(value)`

Validiert **nur** spanische DNI (8 Ziffern + Buchstabe).

```typescript
import { validateDNI } from "validator-tax-id";

validateDNI("12345678Z"); // true
validateDNI("X1234567L"); // false (dies ist eine NIE, keine DNI)
```

### `validateNIE(value)`

Validiert **nur** spanische NIE (X/Y/Z + 7 Ziffern + Buchstabe).

```typescript
import { validateNIE } from "validator-tax-id";

validateNIE("X1234567L"); // true
validateNIE("Y2345678Z"); // true
validateNIE("12345678Z"); // false (dies ist eine DNI, keine NIE)
```

### `validateCIF(value)`

Validiert **nur** spanische CIF (Buchstabe + 7 Ziffern + Kontrolle).

```typescript
import { validateCIF } from "validator-tax-id";

validateCIF("A58818501"); // true (SA-Unternehmen)
validateCIF("B99286320"); // true (SL-Unternehmen)
validateCIF("P7800001E"); // true (öffentliche Einrichtung)
```

---

## Einzelne Validatoren 🇫🇷 Frankreich

### `validateSIREN(value)`

Validiert **nur** französische SIREN (9 Ziffern, Luhn-Algorithmus).

```typescript
import { validateSIREN } from "validator-tax-id";

validateSIREN("443061841"); // true (Google France)
validateSIREN("552100554"); // true (Total SA)
```

### `validateSIRET(value)`

Validiert **nur** französische SIRET (14 Ziffern = SIREN + NIC, Luhn-Algorithmus).

```typescript
import { validateSIRET } from "validator-tax-id";

validateSIRET("44306184100047"); // true
```

### `validateNIR(value)`

Validiert **nur** französische NIR / Sozialversicherungsnummer (15 Ziffern, Mod 97).

```typescript
import { validateNIR } from "validator-tax-id";

validateNIR("188057512301180"); // true
validateNIR("199072A12801261"); // true (Korsika 2A)
```

---

## Einzelne Validatoren 🇵🇹 Portugal

### `validateNIF(value)`

Validiert portugiesische NIF (9 Ziffern, Mod 11-Algorithmus).

```typescript
import { validateNIF } from "validator-tax-id";

validateNIF("123456789"); // true (privat)
validateNIF("501442600"); // true (Unternehmen - EDP)
```

---

## Einzelne Validatoren 🇩🇪 Deutschland

### `validateSteuerIdNr(value)`

Validiert **nur** deutsche Steueridentifikationsnummer (11 Ziffern, ISO 7064 Mod 10,11).

```typescript
import { validateSteuerIdNr } from "validator-tax-id";

validateSteuerIdNr("86095742719"); // true
validateSteuerIdNr("65929970489"); // true
```

### `validateVatNumber(value)`

Validiert **nur** deutsche USt-IdNr (DE + 9 Ziffern, ISO 7064 Mod 10,11).

```typescript
import { validateVatNumber } from "validator-tax-id";

validateVatNumber("DE136695976"); // true
validateVatNumber("DE811128135"); // true (Google Germany)
```

### `validateWidnr(value)`

Validiert **nur** deutsche W-IdNr (9 Ziffern, ISO 7064 Mod 10,11).

```typescript
import { validateWidnr } from "validator-tax-id";

validateWidnr("136695976"); // true
validateWidnr("811128135"); // true
```
