import { AppPage } from "@app/abstractClasses";
import { Slider } from "@components/slider.component";
import { Locator, expect } from "@playwright/test";
import { step } from "@utils/step";

export abstract class AuthorizationPage extends AppPage {
  public slider = new Slider(this.page);
  // Locators
  protected abstract get root(): Locator;

  protected get backToHomeButton(): Locator {
    return this.root.getByRole("link", { name: "Back to Homepage" });
  }
  protected get form(): Locator {
    return this.root.locator("form");
  }
  protected get emailLabel(): Locator {
    return this.form.locator("span.ng-star-inserted", { hasText: "Email" });
  }
  protected get emailInput(): Locator {
    return this.form.getByRole("textbox", { name: "Enter email" });
  }
  protected get passwordLabel(): Locator {
    return this.form.locator("span.ng-star-inserted", {
      hasText: "Password",
      hasNotText: "Confirm password",
    });
  }
  protected get passwordInput(): Locator {
    return this.form.getByRole("textbox", { name: "Enter password" }).first();
  }
  protected get errorMessage(): Locator {
    return this.root.locator("ngp-info-block");
  }
  protected get errorMessageIcon(): Locator {
    return this.errorMessage.locator("ngp-icon");
  }
  protected get errorMessageContent(): Locator {
    return this.errorMessage.locator(".ngp-info-block__content");
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await this.slider.expectLoaded();
    await expect(this.backToHomeButton).toBeVisible();
    await expect(this.form).toBeVisible();
    await expect(this.emailLabel).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordLabel).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  @step()
  public async expectErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessageIcon).toBeVisible();
    await expect(this.errorMessageContent).toBeVisible();
    await expect(this.errorMessageContent).toHaveText(message);
  }
}
