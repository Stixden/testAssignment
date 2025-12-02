import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class ImageInfoSection extends Component {
  // Locators
  private root = this.page.locator("section.image-info");
  private header = this.root.locator(`.image-info__title`);
  private description = this.root.locator(`.image-info__description`);
  private openAccountButton = this.root.getByRole("link", { name: "Open account" });
  private viewPricingButton = this.root.getByRole("link", { name: "View pricing" });
  private image = this.root.getByRole("img", { name: "Join thousands of PayDo customers around the world" });

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Join thousands of PayDo customers around the world");
    await expect(this.description).toBeVisible();
    await expect(this.description).toHaveText(
      "Experience the convenience and flexibility that businesses and individuals around the world rely on with PayDo"
    );
    await expect(this.openAccountButton).toBeVisible();
    await expect(this.viewPricingButton).toBeVisible();
    await expect(this.image).toBeVisible();
  }
}
