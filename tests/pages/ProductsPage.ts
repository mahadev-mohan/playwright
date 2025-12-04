
import BasePage from "./BasePage";
import { Locator } from "@playwright/test";

export default class ProductsPage extends BasePage{
    private swagLabsHeader = "//div[text()='Swag Labs']";
    private addToCartButton = "//div[text()='$0']/ancestor::div[@class='inventory_item_description']//button";
    private cartIcon: string = "//a[@class='shopping_cart_link']";
    private cartBadge: string = "//a[@class='shopping_cart_link']/span";
    private productSort : string = "//select[@class='product_sort_container']";
    private inventoryItemPrice: string = "//div[@class='inventory_item_price']";
    private menu: string = "//button[@id='react-burger-menu-btn']";
    private logoutlink: string = "//a[text()='Logout']";

    async getswagLabsHeader(){
        return this.page.locator(this.swagLabsHeader)
    }
    async clickAddToProductButton(productName: string){
        await this.page.locator(this.addToCartButton.replace("$0",productName)).click();
    }
    async clickCartIcon(){
        await this.page.locator(this.cartIcon).click();
    }
    async getCartBadge(){
        return this.page.locator(this.cartBadge);
    }

    async selectProduct(option: "Price (low to high)"|"Name (A to Z)"|"Name (Z to A)"|"Price (high to low)"){
        await this.page.selectOption(this.productSort,{ label: option})
    }

    async getInventoryItemPrices():Promise<Locator>{
        return this.page.locator(this.inventoryItemPrice);
    }

    async clickMenu(){
        await this.page.locator(this.menu).click();
    }
    async clicLogout(){
        await this.page.locator(this.logoutlink).click();
    }
}