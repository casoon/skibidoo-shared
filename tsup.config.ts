import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/types/index.ts",
    "src/schemas/index.ts",
    "src/utils/index.ts",
    "src/config/index.ts",
    "src/config/eslint.ts",
    "src/config/prettier.ts"
  ],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true
});
