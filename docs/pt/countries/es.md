# Espanha (ES)

Validação de documentos fiscais para Espanha.

## Documentos Suportados

| Documento | Descrição                       | Formato                       |
| :-------- | :------------------------------ | :---------------------------- |
| **DNI**   | Documento Nacional de Identidad | 8 dígitos + Letra de controlo |
| **NIE**   | Número de Identidad Extranjero  | X/Y/Z + 7 dígitos + Letra     |
| **CIF**   | Código de Identificación Fiscal | Letra + 7 dígitos + Controlo  |

## Notas

- DNI e NIE usam uma letra de controlo módulo 23.
- CIF usa um checksum baseado no tipo de entidade, com carácter de controlo numérico ou alfabético.
- A entrada é insensível a maiúsculas/minúsculas e pode incluir espaços ou hífens.

## Uso

### Validadores Individuais (Recomendado)

Para melhor desempenho e tree-shaking, use os validadores específicos:

```typescript
import { validateDNI, validateNIE, validateCIF } from "validator-tax-id";

// DNI - Documento Nacional de Identidad
validateDNI("12345678Z"); // ✅ true
validateDNI("00000000T"); // ✅ true
validateDNI("12345678A"); // ❌ false (letra incorreta)

// NIE - Número de Identidad de Extranjero
validateNIE("X1234567L"); // ✅ true
validateNIE("Y2345678Z"); // ✅ true
validateNIE("Z7654321H"); // ✅ true

// CIF - Código de Identificación Fiscal
validateCIF("A58818501"); // ✅ true (empresa SA)
validateCIF("B99286320"); // ✅ true (empresa SL)
validateCIF("P7800001E"); // ✅ true (organismo público)
```

### Auto-deteção de Tipo

Se não conhecer o tipo de documento:

```typescript
import { validateES } from "validator-tax-id";

validateES("12345678Z"); // ✅ true (auto-detetado como DNI)
validateES("X1234567L"); // ✅ true (auto-detetado como NIE)
validateES("A58818501"); // ✅ true (auto-detetado como CIF)
```

### Função Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("es", "12345678Z"); // ✅ true
validateIdentification("es", "X-1234567-L"); // ✅ true
validateIdentification("es", "A58818501"); // ✅ true
```
