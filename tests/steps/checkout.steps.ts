import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import utils from "../support/Utils";
import { expect } from "@playwright/test";

When('the user clicks checkout button', async function (this: CustomWorld) {
   await this.yourCartPage.clickCheckoutButton();
})
When('the user enters checkout informations', async function (this: CustomWorld) {
   const firstName = utils.generateRandomString(8);
   const lastName = utils.generateRandomString(4);
   const pincode = utils.getRandomInteger(10000, 99999);
   await this.checkoutInformationsPage.enterFirstName(firstName);
   await this.checkoutInformationsPage.enterLastName(lastName);
   await this.checkoutInformationsPage.enterPostalCode(pincode.toString());

})
When('the user clicks continue button', async function (this: CustomWorld) {
   await this.checkoutInformationsPage.clickContinueButton();
})
Then('the user should see the total amount of products selected', async function (this: CustomWorld) {
   const itemPrices = await this.checkoutOverviewPage.getOverviewInventoryItemPrice();

   const priceTexts = await itemPrices.allTextContents();
   const prices = priceTexts.map(text => parseFloat(text.replace('$', '')));

   const sum = prices.reduce((acc, current) => acc + current, 0);
   const sumOfProducts = sum.toFixed(2);

   const total = await this.checkoutOverviewPage.getItemTotal();
   await expect(total).toBeVisible();
   const totalamount = (await total.innerText()).trim().replace('Item total:', '');

   expect(totalamount.replace('$', '').trim()).toEqual(sumOfProducts);
   await this.basePage.attachScreenshot(this.attach);
})
When('the user clicks finish button', async function (this: CustomWorld) {
   await this.checkoutOverviewPage.clickFinishButton();
})
Then('a thank you message should be visble', async function (this: CustomWorld) {
   await this.checkoutCompletePage.getThankyouMessage();
   await this.basePage.attachScreenshot(this.attach);
})
When('the user should navigate to the checkout infromation page', async function (this: CustomWorld) {
   const pageTitle = await this.checkoutInformationsPage.getInformationPageTitle();
   await expect(pageTitle).toBeVisible();
   await this.basePage.attachScreenshot(this.attach);
})
When('the user should navigate to the checkout overview page', async function (this: CustomWorld) {
   const pageTitle = await this.checkoutOverviewPage.getOverviewPageTitle();
   await expect(pageTitle).toBeVisible();
   await this.basePage.attachScreenshot(this.attach);
})