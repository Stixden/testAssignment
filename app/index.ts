import { PageHolder } from "@app/abstractClasses";
import { MainPage } from "@pages/main.page";
import { SignInPage } from "@pages/signIn.page";
import { SignUpPage } from "@pages/signUp.page";

export class Application extends PageHolder {
  public mainPage = new MainPage(this.page);
  public signInPage = new SignInPage(this.page);
  public signUpPage = new SignUpPage(this.page);
}
