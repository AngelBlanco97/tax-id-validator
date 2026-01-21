import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tax ID Validator",
  description: "Validation of tax identifiers for JS/TS projects.",
  base: "/tax-id-validator/",
  head: [["link", { rel: "icon", href: "/tax-id-validator/favicon.ico" }]],

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es/",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          { text: "Guía", link: "/es/guide/getting-started" },
          { text: "API", link: "/es/api/reference" },
        ],
        sidebar: [
          {
            text: "Introducción",
            items: [
              {
                text: "¿Por qué usar esta librería?",
                link: "/es/guide/introduction",
              },
              { text: "Instalación", link: "/es/guide/getting-started" },
              { text: "Uso Básico", link: "/es/guide/usage" },
            ],
          },
          {
            text: "Países Soportados",
            items: [
              { text: "España (DNI/NIE/CIF)", link: "/es/countries/es" },
              { text: "Francia (NIR/SIREN/SIRET)", link: "/es/countries/fr" },
              { text: "Portugal (NIF)", link: "/es/countries/pt" },
            ],
          },
        ],
      },
    },
    pt: {
      label: "Português",
      lang: "pt",
      link: "/pt/",
      themeConfig: {
        nav: [
          { text: "Início", link: "/pt/" },
          { text: "Guia", link: "/pt/guide/getting-started" },
          { text: "API", link: "/pt/api/reference" },
        ],
        sidebar: [
          {
            text: "Introdução",
            items: [
              {
                text: "Por que usar esta biblioteca?",
                link: "/pt/guide/introduction",
              },
              { text: "Instalação", link: "/pt/guide/getting-started" },
              { text: "Uso Básico", link: "/pt/guide/usage" },
            ],
          },
          {
            text: "Países Suportados",
            items: [
              { text: "Espanha (DNI/NIE/CIF)", link: "/pt/countries/es" },
              { text: "França (NIR/SIREN/SIRET)", link: "/pt/countries/fr" },
              { text: "Portugal (NIF)", link: "/pt/countries/pt" },
            ],
          },
        ],
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      themeConfig: {
        nav: [
          { text: "Accueil", link: "/fr/" },
          { text: "Guide", link: "/fr/guide/getting-started" },
          { text: "API", link: "/fr/api/reference" },
        ],
        sidebar: [
          {
            text: "Introduction",
            items: [
              {
                text: "Pourquoi utiliser cette bibliothèque?",
                link: "/fr/guide/introduction",
              },
              { text: "Installation", link: "/fr/guide/getting-started" },
              { text: "Utilisation de base", link: "/fr/guide/usage" },
            ],
          },
          {
            text: "Pays Supportés",
            items: [
              { text: "Espagne (DNI/NIE/CIF)", link: "/fr/countries/es" },
              { text: "France (NIR/SIREN/SIRET)", link: "/fr/countries/fr" },
              { text: "Portugal (NIF)", link: "/fr/countries/pt" },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AngelBlanco97/tax-id-validator",
      },
      { icon: "npm", link: "https://www.npmjs.com/package/validator-tax-id" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        },
        link: "https://paypal.me/AngelBlanco747",
        ariaLabel: "Sponsor",
      },
    ],

    // Menu (English - default)
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/reference" },
    ],

    // Sidebar (English - default)
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Why use this library?", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/getting-started" },
          { text: "Basic Usage", link: "/guide/usage" },
        ],
      },
      {
        text: "Supported Countries",
        items: [
          { text: "France (NIR/SIREN/SIRET)", link: "/countries/fr" },
          { text: "Portugal (NIF)", link: "/countries/pt" },
          { text: "Spain (DNI/NIE/CIF)", link: "/countries/es" },
        ],
      },
    ],

    footer: {
      message:
        'Released under the MIT License. <a href="https://paypal.me/AngelBlanco747" target="_blank">☕ Buy me a coffee</a>',
      copyright: "Copyright © 2026 Ángel Blanco",
    },
  },
});
