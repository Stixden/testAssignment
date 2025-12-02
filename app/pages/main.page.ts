import { AppPage } from "@app/abstractClasses";
import { BannerSection } from "@components/bannerSection.component";
import { BenefitsSection } from "@components/benefitsSection.component";
import { CardImageSection } from "@components/cardImageSection.component";
import { CardsStressFreeSection } from "@components/cardsStressFreeSection.component";
import { CurrenciesSection } from "@components/currenciesSection.component";
import { DashboardSection } from "@components/dashboardSection.component";
import { FAQSection } from "@components/faqSection.component";
import { Footer } from "@components/footer.component";
import { Header } from "@components/header.component";
import { ImageInfoSection } from "@components/imageInfoSection.component";
import { VideoSection } from "@components/videoSection.component";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class MainPage extends AppPage {
  public pagePath = "/";

  // Locators
  public header = new Header(this.page);
  public bannerSection = new BannerSection(this.page);
  public benefitsSection = new BenefitsSection(this.page);
  public dashboardSection = new DashboardSection(this.page);
  public currenciesSection = new CurrenciesSection(this.page);
  public videoSection = new VideoSection(this.page);
  public imageInfoSection = new ImageInfoSection(this.page);
  public cardImageSection = new CardImageSection(this.page);
  public cardsStressFreeSection = new CardsStressFreeSection(this.page);
  public faqSection = new FAQSection(this.page);
  public footer = new Footer(this.page);

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/PayDo/);
    await this.header.expectLoaded();
    await this.bannerSection.expectLoaded();
    await this.benefitsSection.expectLoaded();
    await this.dashboardSection.expectLoaded();
    await this.currenciesSection.expectLoaded();
    await this.videoSection.expectLoaded();
    await this.imageInfoSection.expectLoaded();
    await this.cardImageSection.expectLoaded();
    await this.cardsStressFreeSection.expectLoaded();
    await this.faqSection.expectLoaded();
    await this.footer.expectLoaded();
  }
}
