---
layout: home

hero:
  name: "Tax ID Validator"
  text: "Validate identification numbers without pain."
  tagline: Lightweight, typed, and easy-to-use library.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/AngelBlanco97/tax-id-validator

features:
  - title: ⚡ Lightweight
    details: Zero external dependencies to keep your bundle small.
  - title: 🛡️ TypeScript Ready
    details: Full typing included for a better development experience.
  - title: 🌍 Multi-country
    details: Modular support. Import only what you need.
---

<div class="countries-wrapper">
  <div class="header-section">
    <h2>Supported Countries</h2>
    <p>Select a country to view specific validation rules and documents.</p>
  </div>

  <div class="country-grid">
    <a href="./countries/es" class="country-card">
      <div class="card-header">
        <span class="flag">🇪🇸</span>
        <span class="code">ES</span>
      </div>
      <span class="name">Spain</span>
      <div class="docs-list">
        <span class="docs-label">Validates:</span>
        <span class="docs-value">DNI, NIE, CIF</span>
      </div>
    </a>
    <a href="./countries/pt" class="country-card">
      <div class="card-header">
        <span class="flag">🇵🇹</span>
        <span class="code">PT</span>
      </div>
      <span class="name">Portugal</span>
      <div class="docs-list">
        <span class="docs-label">Validates:</span>
        <span class="docs-value">NIF</span>
      </div>
    </a>
    <a href="./countries/fr" class="country-card">
      <div class="card-header">
        <span class="flag">🇫🇷</span>
        <span class="code">FR</span>
      </div>
      <span class="name">France</span>
      <div class="docs-list">
        <span class="docs-label">Validates:</span>
        <span class="docs-value">SIREN, SIRET, NIR</span>
      </div>
    </a>
  </div>
  
  <div class="contribute">
    <p>Missing a country? <a href="https://github.com/AngelBlanco97/tax-id-validator/issues" target="_blank">Request it on GitHub →</a></p>
  </div>
</div>

<style>
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
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid var(--vp-c-divider);
}

.docs-label {
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

.contribute {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
</style>
