# Introduction

**Tax ID Validator** est une bibliothèque conçue pour résoudre un problème courant mais fastidieux : valider les identifiants fiscaux (numéros d'identification, NIF, SIREN) en s'assurant que le format et les chiffres de contrôle sont mathématiquement corrects.

## Pourquoi utiliser cette bibliothèque?

### 📦 Sans Dépendances

Beaucoup de bibliothèques de validation viennent avec des dépendances lourdes (comme `lodash` ou des frameworks complets). `validator-tax-id` n'a aucune dépendance externe. Ce que vous voyez est ce que vous obtenez.

### 🔒 Validation Réelle, pas seulement Regex

Nous ne vérifions pas seulement si "ça a 9 chiffres". Nous implémentons les algorithmes officiels de chaque gouvernement (Module 11, Algorithme de Luhn, etc.) pour calculer si le chiffre de contrôle est réellement valide.

### 💙 Écrit en TypeScript

Profitez de l'autocomplétion et de la sécurité des types dès le départ.
