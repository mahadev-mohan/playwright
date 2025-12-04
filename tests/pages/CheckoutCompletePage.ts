import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutCompletePage extends BasePage{
    
    private thankYouMessage: string = "//h2[text()='Thank you for your order!']";

    /**
     * 
     * @returns Thank you for your order! locator
     */
    async getThankyouMessage():Promise<Locator>{
        return this.page.locator(this.thankYouMessage);
    }
}