import { APIResponse, expect } from "@playwright/test";
import { z } from "zod";

export const validateSchema = async <T extends z.ZodTypeAny>(resp: APIResponse, schema: T): Promise<z.infer<T>> => {
  const rawJson: unknown = await resp.json();
  await expect(rawJson).toMatchSchema(schema);
  const parsed = schema.parse(rawJson);
  return parsed as z.infer<T>;
};
