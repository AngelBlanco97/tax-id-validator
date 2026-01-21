---
layout: home

hero:
  name: "Tax ID Validator"
  text: "Valide números de identificação sem complicações."
  tagline: Biblioteca leve, tipada e fácil de usar para validar IDs fiscais em múltiplos países.
  actions:
    - theme: brand
      text: Começar
      link: /pt/guide/getting-started
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/AngelBlanco97/tax-id-validator

features:
  - icon: ⚡
    title: Zero Dependências
    details: Sem bloat. Sem lodash. Sem moment.js. Apenas lógica de validação pura e otimizada.
  - icon: 🛡️
    title: TypeScript Primeiro
    details: Construída desde o início com TypeScript. Definições de tipos completas e autocomplete.
  - icon: 🌍
    title: Multi-País
    details: Espanha, França, Portugal e crescendo. Cada país usa algoritmos oficiais do governo.
  - icon: 🌳
    title: Tree-Shakeable
    details: Importe apenas o que precisar. validateDNI? 1KB. Toda a biblioteca? Menos de 4KB gzipped.
  - icon: 🔒
    title: Validação Real
    details: Não apenas regex. Implementamos módulo 23, algoritmo de Luhn e verificação mod 97.
  - icon: 🌐
    title: Universal
    details: Funciona em todo lado - Node.js, React, Vue, Next.js, Vanilla JS ou CDN.
---

<div class="badges-wrapper">
  <a href="https://www.npmjs.com/package/validator-tax-id" target="_blank">
    <img src="https://img.shields.io/npm/v/validator-tax-id?style=flat-square&color=5c6bc0" alt="versão npm">
  </a>
  <a href="https://www.npmjs.com/package/validator-tax-id" target="_blank">
    <img src="https://img.shields.io/npm/dm/validator-tax-id?style=flat-square&color=4caf50" alt="downloads npm">
  </a>
  <a href="https://github.com/AngelBlanco97/tax-id-validator" target="_blank">
    <img src="https://img.shields.io/github/stars/AngelBlanco97/tax-id-validator?style=flat-square&color=ffc107" alt="estrelas GitHub">
  </a>
  <img src="https://img.shields.io/badge/gzip-<4KB-success?style=flat-square" alt="tamanho bundle">
</div>

<div class="quick-start-wrapper">
  <div class="header-section">
    <h2>⚡ Início Rápido</h2>
    <p>Comece a usar em segundos</p>
  </div>

  <div class="code-steps">
    <div class="step">
      <span class="step-number">1</span>
      <span class="step-title">Instalar</span>
      <div class="code-block">

```bash
npm install validator-tax-id
```

  </div>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <span class="step-title">Importar e Usar</span>
      <div class="code-block">

```typescript
import { validateDNI, validateSIREN, validateNIF } from "validator-tax-id";

// 🇪🇸 Espanha
validateDNI("12345678Z"); // ✅ true

// 🇫🇷 França
validateSIREN("443061841"); // ✅ true

// 🇵🇹 Portugal
validateNIF("123456789"); // ✅ true
```

  </div>
    </div>
  </div>
</div>

