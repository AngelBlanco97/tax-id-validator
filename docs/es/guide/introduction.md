# Introducción

**Tax ID Validator** es una librería diseñada para resolver un problema común pero tedioso: validar identificadores fiscales (números de identificación, NIF, CIF) asegurando que el formato y los dígitos de control sean matemáticamente correctos.

## ¿Por qué usar esta librería?

### 📦 Sin Dependencias

Muchas librerías de validación vienen con dependencias pesadas (como `lodash` o frameworks completos). `validator-tax-id` no tiene dependencias externas. Lo que ves es lo que obtienes.

### 🔒 Validación Real, no solo Regex

No solo comprobamos si "tiene 8 números y una letra". Implementamos los algoritmos oficiales de cada gobierno (Módulo 11, Algoritmo de Luhn, etc.) para calcular si la letra o dígito de control es realmente válido.

### 💙 Escrito en TypeScript

Disfruta del autocompletado y la seguridad de tipos desde el primer momento.
