import { DataTable, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

When('the user clicks add to cart button in products:', async function (this: CustomWorld,dataTable: DataTable) {
    const products = dataTable.raw().flat();
    //Assign products to the Cucumber World parameters so they can be used across steps
    this.data['products']= products;

    for (const product of products) {
        console.log(product)
        await this.productsPage.clickAddToProductButton(product);
    }
})
Then('the cart icon should indicate the count of products', async function (this: CustomWorld) {
    const products = this.data['products'] as []
    const expectedProductsCount = products.length;
    const cartBadge = await this.productsPage.getCartBadge()
    await expect(cartBadge).toHaveText(expectedProductsCount.toString());
    await cartBadge.scrollIntoViewIfNeeded();
    await this.basePage.attachScreenshot(this.attach);
})
When('the user clicks on cart icon', async function (this: CustomWorld) {
    await this.productsPage.clickCartIcon();
})
Then('the user should see selected products in the cart', async function (this: CustomWorld) {
    const expectedProducts = this.data['products'] as [];
    const cartItems = await this.yourCartPage.getCartInventoryItems();
    const products: Array<string> = [];

    for (const item of cartItems){
        const itemName = (await item.innerText()).trim();
        products.push(itemName);   
    }

    expect(expectedProducts).toEqual(products)
    await this.basePage.attachScreenshot(this.attach);
})