
import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    private logo: string = "//div[@class='login_logo']";
    private usernameInput: string = "//input[@id='user-name' and @placeholder='Username']";
    private passwordInput: string = "//input[@id='password' and @placeholder='Password']";
    private loginButton: string = "//input[@id='login-button' and @type='submit']";
    private errorMessage: string = "//h3[contains(text(),'Epic sadface: Username and password do not match any user in this service')]"

    async enterUsername(username: string): Promise<void> {
        await this.page.locator(this.usernameInput).fill(username)
    }

    async enterPassword(password: string): Promise<void> {
        await this.page.locator(this.passwordInput).fill(password)
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButton).click();
    }

    async getLoginErrorMessage(): Promise<Locator> {
        return this.page.locator(this.errorMessage);
    }

    async getLogo() {
        return this.page.locator(this.logo);
    }
}