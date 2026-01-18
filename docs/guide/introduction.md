# Introduction

**Tax ID Validator** is a library designed to solve a common but tedious problem: validating tax identifiers (ID numbers, tax ID numbers, VAT numbers) by ensuring that the format and check digits are mathematically correct.

## Why use this library?

### 📦 Zero Dependencies

Many validation libraries come with heavy dependencies (such as `lodash` or complete frameworks). `validator-tax-id` has no external dependencies. What you see is what you get.

### 🔒 Real Validation, not just Regex

We don't just check if “it has 8 numbers and a letter.” We implement each government's official algorithms (Module 11, Luhn Algorithm, etc.) to calculate if the letter or check digit is actually valid.

### 💙 Written in TypeScript

Enjoy autocomplete and type safety from the get-go.
