
import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { APIRequestContext, Browser, BrowserContext, Page, chromium, request } from "playwright";
import * as dotenv from 'dotenv';
dotenv.config();

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import YourCartPage from "../pages/YourCartPage";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";
import CheckoutInformationsPage from "../pages/CheckoutInformationsPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";

export class CustomWorld extends World {
  apiContext!: APIRequestContext;
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
   async initApi() {
    
    this.apiContext = await request.newContext({
      baseURL: 'https://example.com'
    });
  }
}

setWorldConstructor(CustomWorld);