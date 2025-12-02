import { Component } from "@app/abstractClasses";
import { FAQItem, faqItems } from "@data/components/faqItems";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class FAQSection extends Component {
  // Locators
  private root = this.page.locator("section.faq-section");
  private header = this.root.locator(".faq-section__title");
  private accordionGroup = this.root.locator("accordion-group");
  private accordionItem = this.accordionGroup.locator("accordion-item");

  private getNthAccordionGroup(nthNumber: number) {
    const item = this.accordionItem.nth(nthNumber);
    return {
      title: item.locator(".accordion-item__summary"),
      // toDO: need to fix next locator, doesn't find element due to shadow DOM
      content: item.locator(".accordion-item__content"),
    };
  }
  private getAllAccordionItems() {
    return this.accordionItem.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("FAQ");
    expect(await this.getAllAccordionItems()).toHaveLength(faqItems.length);
    // toDO: add assertions for accordion items
    // await Promise.all(faqItems.map((item, index) => this.checkNthFAQItem(index, item)));
  }

  @step()
  public async checkNthFAQItem(nthNumber: number, item: FAQItem): Promise<void> {
    const faqItem = this.getNthAccordionGroup(nthNumber);
    await expect(faqItem.title).toBeVisible();
    await expect(faqItem.title).toHaveText(item.title);
    await expect(faqItem.content).toHaveText(item.description);
  }
}
