# França (FR)

Validação de números de identificação pessoal e empresarial para França.

## Documentos Suportados

| Documento | Descrição                                                 | Formato    |
| :-------- | :-------------------------------------------------------- | :--------- |
| **SIREN** | Système d'Identification du Répertoire des Entreprises    | 9 dígitos  |
| **SIRET** | Système d'Identification du Répertoire des Etablissements | 14 dígitos |
| **NIR**   | Numéro d'Inscription au Répertoire (Segurança Social)     | 15 dígitos |

## Notas

- SIREN e SIRET são usados para identificar empresas e estabelecimentos e são validados usando o algoritmo de Luhn.
- NIR é usado para identificar indivíduos e é validado usando o algoritmo oficial módulo 97.
- Os departamentos da Córsega usam códigos 2A e 2B, que são tratados corretamente.
- O validador deteta automaticamente o tipo de documento baseando-se no comprimento da entrada.

## Uso

### Validadores Individuais (Recomendado)

Para melhor desempenho e tree-shaking, use os validadores específicos:

```typescript
import { validateSIREN, validateSIRET, validateNIR } from "validator-tax-id";

// SIREN - Identificador de empresa (9 dígitos)
validateSIREN("443061841"); // ✅ true (Google France)
validateSIREN("552100554"); // ✅ true (Total SA)

// SIRET - Identificador de estabelecimento (14 dígitos)
validateSIRET("44306184100047"); // ✅ true

// NIR - Número de Segurança Social (15 dígitos)
validateNIR("188057512301180"); // ✅ true
validateNIR("199072A12801261"); // ✅ true (Córsega 2A)
validateNIR("299072B12801238"); // ✅ true (Córsega 2B)
```

### Auto-deteção de Tipo

Se não conhecer o tipo de documento:

```typescript
import { validateFR } from "validator-tax-id";

validateFR("443061841"); // ✅ true (auto-detetado como SIREN - 9 dígitos)
validateFR("44306184100047"); // ✅ true (auto-detetado como SIRET - 14 dígitos)
validateFR("188057512301180"); // ✅ true (auto-detetado como NIR - 15 dígitos)
```

### Função Genérica

```typescript
import { validateIdentification } from "validator-tax-id";

// SIREN (empresa)
validateIdentification("fr", "443061841"); // ✅ true

// SIRET (estabelecimento)
validateIdentification("fr", "443 061 841 00047"); // ✅ true

// NIR (individual)
validateIdentification("fr", "188057512301180"); // ✅ true
```
