# Portugal (PT)

Validierung von Steuerdokumenten für Portugal.

## Unterstützte Dokumente

| Dokument | Beschreibung                   | Format    |
| :------- | :----------------------------- | :-------- |
| **NIF**  | Número de Identificação Fiscal | 9 Ziffern |

## Hinweise

- NIF wird sowohl für Personen als auch für Unternehmen verwendet.
- Die Validierung verwendet den Modulo 11-Algorithmus.
- Die erste Ziffer gibt den Entitätstyp an (1-3: Person, 5: Unternehmen, 6: öffentlich, usw.).
- NIFs, die mit 0, 4 oder 7 beginnen, sind ungültig.
- Die Eingabe ist groß-/kleinschreibungsunabhängig und kann Leerzeichen oder Bindestriche enthalten.

## Verwendung

### Einzelne Validatoren (Empfohlen)

Für bessere Leistung und Tree-Shaking verwenden Sie die spezifischen Validatoren:

```typescript
import { validateNIF } from "validator-tax-id";

// Persönliche NIFs (beginnen mit 1, 2, 3)
validateNIF("123456789"); // ✅ true
validateNIF("232013969"); // ✅ true

// Unternehmens-NIFs (beginnen mit 5)
validateNIF("501442600"); // ✅ true (EDP)

// Öffentliche Einrichtungen (beginnen mit 6)
validateNIF("600084779"); // ✅ true

// NIFs beginnend mit 8
validateNIF("800184343"); // ✅ true

// NIFs beginnend mit 9
validateNIF("980472377"); // ✅ true
```

### Typ-Auto-Erkennung

Wenn Sie den Dokumenttyp nicht kennen:

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // ✅ true (erkannt als NIF)
validatePT("501442600"); // ✅ true (erkannt als NIF)
```

### Generische Funktion

```typescript
import { validateIdentification } from "validator-tax-id";

// NIF (Person oder Unternehmen)
validateIdentification("pt", "123456789"); // ✅ true
validateIdentification("pt", "501442600"); // ✅ true
```
