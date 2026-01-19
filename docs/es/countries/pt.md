# Portugal (PT)

Validación de documentos fiscales para Portugal.

## Documentos Soportados

| Documento | Descripción                    | Formato   |
| :-------- | :----------------------------- | :-------- |
| **NIF**   | Número de Identificação Fiscal | 9 dígitos |

El NIF se usa tanto para personas físicas como jurídicas.

## Notas

- La validación incluye el checksum oficial módulo 11.
- El validador verifica prefijos NIF válidos (1, 2, 3, 5, 6, 8, 9) para evitar falsos positivos.
- La entrada puede contener espacios o guiones, que se ignoran automáticamente.

### Prefijos NIF Válidos

| Prefijo | Tipo de Entidad                |
| :------ | :----------------------------- |
| 1, 2, 3 | Personas físicas               |
| 5       | Entidades jurídicas (empresas) |
| 6       | Entidades públicas             |
| 8       | Empresarios individuales       |
| 9       | Entidades irregulares y otros  |

## Uso

### Validador Individual (Recomendado)

```typescript
import { validateNIF } from "validator-tax-id";

// NIF personal
validateNIF("123456789"); // ✅ true
validateNIF("232013969"); // ✅ true

// NIF de empresa
validateNIF("501442600"); // ✅ true (EDP)

// Entidad pública
validateNIF("600084779"); // ✅ true

// Con formato
validateNIF("123-456-789"); // ✅ true
validateNIF("123 456 789"); // ✅ true
```

### Auto-detección (Alias)

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // ✅ true (igual que validateNIF)
```

### Función Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "123456789"); // ✅ true
validateIdentification("pt", "501 964 843"); // ✅ true
```
