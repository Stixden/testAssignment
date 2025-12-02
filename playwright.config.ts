import { BASE_URL } from "@app/constants";
import { defineConfig, devices, expect } from "@playwright/test";
import { ZodTypeAny } from "zod";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  tsconfig: "./tsconfig.json",
  use: {
    baseURL: BASE_URL,
    trace: "on",
  },

  projects: [
    {
      name: "Chrome Desktop",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./tests/desktop",
      outputDir: "./test-results/desktop",
    },
    {
      name: "Api",
      testDir: "./tests/api",
      outputDir: "./test-results/api",
    },
  ],
});

expect.extend({
  /**
   * Custom matcher for validating JSON against a Zod schema.
   *
   * @param json - The JSON object to validate
   * @param schema - The Zod schema to validate against
   *
   * @example
   * ```typescript
   * // Will fail with detailed error message
   * expect(responseJson).toMatchSchema(userSchema);
   * ```
   */
  async toMatchSchema(json: unknown, schema: ZodTypeAny) {
    if (typeof json !== "object" || json === null) {
      return {
        message: () =>
          `Expected received value to be an object or array for schema validation, but got ${typeof json}.`,
        pass: false,
      };
    }

    const result = await schema.safeParseAsync(json);

    if (result.success) {
      return {
        message: () => `Expected received value NOT to match schema, but it did.`,
        pass: true,
      };
    } else {
      const firstIssue = result.error.issues[0];
      const pathString = firstIssue.path.join(".");
      const zodMessage = firstIssue.message;

      let expectedType = "N/A";
      let receivedType = "N/A";

      if (firstIssue.code === "invalid_type") {
        expectedType = "expected" in firstIssue ? String(firstIssue.expected) : "N/A";
        receivedType = "received" in firstIssue ? String(firstIssue.received) : "N/A";
      } else if ("expected" in firstIssue && "received" in firstIssue) {
        expectedType = String(firstIssue.expected);
        receivedType = String(firstIssue.received);
      } else if (firstIssue.code === "unrecognized_keys") {
        expectedType = "Known keys";
        receivedType = `Unrecognized key(s): ${"keys" in firstIssue ? firstIssue.keys.join(", ") : "unknown"}`;
      }

      let receivedValueAtPath: unknown = json;
      try {
        for (const key of firstIssue.path) {
          if (receivedValueAtPath === undefined || receivedValueAtPath === null) break;
          receivedValueAtPath = receivedValueAtPath[key as keyof typeof receivedValueAtPath];
        }
      } catch (e) {
        receivedValueAtPath = "[Error accessing path]";
      }
      const receivedValueString = JSON.stringify(receivedValueAtPath);

      let message =
        `expect(received).toMatchSchema(schema)\n\n` + `Schema validation failed at path: '${pathString}'\n`;

      if (expectedType !== "N/A" || receivedType !== "N/A") {
        message +=
          `Expected type: ${expectedType}\n` + `Received type: ${receivedType} (Value: ${receivedValueString})\n`;
      } else {
        message += `Received value at path: ${receivedValueString}\n`;
      }

      message +=
        `Zod message: ${zodMessage}\n\n` +
        `Full Zod Error Details:\n${JSON.stringify(
          {
            name: result.error.name,
            issues: result.error.issues,
          },
          null,
          2
        )}`;

      return {
        message: () => message,
        pass: false,
      };
    }
  },
});
