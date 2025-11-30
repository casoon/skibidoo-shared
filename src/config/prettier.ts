// Shared Prettier Configuration
// src/config/prettier.ts

import type { Config } from "prettier";

/**
 * Shared Prettier configuration for all Skibidoo projects
 */
export const prettierConfig: Config = {
  // Line width
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Quotes
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",

  // Semicolons and commas
  semi: true,
  trailingComma: "es5",

  // Brackets and spacing
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // Line endings
  endOfLine: "lf",

  // HTML/JSX
  htmlWhitespaceSensitivity: "css",
  jsxBracketSameLine: false,

  // Prose
  proseWrap: "preserve",

  // Embedded languages
  embeddedLanguageFormatting: "auto",
};

/**
 * Prettier config as plain object (for .prettierrc.js exports)
 */
export const prettierConfigObject = { ...prettierConfig };
