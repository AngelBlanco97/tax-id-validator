# Spanien (ES)

Validierung von Steuerdokumenten für Spanien.

## Unterstützte Dokumente

| Dokument | Beschreibung                    | Format                            |
| :------- | :------------------------------ | :-------------------------------- |
| **DNI**  | Documento Nacional de Identidad | 8 Ziffern + Kontrollbuchstabe     |
| **NIE**  | Número de Identidad Extranjero  | X/Y/Z + 7 Ziffern + Buchstabe     |
| **CIF**  | Código de Identificación Fiscal | Buchstabe + 7 Ziffern + Kontrolle |

## Hinweise

- DNI und NIE verwenden einen Kontrollbuchstaben Modulo 23.
- CIF verwendet eine Prüfsumme basierend auf dem Entitätstyp, mit numerischem oder alphabetischem Kontrollzeichen.
- Die Eingabe ist groß-/kleinschreibungsunabhängig und kann Leerzeichen oder Bindestriche enthalten.

## Verwendung

### Einzelne Validatoren (Empfohlen)

Für bessere Leistung und Tree-Shaking verwenden Sie die spezifischen Validatoren:

```typescript
import { validateDNI, validateNIE, validateCIF } from "validator-tax-id";

// DNI - Documento Nacional de Identidad
validateDNI("12345678Z"); // ✅ true
validateDNI("00000000T"); // ✅ true
validateDNI("12345678A"); // ❌ false (falscher Buchstabe)

// NIE - Número de Identidad de Extranjero
validateNIE("X1234567L"); // ✅ true
validateNIE("Y2345678Z"); // ✅ true
validateNIE("Z7654321H"); // ✅ true

// CIF - Código de Identificación Fiscal
validateCIF("A58818501"); // ✅ true (SA-Unternehmen)
validateCIF("B99286320"); // ✅ true (SL-Unternehmen)
validateCIF("P7800001E"); // ✅ true (öffentliche Einrichtung)
```

### Typ-Auto-Erkennung

Wenn Sie den Dokumenttyp nicht kennen:

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // ✅ true (auto-erkannt als DNI)
validateES("X1234567L"); // ✅ true (auto-erkannt als NIE)
validateES("A58818501"); // ✅ true (auto-erkannt als CIF)
```

### Generische Funktion

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("es", "12345678Z"); // ✅ true
validateIdentification("es", "X-1234567-L"); // ✅ true
validateIdentification("es", "A58818501"); // ✅ true
```
