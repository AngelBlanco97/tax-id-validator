# Alemania (DE)

Validación de números de identificación fiscal para Alemania.

## Documentos Soportados

| Documento      | Descripción                              | Formato        |
| :------------- | :--------------------------------------- | :------------- |
| **SteuerIdNr** | Número de Identificación Fiscal Personal | 11 dígitos     |
| **VAT Number** | Umsatzsteuer-Identifikationsnummer (IVA) | DE + 9 dígitos |
| **W-IdNr**     | Número de Identificación Empresarial     | 9 dígitos      |

## Notas

- SteuerIdNr es un identificador personal único asignado de por vida. Usa el algoritmo ISO 7064 Mod 10,11 y tiene reglas específicas de estructura de dígitos.
- El número de IVA (USt-IdNr) se usa para el comercio intra-UE y tiene el prefijo "DE".
- W-IdNr se usa para la identificación empresarial.
- Todos los validadores usan el algoritmo ISO 7064 Mod 10,11 para la validación del checksum.
- La entrada es insensible a mayúsculas/minúsculas y puede incluir espacios o guiones.

## Uso

### Validadores Individuales (Recomendado)

Para mejor rendimiento y tree-shaking, usa los validadores específicos:

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// SteuerIdNr - ID Fiscal Personal (11 dígitos)
validateSteuerIdNr("86095742719"); // ✅ true
validateSteuerIdNr("65929970489"); // ✅ true
validateSteuerIdNr("86095742710"); // ❌ false (checksum incorrecto)

// VAT Number - Umsatzsteuer-ID (DE + 9 dígitos)
validateVatNumber("DE136695976"); // ✅ true
validateVatNumber("DE811128135"); // ✅ true (Google Alemania)
validateVatNumber("DE136695970"); // ❌ false (checksum incorrecto)

// W-IdNr - ID Empresarial (9 dígitos)
validateWidnr("136695976"); // ✅ true
validateWidnr("811128135"); // ✅ true
validateWidnr("136695970"); // ❌ false (checksum incorrecto)
```

### Auto-detección de Tipo

Si no conoces el tipo de documento:

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // ✅ true (auto-detectado como SteuerIdNr - 11 dígitos)
validateDE("DE136695976"); // ✅ true (auto-detectado como VAT Number)
validateDE("136695976"); // ✅ true (auto-detectado como W-IdNr - 9 dígitos)
```

### Función Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

// SteuerIdNr (personal)
validateIdentification("de", "86095742719"); // ✅ true

// VAT Number (empresa)
validateIdentification("de", "DE 136 695 976"); // ✅ true

// W-IdNr (empresarial)
validateIdentification("de", "136-695-976"); // ✅ true
```
