# Frankreich (FR)

Validierung von Personen- und Unternehmensidentifikationsnummern für Frankreich.

## Unterstützte Dokumente

| Dokument  | Beschreibung                                              | Format     |
| :-------- | :-------------------------------------------------------- | :--------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 Ziffern  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 Ziffern |
| **NIR**   | Numéro d'Inscription au Répertoire (Sozialversicherung)   | 15 Ziffern |

## Hinweise

- SIREN und SIRET werden zur Identifizierung von Unternehmen und Niederlassungen verwendet und mit dem Luhn-Algorithmus validiert.
- NIR wird zur Identifizierung von Personen verwendet und mit dem offiziellen Modulo 97-Algorithmus validiert.
- Korsika-Départements verwenden 2A- und 2B-Codes, die korrekt behandelt werden.
- Der Validator erkennt automatisch den Dokumenttyp basierend auf der Eingabelänge.

## Verwendung

### Einzelne Validatoren (Empfohlen)

Für bessere Leistung und Tree-Shaking verwenden Sie die spezifischen Validatoren:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// SIREN - Unternehmenskennung (9 Ziffern)
validateSIREN("443061841"); // ✅ true (Google France)
validateSIREN("552100554"); // ✅ true (Total SA)

// SIRET - Niederlassungskennung (14 Ziffern)
validateSIRET("44306184100047"); // ✅ true

// NIR - Sozialversicherungsnummer (15 Ziffern)
validateNIR("188057512301180"); // ✅ true
validateNIR("199072A12801261"); // ✅ true (Korsika 2A)
validateNIR("299072B12801238"); // ✅ true (Korsika 2B)
```

### Typ-Auto-Erkennung

Wenn Sie den Dokumenttyp nicht kennen:

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // ✅ true (auto-erkannt als SIREN - 9 Ziffern)
validateFR("44306184100047"); // ✅ true (auto-erkannt als SIRET - 14 Ziffern)
validateFR("188057512301180"); // ✅ true (auto-erkannt als NIR - 15 Ziffern)
```

### Generische Funktion

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (Unternehmen)
validateIdentification("fr", "443061841"); // ✅ true

// SIRET (Niederlassung)
validateIdentification("fr", "443 061 841 00047"); // ✅ true

// NIR (Person)
validateIdentification("fr", "188057512301180"); // ✅ true
```
