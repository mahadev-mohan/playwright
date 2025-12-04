import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class CheckoutInfromationPage extends BasePage {
    private checkoutInfoTitle: string = "//span[text()='Checkout: Your Information']";
    private firstNameInput: string = "//input[@id='first-name']";
    private lastNameInput: string = "//input[@id='last-name']";
    private postalCodeInput: string = "//input[@id='postal-code']";
    private continueButton: string = "//input[@id='continue']";

    async getInformationPageTitle(): Promise<Locator> {
        return this.page.locator(this.checkoutInfoTitle);
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.page.locator(this.firstNameInput).fill(firstName);
    }
    async enterLastName(firstName: string): Promise<void> {
        await this.page.locator(this.lastNameInput).fill(firstName);
    }
    async enterPostalCode(firstName: string): Promise<void> {
        await this.page.locator(this.postalCodeInput).fill(firstName);
    }
    async clickContinueButton(): Promise<void> {
        await this.page.locator(this.continueButton).click();
    }
}