# Portugal (PT)

Validação de documentos fiscais para Portugal.

## Documentos Suportados

| Documento | Descrição                      | Formato   |
| :-------- | :----------------------------- | :-------- |
| **NIF**   | Número de Identificação Fiscal | 9 dígitos |

O NIF é usado tanto para pessoas singulares como coletivas.

## Notas

- A validação inclui o checksum oficial módulo 11.
- O validador verifica prefixos NIF válidos (1, 2, 3, 5, 6, 8, 9) para evitar falsos positivos.
- A entrada pode conter espaços ou hífens, que são automaticamente ignorados.

### Prefixos NIF Válidos

| Prefixo | Tipo de Entidade               |
| :------ | :----------------------------- |
| 1, 2, 3 | Pessoas singulares             |
| 5       | Pessoas coletivas (empresas)   |
| 6       | Entidades públicas             |
| 8       | Empresários em nome individual |
| 9       | Entidades irregulares e outros |

## Uso

### Validador Individual (Recomendado)

```typescript
import { validateNIF } from "validator-tax-id";

// NIF pessoal
validateNIF("123456789"); // ✅ true
validateNIF("232013969"); // ✅ true

// NIF de empresa
validateNIF("501442600"); // ✅ true (EDP)

// Entidade pública
validateNIF("600084779"); // ✅ true

// Com formatação
validateNIF("123-456-789"); // ✅ true
validateNIF("123 456 789"); // ✅ true
```

### Auto-deteção (Alias)

```typescript
import { validatePT } from "validator-tax-id";

validatePT("123456789"); // ✅ true (igual a validateNIF)
```

### Função Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

validateIdentification("pt", "123456789"); // ✅ true
validateIdentification("pt", "501 964 843"); // ✅ true
```
