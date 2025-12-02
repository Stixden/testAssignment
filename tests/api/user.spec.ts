import { test } from "@fixtures/index";
import { expect } from "@playwright/test";

test("get user by user_id", async ({ api }) => {
  const user_id = "123";
  const { resp, jsonResp } = await api.getUser(user_id);
  expect(resp.status()).toBe(200);
  // toDO: add jsonResp assertions
});

test("post user", async ({ api }) => {
  const { resp, jsonResp } = await api.postUser("Alex", 30, true);
  expect(resp.status()).toBe(201);
  // toDO: add jsonResp assertions
});
