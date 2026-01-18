import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tax ID Validator",
  description: "Validation of tax identifiers for JS/TS projects.",
  base: "/tax-id-validator/",
  head: [["link", { rel: "icon", href: "/tax-id-validator/favicon.ico" }]],

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AngelBlanco97/tax-id-validator",
      },
      { icon: "npm", link: "https://www.npmjs.com/package/validator-tax-id" },
    ],

    // Menu
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/reference" },
    ],

    // Sidebar
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
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 Ángel Blanco",
    },
  },
});
