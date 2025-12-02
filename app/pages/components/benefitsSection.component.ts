import { Component } from "@app/abstractClasses";
import { BenefitsItem, benefitsItems } from "@data/components/benefitsItems";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class BenefitsSection extends Component {
  // Locators
  private root = this.page.locator("section.you-will-get-section");
  private benefitItem = this.root.locator(`.you-will-get-section__item`);
  private getNthBenefit(nthNumber: number) {
    const item = this.benefitItem.nth(nthNumber);
    return {
      title: item.locator(".you-will-get-section__title"),
      itemTitle: item.locator(".you-will-get-section__item-title"),
      description: item.locator(".you-will-get-section__item-description"),
      image: item.getByRole("img").first(),
      link: item.getByRole("link"),
    };
  }

  private getAllBenefitItems() {
    return this.benefitItem.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    expect(await this.getAllBenefitItems()).toHaveLength(benefitsItems.length);
    await Promise.all(benefitsItems.map((item, index) => this.checkNthBenefitsItem(index, item)));
  }

  @step()
  public async checkNthBenefitsItem(nthNumber: number, item: BenefitsItem): Promise<void> {
    const benefitItem = this.getNthBenefit(nthNumber);
    if (item.title) {
      await expect(benefitItem.title).toBeVisible();
      await expect(benefitItem.title).toHaveText(item.title);
    } else {
      await expect(benefitItem.title).toBeHidden();
    }
    if (item.itemTitle) {
      await expect(benefitItem.itemTitle).toBeVisible();
      await expect(benefitItem.itemTitle).toHaveText(item.itemTitle);
    } else {
      await expect(benefitItem.itemTitle).toBeHidden();
    }
    if (item.description) {
      await expect(benefitItem.description).toBeVisible();
      await expect(benefitItem.description).toHaveText(item.description);
    } else {
      await expect(benefitItem.description).toBeHidden();
    }
    if (item.hasImage) {
      await expect(benefitItem.image).toBeVisible();
    } else {
      await expect(benefitItem.image).toBeHidden();
    }
  }
}
