import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class CardsStressFreeSection extends Component {
  // Locators
  private root = this.page.locator("section.cards-stress-free-section");
  private header = this.root.locator(".cards-stress-free-section__title");
  private openAccountButton = this.root.getByRole("link", { name: "Open account" });
  private image = this.root.getByRole("img", { name: "Ready to open an account with PayDo?" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Ready to open an account with PayDo?");
    await expect(this.openAccountButton).toBeVisible();
    await expect(this.image).toBeVisible();
  }
}
