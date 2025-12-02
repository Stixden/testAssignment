import { test } from "@fixtures/index";

test("Open Account page from Main page and expect loaded", async ({ app }) => {
  await app.mainPage.open();
  await app.mainPage.bannerSection.clickOpenAccountButton();
  await app.signUpPage.expectLoaded();
});
