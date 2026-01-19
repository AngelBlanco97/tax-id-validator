# Francia (FR)

Validación de números de identificación personal y empresarial para Francia.

## Documentos Soportados

| Documento | Descripción                                               | Formato    |
| :-------- | :-------------------------------------------------------- | :--------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 dígitos  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 dígitos |
| **NIR**   | Numéro d'Inscription au Répertoire (Seguridad Social)     | 15 dígitos |

## Notas

- SIREN y SIRET se usan para identificar empresas y establecimientos y se validan usando el algoritmo de Luhn.
- NIR se usa para identificar individuos y se valida usando el algoritmo oficial módulo 97.
- Los departamentos de Córcega usan códigos 2A y 2B, que se manejan correctamente.
- El validador detecta automáticamente el tipo de documento basándose en la longitud de entrada.

## Uso

### Validadores Individuales (Recomendado)

Para mejor rendimiento y tree-shaking, usa los validadores específicos:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// SIREN - Identificador de empresa (9 dígitos)
validateSIREN("443061841"); // ✅ true (Google France)
validateSIREN("552100554"); // ✅ true (Total SA)

// SIRET - Identificador de establecimiento (14 dígitos)
validateSIRET("44306184100047"); // ✅ true

// NIR - Número de Seguridad Social (15 dígitos)
validateNIR("188057512301180"); // ✅ true
validateNIR("199072A12801261"); // ✅ true (Córcega 2A)
validateNIR("299072B12801238"); // ✅ true (Córcega 2B)
```

### Auto-detección de Tipo

Si no conoces el tipo de documento:

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // ✅ true (auto-detectado como SIREN - 9 dígitos)
validateFR("44306184100047"); // ✅ true (auto-detectado como SIRET - 14 dígitos)
validateFR("188057512301180"); // ✅ true (auto-detectado como NIR - 15 dígitos)
```

### Función Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (empresa)
validateIdentification("fr", "443061841"); // ✅ true

// SIRET (establecimiento)
validateIdentification("fr", "443 061 841 00047"); // ✅ true

// NIR (individual)
validateIdentification("fr", "188057512301180"); // ✅ true
```
