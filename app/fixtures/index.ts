import { Api } from "@app/api";
import { Application } from "@app/index";
import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{
  app: Application;
  api: Api;
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
  api: async ({ request }, use) => {
    const api = new Api(request);
    await use(api);
  },
});
