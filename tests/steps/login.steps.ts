import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import testData from "../data/testData.json"
import { CustomWorld } from "../support/world";


Given("the user launches the browser with Swag Labs url", async function () {
  await this.basePage.goTo(testData.urls.baseUrl);
  
});
Then('the user should see login page',async function name() {
    const title = await this.basePage.getTitle();
    expect(title).toEqual('Swag Labs');
    const loginpageLogo = await this.loginPage.getLogo();
    await expect(loginpageLogo).toBeVisible();
    await this.basePage.attachScreenshot(this.attach);
    this.log("Navigate to Swag Labs page successfully.")
})
When('the user enters username and password',async function(){
    await this.loginPage.enterUsername(testData.credentials.validUsername);
    await this.loginPage.enterPassword(testData.credentials.validPassword);
    await this.loginPage.clickLoginButton();
})
Then('the user should see products page',async function(){
    const header = await this.productsPage.getswagLabsHeader();
    await expect(header).toBeVisible();
    await this.basePage.attachScreenshot(this.attach);
    const url = await this.basePage.getCurrentUrl();
    this.log(`current url - ${url}`)
    expect(url).toContain('inventory')
    this.log("user logged in successfully.")
})

When('the user enters invalid username and password', async function(){
    await this.loginPage.enterUsername(testData.credentials.invalidUsername);
    await this.loginPage.enterPassword(testData.credentials.invalidPassword);
    await this.loginPage.clickLoginButton();
})
Then('the user should see error message', async function(){
    const errorMessage = await this.loginPage.getLoginErrorMessage();
    await expect(errorMessage).toBeVisible();
    await this.basePage.attachScreenshot(this.attach);
})
Then('the user should not navigate to products page', async function(){
    const url = await this.basePage.getCurrentUrl();
    this.log(`current url - ${url}`)
    expect(url).not.toContain('inventory')
})
When('the user click logout button from the hamburger menu',async function(this: CustomWorld){
    await this.productsPage.clickMenu();
    await this.productsPage.clicLogout();
})
Then('the user should navigate to the login page',async function(this: CustomWorld){
    const loginpageLogo = await this.loginPage.getLogo();
    await expect(loginpageLogo).toBeVisible();
    await this.basePage.attachScreenshot(this.attach);
})




