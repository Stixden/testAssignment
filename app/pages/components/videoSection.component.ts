import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class VideoSection extends Component {
  // Locators
  private root = this.page.locator("section.video-section");
  private header = this.root.locator(`.video-section__title`);
  private description = this.root.locator(`.video-section__description`);
  private getCardButton = this.root.getByRole("link", { name: "Get a card" });
  private learnMoreButton = this.root.getByRole("link", { name: "Learn more" });
  private video = this.root.locator("video");

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Issue physical and virtual cards");
    await expect(this.description).toBeVisible();
    await expect(this.description).toHaveText(
      "Access your money anywhere with a physical or virtual card, make transactions easily, and manage your finances on the go"
    );
    await expect(this.getCardButton).toBeVisible();
    await expect(this.learnMoreButton).toBeVisible();
    await expect(this.video).toBeVisible();
  }
}
