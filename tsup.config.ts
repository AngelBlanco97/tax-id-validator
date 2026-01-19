import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/validators/es.ts",
    "src/validators/fr.ts",
    "src/validators/pt.ts",
  ],
  format: ["cjs", "esm"],
  globalName: "TaxIdValidator",
  dts: true,
  clean: true,
  minify: true,
  splitting: false,
});
