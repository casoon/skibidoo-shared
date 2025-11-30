// Shared Biome Configuration
// src/config/biome.ts

/**
 * Biome configuration for all Skibidoo projects
 * Use this in biome.json via: { "extends": ["@casoon/skibidoo-shared/biome"] }
 * Or copy this object into your biome.json
 */
export const biomeConfig = {
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  vcs: {
    enabled: true,
    clientKind: "git",
    useIgnoreFile: true,
  },
  organizeImports: {
    enabled: true,
  },
  linter: {
    enabled: true,
    rules: {
      recommended: true,
      complexity: {
        noExcessiveCognitiveComplexity: "warn",
        noForEach: "off",
      },
      correctness: {
        noUnusedImports: "error",
        noUnusedVariables: "error",
      },
      style: {
        noNonNullAssertion: "warn",
        useConst: "error",
        useImportType: "error",
        useNodejsImportProtocol: "error",
      },
      suspicious: {
        noExplicitAny: "warn",
        noConsoleLog: "warn",
      },
      nursery: {
        noSecrets: "error",
      },
    },
  },
  formatter: {
    enabled: true,
    indentStyle: "space",
    indentWidth: 2,
    lineWidth: 100,
    lineEnding: "lf",
  },
  javascript: {
    formatter: {
      quoteStyle: "double",
      semicolons: "always",
      trailingCommas: "es5",
      arrowParentheses: "always",
    },
  },
  json: {
    formatter: {
      trailingCommas: "none",
    },
  },
  files: {
    ignore: [
      "**/dist/**",
      "**/node_modules/**",
      "**/*.d.ts",
      "**/coverage/**",
      "**/.astro/**",
      "**/pnpm-lock.yaml",
    ],
  },
};

/**
 * Generate biome.json content as string
 */
export function generateBiomeJson(): string {
  return JSON.stringify(biomeConfig, null, 2);
}
