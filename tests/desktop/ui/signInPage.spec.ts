import { signInInvalidProfiles } from "@data/authorization/signInProfiles";
import { signInErrors } from "@data/errors/authorization";
import { test } from "@fixtures/index";

test("Open LogIn page, check error message for invalid data", async ({ app }) => {
  await app.signInPage.open();
  await app.signInPage.fillFormAndSubmit(signInInvalidProfiles[0].email, signInInvalidProfiles[0].password);
  await app.signInPage.expectErrorMessage(signInErrors.invalidEmailOrPassword);
});
