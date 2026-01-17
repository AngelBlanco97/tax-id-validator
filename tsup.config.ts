import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  globalName: "TaxIdValidator",
  dts: true,
  clean: true,
  minify: true,
});
