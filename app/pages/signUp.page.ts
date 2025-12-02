import { BASE_ACCOUNT_URL } from "@app/constants";
import { AuthorizationPage } from "@common/authorization.page";
import { Locator, expect } from "@playwright/test";
import { step } from "@utils/step";

export class SignUpPage extends AuthorizationPage {
  public pagePath = `${BASE_ACCOUNT_URL}/en/auth/personal/sign-up`;

  // Locators
  protected get root(): Locator {
    return this.page.locator("auth-sign-up");
  }
  private header = this.root.getByRole("heading", { level: 1, name: "Create a personal account" });
  private logInButton = this.root.getByRole("link", { name: "Log In" });
  private passwordRequirements = this.root.locator("ngp-field-requirements");
  private passwordRequirementMinChars = this.passwordRequirements.locator("ngp-field-requirements-item", {
    hasText: "Min.8 characters",
  });
  private passwordRequirementLowercaseLetter = this.passwordRequirements.locator("ngp-field-requirements-item", {
    hasText: "Lowercase letter",
  });
  private passwordRequirementUppercaseLetter = this.passwordRequirements.locator("ngp-field-requirements-item", {
    hasText: "Uppercase letter",
  });
  private passwordRequirementOneNumber = this.passwordRequirements.locator("ngp-field-requirements-item", {
    hasText: "At least 1 number",
  });
  private confirmPasswordLabel = this.form.locator("span.ng-star-inserted", { hasText: "Confirm password" });
  private confirmPasswordInput = this.form.getByRole("textbox", { name: "Enter password" }).last();
  private createAccountButton = this.form.getByRole("button", { name: "Create an account" });
  private switchToBusinessButton = this.root.getByRole("link", { name: "Switch to create Business account" });
  private termsText = this.root.getByText(
    "By creating an account you confirm that you read and accept our Terms of Use © Paydo Canada LTD"
  );
  private termsLink = this.termsText.getByRole("link", { name: "Terms of Use © Paydo Canada LTD" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await super.expectLoaded();
    await expect(this.header).toBeVisible();
    await expect(this.logInButton).toBeVisible();
    await expect(this.passwordRequirementMinChars).toBeVisible();
    await expect(this.passwordRequirementLowercaseLetter).toBeVisible();
    await expect(this.passwordRequirementUppercaseLetter).toBeVisible();
    await expect(this.passwordRequirementOneNumber).toBeVisible();
    await expect(this.confirmPasswordLabel).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.createAccountButton).toBeVisible();
    await expect(this.switchToBusinessButton).toBeVisible();
    await expect(this.termsText).toBeVisible();
    await expect(this.termsLink).toBeVisible();
  }
}
