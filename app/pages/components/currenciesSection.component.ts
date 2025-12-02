import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class CurrenciesSection extends Component {
  // Locators
  private root = this.page.locator("section.currencies-section");
  private header = this.root.locator(".currencies-section__title");
  private description = this.root.locator(".currencies-section__description");
  private tickerRow = this.root.locator(".ticker-row");
  private getNthTickerRow(nthNumber: number) {
    const item = this.tickerRow.nth(nthNumber);
    return item;
  }

  private getAllTickerRows() {
    return this.tickerRow.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Flexibili﻿ty in currency exchange");
    await expect(this.description).toBeVisible();
    await expect(this.description).toHaveText(
      "Get account details to send and receive payments in 19 currencies, including EUR, GBP, and AUD, via SEPA, SEPA Instant, Cross-border, and Faster Payments. Store funds in different currencies for free and utilize the full scope of online payment solutions."
    );
    expect(await this.getAllTickerRows()).toHaveLength(3);
    await expect(this.getNthTickerRow(0)).toBeVisible();
    await expect(this.getNthTickerRow(1)).toBeVisible();
    await expect(this.getNthTickerRow(2)).toBeVisible();
    // toDO: card items assertions
  }
}
