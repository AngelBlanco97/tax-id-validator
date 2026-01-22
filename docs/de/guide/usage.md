# Grundlegende Verwendung

Die Bibliothek bietet Validierungsfunktionen für jedes unterstützte Land.

## Generische Validierung

Verwenden Sie `validateIdentification` für dynamische Validierung basierend auf Ländercode:

```typescript
import { validateIdentification } from "validator-tax-id";

// Spanische DNI validieren
const isDniValid = validateIdentification("es", "12345678Z");

if (isDniValid) {
  console.log("Korrekt ✅");
} else {
  console.error("Ungültig ❌");
}
```

## Einzelne Validatoren (Empfohlen) ✨

Für besseres Tree-Shaking und direkten Zugriff verwenden Sie die einzelnen Validierungsfunktionen:

```typescript
import { validateDNI, validateCIF, validateNIE } from "validator-tax-id";

// Validiert spezifische Dokumenttypen direkt
validateDNI("12345678Z"); // ✅ true - Nur spanische DNI
validateNIE("X1234567L"); // ✅ true - Nur spanische NIE
validateCIF("A58818501"); // ✅ true - Nur spanische CIF
```

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// Französische Validatoren
validateSIREN("443061841"); // ✅ true - Nur SIREN
validateSIRET("44306184100047"); // ✅ true - Nur SIRET
validateNIR("188057512301180"); // ✅ true - Nur NIR
```

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// Deutsche Validatoren
validateSteuerIdNr("86095742719"); // ✅ true - Steuer-ID
validateVatNumber("DE136695976"); // ✅ true - USt-IdNr
validateWidnr("136695976"); // ✅ true - W-IdNr
```

## Auto-Erkennung nach Land

Wenn Sie den spezifischen Dokumenttyp nicht kennen, verwenden Sie den Länder-Validator:

```typescript
import {
  validateES,
  validateFR,
  validatePT,
  validateDE,
} from "validator-tax-id";

// Auto-erkennt DNI, NIE oder CIF
validateES("12345678Z"); // ✅ true (erkannt als DNI)
validateES("A58818501"); // ✅ true (erkannt als CIF)

// Auto-erkennt SIREN, SIRET oder NIR nach Länge
validateFR("443061841"); // ✅ true (erkannt als SIREN - 9 Ziffern)
validateFR("44306184100047"); // ✅ true (erkannt als SIRET - 14 Ziffern)

// Auto-erkennt deutsche Steuer-IDs
validateDE("86095742719"); // ✅ true (erkannt als SteuerIdNr)
validateDE("DE136695976"); // ✅ true (erkannt als VAT Number)
```

## Vanilla-Stil

Keine Sorge, verwenden Sie es wo Sie möchten

```JS
<script type="module">
    import { validateDNI, validateSteuerIdNr } from "https://cdn.jsdelivr.net/npm/validator-tax-id/+esm";

    const input = document.getElementById("id-input");
    const value = input.value.trim();

    // Direkte Validierung
    if (validateDNI(value)) {
        result.textContent = "Gültige DNI ✅";
    } else if (validateSteuerIdNr(value)) {
        result.textContent = "Gültige Steuer-ID ✅";
    } else {
        result.textContent = "Ungültig ❌";
    }
</script>
```
