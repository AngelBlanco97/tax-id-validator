# España (ES)

Validación de documentos fiscales para España.

## Documentos Soportados

| Documento | Descripción                     | Formato                      |
| :-------- | :------------------------------ | :--------------------------- |
| **DNI**   | Documento Nacional de Identidad | 8 dígitos + Letra de control |
| **NIE**   | Número de Identidad Extranjero  | X/Y/Z + 7 dígitos + Letra    |
| **CIF**   | Código de Identificación Fiscal | Letra + 7 dígitos + Control  |

## Notas

- DNI y NIE usan una letra de control módulo 23.
- CIF usa un checksum basado en el tipo de entidad, con carácter de control numérico o alfabético.
- La entrada es insensible a mayúsculas/minúsculas y puede incluir espacios o guiones.

## Uso

### Validadores Individuales (Recomendado)

Para mejor rendimiento y tree-shaking, usa los validadores específicos:

```typescript
import { validateDNI, validateNIE, validateCIF } from "validator-tax-id";

// DNI - Documento Nacional de Identidad
validateDNI("12345678Z"); // ✅ true
validateDNI("00000000T"); // ✅ true
validateDNI("12345678A"); // ❌ false (letra incorrecta)

// NIE - Número de Identidad de Extranjero
validateNIE("X1234567L"); // ✅ true
validateNIE("Y2345678Z"); // ✅ true
validateNIE("Z7654321H"); // ✅ true

// CIF - Código de Identificación Fiscal
validateCIF("A58818501"); // ✅ true (empresa SA)
validateCIF("B99286320"); // ✅ true (empresa SL)
validateCIF("P7800001E"); // ✅ true (organismo público)
```

### Auto-detección de Tipo

Si no conoces el tipo de documento:

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // ✅ true (auto-detectado como DNI)
validateES("X1234567L"); // ✅ true (auto-detectado como NIE)
validateES("A58818501"); // ✅ true (auto-detectado como CIF)
```

### Función Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("es", "12345678Z"); // ✅ true
validateIdentification("es", "X-1234567-L"); // ✅ true
validateIdentification("es", "A58818501"); // ✅ true
```