<div class="countries-wrapper">
  <div class="header-section">
    <h2>🌍 Países Suportados</h2>
    <p>Selecione um país para ver as regras de validação específicas.</p>
  </div>

  <div class="country-grid">
    <a href="./countries/es" class="country-card">
      <div class="card-header">
        <span class="flag">🇪🇸</span>
        <span class="code">ES</span>
      </div>
      <span class="name">Espanha</span>
      <div class="docs-list">
        <span class="docs-label">Valida:</span>
        <span class="docs-value">DNI, NIE, CIF</span>
      </div>
      <div class="algorithm">
        <span class="algo-label">Algoritmo:</span>
        <span class="algo-value">Módulo 23</span>
      </div>
    </a>
    <a href="./countries/pt" class="country-card">
      <div class="card-header">
        <span class="flag">🇵🇹</span>
        <span class="code">PT</span>
      </div>
      <span class="name">Portugal</span>
      <div class="docs-list">
        <span class="docs-label">Valida:</span>
        <span class="docs-value">NIF</span>
      </div>
      <div class="algorithm">
        <span class="algo-label">Algoritmo:</span>
        <span class="algo-value">Módulo 11</span>
      </div>
    </a>
    <a href="./countries/fr" class="country-card">
      <div class="card-header">
        <span class="flag">🇫🇷</span>
        <span class="code">FR</span>
      </div>
      <span class="name">França</span>
      <div class="docs-list">
        <span class="docs-label">Valida:</span>
        <span class="docs-value">SIREN, SIRET, NIR</span>
      </div>
      <div class="algorithm">
        <span class="algo-label">Algoritmo:</span>
        <span class="algo-value">Luhn + Mod 97</span>
      </div>
    </a>
    <div class="country-card coming-soon">
      <div class="card-header">
        <span class="flag">🇩🇪</span>
        <span class="code">DE</span>
      </div>
      <span class="name">Alemanha</span>
      <div class="docs-list">
        <span class="docs-label">Em Breve:</span>
        <span class="docs-value">Steuernummer</span>
      </div>
      <div class="algorithm">
        <span class="coming-badge">Em Breve</span>
      </div>
    </div>
    <div class="country-card coming-soon">
      <div class="card-header">
        <span class="flag">🇮🇹</span>
        <span class="code">IT</span>
      </div>
      <span class="name">Itália</span>
      <div class="docs-list">
        <span class="docs-label">Em Breve:</span>
        <span class="docs-value">Codice Fiscale</span>
      </div>
      <div class="algorithm">
        <span class="coming-badge">Em Breve</span>
      </div>
    </div>
    <div class="country-card coming-soon">
      <div class="card-header">
        <span class="flag">🇬🇧</span>
        <span class="code">UK</span>
      </div>
      <span class="name">Reino Unido</span>
      <div class="docs-list">
        <span class="docs-label">Em Breve:</span>
        <span class="docs-value">UTR, NIN</span>
      </div>
      <div class="algorithm">
        <span class="coming-badge">Em Breve</span>
      </div>
    </div>
    <div class="country-card coming-soon">
      <div class="card-header">
        <span class="flag">🇺🇸</span>
        <span class="code">US</span>
      </div>
      <span class="name">Estados Unidos</span>
      <div class="docs-list">
        <span class="docs-label">Em Breve:</span>
        <span class="docs-value">SSN, EIN, ITIN</span>
      </div>
      <div class="algorithm">
        <span class="coming-badge">Em Breve</span>
      </div>
    </div>
  </div>
  
  <div class="contribute">
    <p>Falta um país? <a href="https://github.com/AngelBlanco97/tax-id-validator/issues" target="_blank">Solicite no GitHub →</a></p>
  </div>
</div>

<div class="comparison-wrapper">
  <div class="header-section">
    <h2>🤔 Porquê Tax ID Validator?</h2>
    <p>Veja como nos comparamos com outras soluções</p>
  </div>

  <div class="comparison-table">
    <table>
      <thead>
        <tr>
          <th>Funcionalidade</th>
          <th class="highlight">validator-tax-id</th>
          <th>Apenas Regex</th>
          <th>Bibliotecas Pesadas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Validação real de checksum</td>
          <td class="highlight">✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Zero dependências</td>
          <td class="highlight">✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Suporte TypeScript</td>
          <td class="highlight">✅</td>
          <td>❌</td>
          <td>⚠️</td>
        </tr>
        <tr>
          <td>Tree-shakeable</td>
          <td class="highlight">✅</td>
          <td>-</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Tamanho do bundle</td>
          <td class="highlight">&lt;4KB</td>
          <td>~0KB</td>
          <td>50KB+</td>
        </tr>
        <tr>
          <td>Validadores individuais</td>
          <td class="highlight">✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="cta-wrapper">
  <div class="cta-content">
    <h2>🚀 Pronto para validar?</h2>
    <p>Comece a usar Tax ID Validator no seu projeto hoje. Sem configuração, resultados instantâneos.</p>
    <div class="cta-buttons">
      <a href="/pt/guide/getting-started" class="cta-primary">
        <span>Começar</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a href="/pt/api/reference" class="cta-secondary">Referência API</a>
    </div>
  </div>
