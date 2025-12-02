import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import playwright from "eslint-plugin-playwright";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  // Ignore patterns
  {
    ignores: ["node_modules/**", "playwright-report/**", "test-results/**", "*.config.ts"],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript ESLint recommended with type checking
  tseslint.configs.recommendedTypeChecked,

  // Parser options for type checking
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Playwright rules for test files only
  {
    files: ["tests/**/*.ts"],
    extends: [playwright.configs["flat/recommended"]],
    rules: {
      "playwright/expect-expect": [
        "warn",
        {
          assertFunctionPatterns: ["^expect.*"],
        },
      ],
    },
  },

  // Custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-floating-promises": "error",
    },
  },

  // Prettier config (must be last to override formatting rules)
  prettier
);
