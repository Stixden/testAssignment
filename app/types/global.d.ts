import { ZodTypeAny } from "zod";

declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> {
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
      toMatchSchema(schema: ZodTypeAny): Promise<R>;
    }
  }
}
