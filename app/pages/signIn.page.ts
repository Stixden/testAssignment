import { BASE_ACCOUNT_URL } from "@app/constants";
import { AuthorizationPage } from "@common/authorization.page";
import { Locator, expect } from "@playwright/test";
import { step } from "@utils/step";

export class SignInPage extends AuthorizationPage {
  public pagePath = `${BASE_ACCOUNT_URL}/en/auth/personal/sign-in`;

  // Locators
  protected get root(): Locator {
    return this.page.locator("auth-sign-in");
  }
  private header = this.root.getByRole("heading", { level: 1, name: "Welcome back" });
  private forgotPasswordLink = this.root.getByRole("link", { name: "Forgot your password?" });
  private loginButton = this.form.getByRole("button", { name: "Log in" });
  private switchToBusinessButton = this.root.getByRole("link", { name: "Switch to your Business account" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await super.expectLoaded();
    await expect(this.header).toBeVisible();
    await expect(this.forgotPasswordLink).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.switchToBusinessButton).toBeVisible();
  }

  @step()
  public async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  private async fillForm(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  @step()
  public async fillFormAndSubmit(email: string, password: string): Promise<void> {
    await this.fillForm(email, password);
    await this.clickLoginButton();
  }
}
