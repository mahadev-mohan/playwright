import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import utils from "../support/Utils";
import { expect } from "@playwright/test";

When("the user selects {string} from the product sort dropdown",async function (this:CustomWorld,option) {
    await this.productsPage.selectProduct(option);
})
Then('the products should be sorted from lowest to highest price',async function(this: CustomWorld){
    const itemPrices = await this.productsPage.getInventoryItemPrices();
    const priceTexts = await itemPrices.allTextContents();
    const prices = priceTexts.map(text => parseFloat(text.replace('$', '')));
    expect(utils.isSortedAscending(prices), 'Prices should be sorted low to high').toBe(true);
    await this.basePage.attachScreenshot(this.attach);
    
})