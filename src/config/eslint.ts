// Shared ESLint Configuration
// src/config/eslint.ts

import type { Linter } from "eslint";

/**
 * Base ESLint configuration for all Skibidoo projects
 */
export const eslintBaseConfig: Linter.Config[] = [
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.d.ts", "**/coverage/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      
      // General
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },
];

/**
 * ESLint configuration for Node.js backend projects
 */
export const eslintNodeConfig: Linter.Config[] = [
  ...eslintBaseConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "no-process-exit": "off",
    },
  },
];

/**
 * ESLint configuration for React/frontend projects
 */
export const eslintReactConfig: Linter.Config[] = [
  ...eslintBaseConfig,
  {
    files: ["**/*.tsx"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

/**
 * ESLint configuration for Astro projects
 */
export const eslintAstroConfig: Linter.Config[] = [
  ...eslintBaseConfig,
  {
    files: ["**/*.astro"],
    rules: {
      // Astro-specific rules
    },
  },
];
