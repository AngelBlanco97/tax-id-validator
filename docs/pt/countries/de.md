# Alemanha (DE)

Validação de números de identificação fiscal para a Alemanha.

## Documentos Suportados

| Documento      | Descrição                                | Formato        |
| :------------- | :--------------------------------------- | :------------- |
| **SteuerIdNr** | Número de Identificação Fiscal Pessoal   | 11 dígitos     |
| **VAT Number** | Umsatzsteuer-Identifikationsnummer (IVA) | DE + 9 dígitos |
| **W-IdNr**     | Número de Identificação Empresarial      | 9 dígitos      |

## Notas

- SteuerIdNr é um identificador pessoal único atribuído para toda a vida. Usa o algoritmo ISO 7064 Mod 10,11 e tem regras específicas de estrutura de dígitos.
- O número de IVA (USt-IdNr) é usado para o comércio intra-UE e tem o prefixo "DE".
- W-IdNr é usado para a identificação empresarial.
- Todos os validadores usam o algoritmo ISO 7064 Mod 10,11 para a validação do checksum.
- A entrada é insensível a maiúsculas/minúsculas e pode incluir espaços ou hífens.

## Uso

### Validadores Individuais (Recomendado)

Para melhor desempenho e tree-shaking, use os validadores específicos:

```typescript
import {
  validateSteuerIdNr,
  validateVatNumber,
  validateWidnr,
} from "validator-tax-id";

// SteuerIdNr - ID Fiscal Pessoal (11 dígitos)
validateSteuerIdNr("86095742719"); // ✅ true
validateSteuerIdNr("65929970489"); // ✅ true
validateSteuerIdNr("86095742710"); // ❌ false (checksum incorreto)

// VAT Number - Umsatzsteuer-ID (DE + 9 dígitos)
validateVatNumber("DE136695976"); // ✅ true
validateVatNumber("DE811128135"); // ✅ true (Google Alemanha)
validateVatNumber("DE136695970"); // ❌ false (checksum incorreto)

// W-IdNr - ID Empresarial (9 dígitos)
validateWidnr("136695976"); // ✅ true
validateWidnr("811128135"); // ✅ true
validateWidnr("136695970"); // ❌ false (checksum incorreto)
```

### Auto-deteção de Tipo

Se não conhecer o tipo de documento:

```typescript
import { validateDE } from "validator-tax-id";

validateDE("86095742719"); // ✅ true (auto-detetado como SteuerIdNr - 11 dígitos)
validateDE("DE136695976"); // ✅ true (auto-detetado como VAT Number)
validateDE("136695976"); // ✅ true (auto-detetado como W-IdNr - 9 dígitos)
```

### Função Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

// SteuerIdNr (pessoal)
validateIdentification("de", "86095742719"); // ✅ true

// VAT Number (empresa)
validateIdentification("de", "DE 136 695 976"); // ✅ true

// W-IdNr (empresarial)
validateIdentification("de", "136-695-976"); // ✅ true
```
