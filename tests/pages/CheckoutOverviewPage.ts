import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutOverviewPage extends BasePage {
    private checkoutOverviewTitle: string = "//span[text()='Checkout: Overview']";
    private inventoryItem: string = "//div[@class='inventory_item_name']";
    private itemPrice: string = "//div[@class='inventory_item_price']";
    private itemTotal: string = "//div[@class='summary_subtotal_label']";
    private finishButton: string = "//button[@id='finish']";

    async getOverviewPageTitle(): Promise<Locator> {
        return this.page.locator(this.checkoutOverviewTitle);
    }

    async getOverviewInventoryItems(): Promise<Locator[]> {
        return await this.page.locator(this.inventoryItem).all();
    }
    async getOverviewInventoryItemPrice(): Promise<Locator> {
        return this.page.locator(this.itemPrice);
    }
    async getItemTotal(): Promise<Locator> {
        return this.page.locator(this.itemTotal);
    }
    async clickFinishButton(): Promise<void> {
        await this.page.locator(this.finishButton).click();
    }

}