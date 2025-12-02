import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class Footer extends Component {
  // Locators
  private root = this.page.locator("footer");
  private logo = this.root.getByRole("img", { name: "PayDo icon" });
  private headerNavigationList = this.root.getByRole("navigation").first();
  private businessButton = this.headerNavigationList.getByRole("link", { name: "Business" });
  private personalButton = this.headerNavigationList.getByRole("link", { name: "Personal" });

  private socialLinks = this.root.locator(".ft-header__social-networks");
  private linkedinLink = this.socialLinks.locator("a.icon-linkedin");
  private facebookLink = this.socialLinks.locator("a.icon-facebook");
  private instagramLink = this.socialLinks.locator("a.icon-instagram");
  private twitterLink = this.socialLinks.locator("a.icon-twitter");

  private mainNavigationList = this.root.getByRole("navigation").last();
  private listOfOptions = this.mainNavigationList.locator(".ft-navigation__group");
  private personalAccountList = this.listOfOptions.filter({
    has: this.page.locator(".ft-navigation__title", { hasText: "Personal account" }),
  });
  private personalAccountListTitle = this.personalAccountList.locator(".ft-navigation__title");
  private cardsLink = this.personalAccountList.getByRole("link", { name: "Cards" });
  private availableCurrenciesLink = this.personalAccountList.getByRole("link", { name: "Available currencies list" });
  private applePayLink = this.personalAccountList.getByRole("link", { name: "Apple Pay" });

  private pricingList = this.listOfOptions.filter({
    has: this.page.locator(".ft-navigation__title", { hasText: "Pricing" }),
  });
  private pricingListTitle = this.pricingList.locator(".ft-navigation__title");
  private personalAccountLink = this.pricingList.getByRole("link", { name: "Personal account" });

  private companyList = this.listOfOptions.filter({
    has: this.page.locator(".ft-navigation__title", { hasText: "Company" }),
  });
  private companyListTitle = this.companyList.locator(".ft-navigation__title");
  private contactUsLink = this.companyList.getByRole("link", { name: "Contact us" });
  private aboutUsLink = this.companyList.getByRole("link", { name: "About us" });
  private careersLink = this.companyList.getByRole("link", { name: "Careers" });
  private blogLink = this.companyList.getByRole("link", { name: "Blog" });
  private caseStudiesLink = this.companyList.getByRole("link", { name: "Case Studies" });
  private glossaryLink = this.companyList.getByRole("link", { name: "Glossary" });
  private eventsLink = this.companyList.getByRole("link", { name: "Events" });
  private newsLink = this.companyList.getByRole("link", { name: "News" });

  private legalList = this.listOfOptions.filter({
    has: this.page.locator(".ft-navigation__title", { hasText: "Legal" }),
  });
  private legalListTitle = this.legalList.locator(".ft-navigation__title");
  private legalAndPoliciesLink = this.legalList.getByRole("link", { name: "Legal & Policies" });
  private prohibitedJurisdictionPageLink = this.legalList.getByRole("link", { name: "Prohibited jurisdictions page" });
  private bugBountyProgramLink = this.legalList.getByRole("link", { name: "Bug Bounty Program" });

  private services = this.root.locator(".ft-services");
  private geoTarget = this.root.locator(".ft-geo-target");

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.root).toBeVisible();
    await expect(this.logo).toBeVisible();
    await expect(this.businessButton).toBeVisible();
    await expect(this.personalButton).toBeVisible();
    await expect(this.linkedinLink).toBeVisible();
    await expect(this.facebookLink).toBeVisible();
    await expect(this.instagramLink).toBeVisible();
    await expect(this.twitterLink).toBeVisible();
    await expect(this.personalAccountListTitle).toBeVisible();
    await expect(this.cardsLink).toBeVisible();
    await expect(this.availableCurrenciesLink).toBeVisible();
    await expect(this.applePayLink).toBeVisible();
    await expect(this.pricingListTitle).toBeVisible();
    await expect(this.personalAccountLink).toBeVisible();
    await expect(this.companyListTitle).toBeVisible();
    await expect(this.contactUsLink).toBeVisible();
    await expect(this.aboutUsLink).toBeVisible();
    await expect(this.careersLink).toBeVisible();
    await expect(this.blogLink).toBeVisible();
    await expect(this.caseStudiesLink).toBeVisible();
    await expect(this.glossaryLink).toBeVisible();
    await expect(this.eventsLink).toBeVisible();
    await expect(this.newsLink).toBeVisible();
    await expect(this.legalListTitle).toBeVisible();
    await expect(this.legalAndPoliciesLink).toBeVisible();
    await expect(this.prohibitedJurisdictionPageLink).toBeVisible();
    await expect(this.bugBountyProgramLink).toBeVisible();
    await expect(this.services).toBeVisible();
    await expect(this.geoTarget).toBeVisible();
    await expect(this.geoTarget).toContainText("Paydo Canada LTD");
    await expect(this.geoTarget).toContainText("9940-2785, COMMERCIAL DRIVE, VANCOUVER, BC, CANADA, V5N 4C5");
    await expect(this.geoTarget).toContainText(
      "Paydo Canada LTD (No. BC1372574) is registered MSB with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) (MSB registration number M22419089)"
    );
    await expect(this.geoTarget).toContainText(
      "as a payment service provider and for money transferring, foreign exchange dealing, Dealing in virtual currencies and Money transferring."
    );
  }
}
