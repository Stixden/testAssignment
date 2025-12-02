import { Component } from "@app/abstractClasses";
import { expect } from "@playwright/test";
import { step } from "@utils/step";

export class Slider extends Component {
  // Locators
  private slider = this.page.locator("auth-slider-content");
  private logo = this.slider.getByRole("img", { name: "Paydo logo" });
  private sliderTitle = this.slider.locator(".auth-slider-content__account-type");
  private previousSlide = this.slider.locator(".swiper-slide-prev");
  private currentSlide = this.slider.locator(".swiper-slide-active");
  private currentSlideTitle = this.currentSlide.locator(".ngp-slider-item__title");
  private currentSlideDescription = this.currentSlide.locator(".ngp-slider-item__description");
  private nextSlide = this.slider.locator(".swiper-slide-next");
  private slide = this.slider.locator(".ngp-gallery-slider-item");
  private pagination = this.slider.locator(".ngp-gallery-slider__pagination");

  private getNthSlide(nthNumber: number) {
    const item = this.slide.nth(nthNumber);
    return {
      image: item.getByRole("img"),
      title: item.locator(".ngp-gallery-slider-title"),
      description: item.locator(".ngp-gallery-slider-description"),
    };
  }

  private getAllSlides() {
    return this.slide.all();
  }

  // Actions
  @step()
  public async expectLoaded(): Promise<void> {
    await expect(this.slider).toBeVisible();
    await expect(this.logo).toBeVisible();
    await expect(this.sliderTitle).toBeVisible();
    await expect(this.previousSlide).toBeHidden();
    await expect(this.previousSlide).not.toBeInViewport();
    await expect(this.nextSlide).not.toBeInViewport();
    await expect(this.currentSlide).toBeVisible();
    await expect(this.currentSlide).toBeInViewport();
    await expect(this.currentSlideTitle).toBeVisible();
    await expect(this.currentSlideDescription).toBeVisible();
    expect(await this.getAllSlides()).toHaveLength(3);

    const slide0 = this.getNthSlide(0);
    await expect(slide0.title).toHaveText("Individual IBANs");
    await expect(slide0.description).toHaveText(
      "Send and receive international and local transfers in 12 currencies with your individual IBAN details. SEPA, SEPA Instant, SWIFT, FedWire, FPS, and other UK local payment schemes are supported"
    );
    const slide1 = this.getNthSlide(1);
    await expect(slide1.title).toHaveText("Issuing physical and virtual cards");
    await expect(slide1.description).toHaveText(
      "VISA cards for your shopping, subscription payments, or travel expenses. No need to top up the card, all the funds in your account are available immediately. Withdraw cash from ATMs, use Apple Pay or Google Pay - whatever is convenient for you"
    );
    const slide2 = this.getNthSlide(2);
    await expect(slide2.title).toHaveText("Pay with PayDo checkout");
    await expect(slide2.description).toHaveText(
      "Pay with Apple Pay & Google Pay, or with account balances in any currency. Instant balance top up on checkout page without interrupting your payment. Link your cards for one click purchases."
    );

    await expect(this.pagination).toBeVisible();
  }
}
