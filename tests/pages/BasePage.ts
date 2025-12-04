import { Page } from "@playwright/test";
import { IWorld } from "@cucumber/cucumber";

export default class BasePage {
    page: Page;

    constructor(_page: Page) {
        this.page = _page;
    }

    get getPage() {
        return this.page;
    }
    /**
     * basepage function to navigate to a url.
     * @param url 
     */
    async goTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
    /**
     * basepage function to get current page title
     * @returns page title
     */
    async getTitle() {
        return await this.page.title();
    }
    /**
     * basepage function get current browser url
     * @returns current url
     */
    async getCurrentUrl() {
        return this.page.url();
    }
    /**
     * basepage function to attach screenshot to cucumber report
     * @param attach 
     */
    async attachScreenshot(attach: IWorld["attach"]) {
        const screenshot = await this.page.screenshot();
        attach(screenshot, `image/png`);
    }




}