
import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class YourCartPage extends BasePage{

    private inventoryItem: string = "//div[@class='inventory_item_name']";
    private checkoutButton: string = "//button[@id='checkout']";

    async getCartInventoryItems():Promise<Locator[]>{
        return await this.page.locator(this.inventoryItem).all();
    }

    async clickCheckoutButton(){
        await this.page.locator(this.checkoutButton).click();
    }

}