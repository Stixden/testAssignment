import { APIRequestContext, type Page } from "@playwright/test";
import { step } from "@utils/step";

export abstract class RequestHolder {
  constructor(public request: APIRequestContext) {}
}

export abstract class PageHolder {
  constructor(public page: Page) {}
}

export abstract class Component extends PageHolder {
  abstract expectLoaded(): Promise<void>;

  @step()
  async isLoaded(): Promise<boolean> {
    try {
      await this.expectLoaded();
      return true;
    } catch {
      return false;
    }
  }
}

export abstract class AppPage extends Component {
  public abstract pagePath: string;

  @step()
  async open(): Promise<void> {
    await this.page.goto(this.pagePath);
    await this.expectLoaded();
  }
}
