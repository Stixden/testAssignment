import { Component } from "@app/abstractClasses";
import { DashboardItem, dashboardItems } from "@data/components/dashboardItems";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class DashboardSection extends Component {
  // Locators
  private root = this.page.locator("section.finances-dashboard");
  private header = this.root.locator(".finances-dashboard__title");
  private description = this.root.locator(".finances-dashboard__description");
  private createAccountButton = this.root.getByRole("link", { name: "Create account" });
  private contactUsButton = this.root.getByRole("link", { name: "Contact us" });
  private video = this.root.locator("video");
  private dashboardItem = this.root.locator(".finances-dashboard__item");

  private getNthItem(nthNumber: number) {
    const item = this.dashboardItem.nth(nthNumber);
    return {
      image: item.getByRole("img"),
      title: item.locator(".finances-dashboard__item-title"),
      description: item.locator(".finances-dashboard__item-description"),
    };
  }

  private getAllDashboardItems() {
    return this.dashboardItem.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.header).toBeVisible();
    await expect(this.header).toHaveText("Real-Time Dashboard");
    await expect(this.description).toBeVisible();
    await expect(this.description).toHaveText(
      "Get complete financial control with PayDo’s all-in-one dashboard. Track transactions, manage balances, and make informed decisions in real time—everything you need for seamless financial management in one place"
    );
    await expect(this.createAccountButton).toBeVisible();
    await expect(this.contactUsButton).toBeVisible();
    await expect(this.video).toBeVisible();
    expect(await this.getAllDashboardItems()).toHaveLength(dashboardItems.length);
    await Promise.all(dashboardItems.map((item, index) => this.checkNthDashboardItem(index, item)));
  }

  @step()
  public async checkNthDashboardItem(nthNumber: number, item: DashboardItem): Promise<void> {
    const dashboardItem = this.getNthItem(nthNumber);
    await expect(dashboardItem.image).toBeVisible();
    await expect(dashboardItem.title).toBeVisible();
    await expect(dashboardItem.title).toHaveText(item.title);
    await expect(dashboardItem.description).toBeVisible();
    await expect(dashboardItem.description).toHaveText(item.description);
  }
}
