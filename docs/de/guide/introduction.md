# Einführung

**Tax ID Validator** ist eine Bibliothek, die ein häufiges, aber mühsames Problem löst: die Validierung von Steueridentifikationsnummern (Identifikationsnummern, NIF, CIF), um sicherzustellen, dass Format und Prüfziffern mathematisch korrekt sind.

## Warum diese Bibliothek verwenden?

### 📦 Keine Abhängigkeiten

Viele Validierungsbibliotheken kommen mit schweren Abhängigkeiten (wie `lodash` oder kompletten Frameworks). `validator-tax-id` hat keine externen Abhängigkeiten. Was Sie sehen, ist was Sie bekommen.

### 🔒 Echte Validierung, nicht nur Regex

Wir prüfen nicht nur, ob es "8 Zahlen und einen Buchstaben hat". Wir implementieren die offiziellen Algorithmen jeder Regierung (Modulo 11, Luhn-Algorithmus usw.), um zu berechnen, ob der Buchstabe oder die Prüfziffer wirklich gültig ist.

### 💙 In TypeScript geschrieben

Genießen Sie Autovervollständigung und Typsicherheit von Anfang an.
