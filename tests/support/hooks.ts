import { Before, After, AfterStep, setDefaultTimeout } from "@cucumber/cucumber";
import { LoadPages } from "./LoadPages";
import { CustomWorld } from "./world";

setDefaultTimeout(30000)
Before(async function (this: CustomWorld) {
  await this.init();
  await this.initApi();
  await LoadPages(this, this.page);
  console.log("test starts at before hooks")
});

After(async function () {
  await this.browser.close();
  console.log("exicuting after hooks")
});

AfterStep(async function ({ result, pickleStep }) {
    const currentStepName = pickleStep.text;
    console.log(`step executing ==> ${currentStepName}`);
    if (result.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        this.attach(screenshot, `image/png`);
    }
});


