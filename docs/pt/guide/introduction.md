# Introdução

**Tax ID Validator** é uma biblioteca projetada para resolver um problema comum mas tedioso: validar identificadores fiscais (números de identificação, NIF) garantindo que o formato e os dígitos de controlo estejam matematicamente corretos.

## Por que usar esta biblioteca?

### 📦 Sem Dependências

Muitas bibliotecas de validação vêm com dependências pesadas (como `lodash` ou frameworks completos). `validator-tax-id` não tem dependências externas. O que vê é o que obtém.

### 🔒 Validação Real, não apenas Regex

Não verificamos apenas se "tem 9 números". Implementamos os algoritmos oficiais de cada governo (Módulo 11, Algoritmo de Luhn, etc.) para calcular se o dígito de controlo é realmente válido.

### 💙 Escrito em TypeScript

Desfrute do autocompletar e segurança de tipos desde o primeiro momento.
