import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class Header extends Component {
  // Locators
  private root = this.page.getByRole("banner");
  private logo = this.root.getByRole("link", { name: "Paydo logo" }).getByRole("img");
  private businessButton = this.root.getByRole("link", { name: "Business" });
  private personalButton = this.root.getByRole("link", { name: "Personal" });
  private contactUsButton = this.root.getByRole("link", { name: "Contact us" });
  private loginButton = this.root.getByRole("link", { name: "Log In" });
  private getAccountButton = this.root.getByRole("link", { name: "Get account" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.logo).toBeVisible();
    await expect(this.businessButton).toBeVisible();
    await expect(this.personalButton).toBeVisible();
    await expect(this.contactUsButton).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.getAccountButton).toBeVisible();
  }
}
