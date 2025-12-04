
import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import YourCartPage from "../pages/YourCartPage";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";
import CheckoutInformationsPage from "../pages/CheckoutInformationsPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  data: Record<string, any> = {};

  basePage!: BasePage;
  loginPage!: LoginPage;
  productsPage!: ProductsPage;
  yourCartPage!: YourCartPage;
  checkoutInformationsPage!: CheckoutInformationsPage;
  checkoutOverviewPage!: CheckoutOverviewPage;
  checkoutCompletePage!: CheckoutCompletePage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }
}

setWorldConstructor(CustomWorld);