</div>

<div class="sponsor-wrapper">
  <div class="sponsor-content">
    <div class="sponsor-icon">☕</div>
    <h2>Apoie o Projeto</h2>
    <p>Se esta biblioteca te poupou tempo, considera pagar-me um café. O teu apoio ajuda a manter e melhorar este projeto!</p>
    <a href="https://paypal.me/AngelBlanco747" target="_blank" class="sponsor-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <span>Doar via PayPal</span>
    </a>
  </div>
</div>

<style>
.badges-wrapper {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.badges-wrapper img {
  height: 20px;
}

.quick-start-wrapper {
  margin: 4rem auto;
  padding: 0 20px;
  max-width: 800px;
}

.code-steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  position: relative;
}

.step-number {
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--vp-c-brand);
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.step-title {
  display: block;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.step .code-block {
  margin: 0;
}

.step .code-block pre {
  margin: 0;
}

.countries-wrapper {
  margin-top: 4rem;
  padding: 0 20px;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.header-section h2 {
  border-top: none;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 10px;
}

.header-section p {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.country-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  text-decoration: none !important;
  transition: all 0.25s ease;
  height: 100%;
}

.country-card:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.country-card.coming-soon {
  opacity: 0.6;
  cursor: default;
}

.country-card.coming-soon:hover {
  transform: none;
  border-color: var(--vp-c-bg-soft);
  box-shadow: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.flag {
  font-size: 2.2rem;
  line-height: 1;
}

.code {
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
  height: fit-content;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 15px;
}

.docs-list {
  padding-top: 15px;
  border-top: 1px solid var(--vp-c-divider);
}

.docs-label, .algo-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  font-weight: 700;
  margin-bottom: 4px;
}

.docs-value {
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  font-weight: 500;
}

.algorithm {
  margin-top: 12px;
}

.algo-value {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}

.coming-badge {
  display: inline-block;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
}

.contribute {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.comparison-wrapper {
  margin: 4rem auto;
  padding: 0 20px;
  max-width: 800px;
}

.comparison-table {
  overflow-x: auto;
  display: flex;
  justify-content: center;
}

.comparison-table table {
  max-width: 750px;
  border-collapse: collapse;
  font-size: 0.95rem;
  margin: 0 auto;
}

.comparison-table th,
.comparison-table td {
  padding: 14px 18px;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
}

.comparison-table th {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.comparison-table th.highlight,
.comparison-table td.highlight {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  font-weight: 600;
}

.comparison-table tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.cta-wrapper {
  margin: 4rem auto;
  padding: 0 20px;
  max-width: 800px;
}

.cta-content {
  text-align: center;
  padding: 48px 40px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
}

.cta-wrapper h2 {
  border-top: none;
  font-size: 2rem;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.cta-wrapper p {
  color: var(--vp-c-text-2);
  margin: 0 0 28px 0;
  font-size: 1.1rem;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
  background: var(--vp-c-brand);
  color: white !important;
  box-shadow: 0 4px 14px rgba(var(--vp-c-brand-rgb), 0.4);
}

.cta-primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--vp-c-brand-rgb), 0.5);
}

.cta-primary svg {
  transition: transform 0.2s;
}

.cta-primary:hover svg {
  transform: translateX(4px);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
}

.cta-secondary:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.sponsor-wrapper {
  margin: 4rem auto;
  padding: 0 20px;
  max-width: 600px;
}

.sponsor-content {
  text-align: center;
  padding: 40px;
}

.dark .sponsor-content {
  border-color: rgba(239, 68, 68, 0.3);
}

.sponsor-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.sponsor-content h2 {
  border-top: none;
  font-size: 1.5rem;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.sponsor-content p {
  color: var(--vp-c-text-2);
  margin: 0 0 24px 0;
  font-size: 1rem;
  line-height: 1.6;
}

.sponsor-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white !important;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);
}

.sponsor-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.5);
}

.sponsor-button svg {
  transition: transform 0.3s;
}

.sponsor-button:hover svg {
  transform: scale(1.1);
}
</style>
