import { Component } from "@app/abstractClasses";
import { CardImageItem, cardImageItems } from "@data/components/cardImageItems";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class CardImageSection extends Component {
  // Locators
  private root = this.page.locator("section.card-image-box");
  private header = this.root.locator(".card-image-box__title");
  private openAccountButton = this.root.getByRole("link", { name: "Open account" });
  private viewPricingButton = this.root.getByRole("link", { name: "View pricing" });
  private cardImageItem = this.root.locator(".card-image-box__item");

  private getNthItem(nthNumber: number) {
    const item = this.cardImageItem.nth(nthNumber);
    return {
      image: item.getByRole("img"),
      title: item.locator(".card-image-box__item-title"),
      description: item.locator(".card-image-box__item-description"),
    };
  }

  private getAllDashboardItems() {
    return this.cardImageItem.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("PayDo it now, be proud of yourself later");
    await expect(this.openAccountButton).toBeVisible();
    await expect(this.viewPricingButton).toBeVisible();
    expect(await this.getAllDashboardItems()).toHaveLength(cardImageItems.length);
    await Promise.all(cardImageItems.map((item, index) => this.checkNthCardImageItem(index, item)));
  }

  @step()
  public async checkNthCardImageItem(nthNumber: number, item: CardImageItem): Promise<void> {
    const cardImageItem = this.getNthItem(nthNumber);
    await expect(cardImageItem.image).toBeVisible();
    await expect(cardImageItem.title).toBeVisible();
    await expect(cardImageItem.title).toHaveText(item.title);
    await expect(cardImageItem.description).toBeVisible();
    await expect(cardImageItem.description).toHaveText(item.description);
  }
}
