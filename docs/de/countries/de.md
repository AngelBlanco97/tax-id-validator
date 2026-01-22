# Deutschland (DE)

Validierung von Steueridentifikationsnummern für Deutschland.

## Unterstützte Dokumente

| Dokument       | Beschreibung                             | Format         |
| :------------- | :--------------------------------------- | :------------- |
| **SteuerIdNr** | Steueridentifikationsnummer (Persönlich) | 11 Ziffern     |
| **VAT Number** | Umsatzsteuer-Identifikationsnummer       | DE + 9 Ziffern |
| **W-IdNr**     | Wirtschafts-Identifikationsnummer        | 9 Ziffern      |

## Hinweise

- SteuerIdNr ist eine einzigartige persönliche Kennung, die lebenslang gültig ist. Sie verwendet ISO 7064 Mod 10,11 Prüfsumme und hat spezifische Regeln zur Ziffernstruktur.
- Die USt-IdNr wird für den innergemeinschaftlichen Handel verwendet und hat das Präfix "DE".
- W-IdNr wird für die Unternehmensidentifikation verwendet.
- Alle Validatoren verwenden den ISO 7064 Mod 10,11 Algorithmus zur Prüfsummenvalidierung.
- Die Eingabe ist groß-/kleinschreibungsunabhängig und kann Leerzeichen oder Bindestriche enthalten.

## Verwendung

### Einzelne Validatoren (Empfohlen)

Für bessere Leistung und Tree-Shaking verwenden Sie die spezifischen Validatoren:

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// SteuerIdNr - Persönliche Steuer-ID (11 Ziffern)
validateSteuerIdNr("86095742719"); // ✅ true
validateSteuerIdNr("65929970489"); // ✅ true
validateSteuerIdNr("86095742710"); // ❌ false (falsche Prüfsumme)

// VAT Number - USt-IdNr (DE + 9 Ziffern)
validateVatNumber("DE136695976"); // ✅ true
validateVatNumber("DE811128135"); // ✅ true (Google Deutschland)
validateVatNumber("DE136695970"); // ❌ false (falsche Prüfsumme)

// W-IdNr - Wirtschafts-ID (9 Ziffern)
validateWidnr("136695976"); // ✅ true
validateWidnr("811128135"); // ✅ true
validateWidnr("136695970"); // ❌ false (falsche Prüfsumme)
```

### Typ-Auto-Erkennung

Wenn Sie den Dokumenttyp nicht kennen:

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // ✅ true (auto-erkannt als SteuerIdNr - 11 Ziffern)
validateDE("DE136695976"); // ✅ true (auto-erkannt als VAT Number)
validateDE("136695976"); // ✅ true (auto-erkannt als W-IdNr - 9 Ziffern)
```

### Generische Funktion

```typescript
import { validateIdentification } from "validator-tax-id";

// SteuerIdNr (persönlich)
validateIdentification("de", "86095742719"); // ✅ true

// VAT Number (Unternehmen)
validateIdentification("de", "DE 136 695 976"); // ✅ true

// W-IdNr (Wirtschaft)
validateIdentification("de", "136-695-976"); // ✅ true
```
