import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import playwright from "eslint-plugin-playwright";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      playwright,
    },
    rules: {
      ...tseslint.configs["recommended-type-checked"].rules,
      ...playwright.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "playwright/expect-expect": [
        "warn",
        {
          assertFunctionPatterns: ["^expect.*"],
        },
      ],
    },
  },
  prettier,
];
