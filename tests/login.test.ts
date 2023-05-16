import { chromium, test } from "@playwright/test"
test("Login test demo", async () => {
    const browser = await chromium.launch(
        { headless: true }
    );
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),'My account')]");
    await page.click("text=Login");
    //await page.click("'Login'")

    await page.fill("//input[@id='input-email']", "cos320031981@gmail.com");
    await page.fill("//input[@id='input-password']", "password123");
    await page.click("//input[@class='btn btn-primary']");

    await page.waitForTimeout(5000);

    //session is not carry over to new context, the user is not logged in
    const newContext = await browser.newContext();
    const page1 = await newContext.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    await page1.waitForTimeout(5000);


})