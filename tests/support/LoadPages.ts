import { Page } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import BasePage from "../pages/BasePage";
import YourCartPage from "../pages/YourCartPage";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";
import CheckoutInformationsPage from "../pages/CheckoutInformationsPage";
import CheckoutCompletePage from "../pages/CheckoutCompletePage";
import { CustomWorld } from "./world";

export async function LoadPages(world: CustomWorld, page: Page){
    world.basePage = new BasePage(page);
    world.loginPage = new LoginPage(page);
    world.productsPage = new ProductsPage(page);
    world.yourCartPage = new YourCartPage(page);
    world.checkoutInformationsPage = new CheckoutInformationsPage(page);
    world.checkoutOverviewPage = new CheckoutOverviewPage(page);
    world.checkoutCompletePage = new CheckoutCompletePage(page);
}
