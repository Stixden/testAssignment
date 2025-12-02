import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class BannerSection extends Component {
  // Locators
  private root = this.page.locator("section.banner-section");
  private header = this.root.getByRole("heading", { level: 1 });
  private description = this.root.getByRole("heading", { level: 2 });
  private openAccountButton = this.root.getByRole("link", { name: "Open account" });
  private viewPricingButton = this.root.getByRole("link", { name: "View pricing" });
  private previewImage = this.root.getByRole("img", { name: "Online Payment Solutions in One Platform" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Online Payment Solutions in One Platform");
    await expect(this.description).toBeVisible();
    await expect(this.description).toHaveText(
      "Get IBANs, send and receive transfers to 150+ countries, issue virtual or physical cards and hold funds in 19+ currencies in one platform for all online payment solutions"
    );
    await expect(this.openAccountButton).toBeVisible();
    await expect(this.viewPricingButton).toBeVisible();
    await expect(this.previewImage).toBeVisible();
  }

  @step()
  public async clickOpenAccountButton(): Promise<void> {
    await this.openAccountButton.click();
  }
}
