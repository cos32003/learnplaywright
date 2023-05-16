import { test, expect } from "@playwright/test";

test("interaction with inputs", async ({ page }) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");

    //scroll the element into view
    await messageInput.scrollIntoViewIfNeeded();

    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before entering data:" + await messageInput.inputValue());

    await messageInput.type("Hello World");

    console.log("After entering data:" + await messageInput.inputValue())
});

test("interaction with inputs test case 2", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const enteraMessage = page.locator("input#sum1");
    const enterbMessage = page.locator("input#sum2");
    const getValueButton = page.locator("form#gettotal>button");
    const result = page.locator("p#addmessage");

    //scroll the element into view
    await enteraMessage.scrollIntoViewIfNeeded();
    await enterbMessage.scrollIntoViewIfNeeded();

    let number1 = 10;
    let number2 = 20;
    let total = number1 + number2;
    

    await enteraMessage.type("" + number1);
    await enterbMessage.type("" + number2);

    await getValueButton.click();

    expect(page.locator("//label[text()='Total a + b ']")).toHaveText("Total a + b")
    expect(result).toHaveText("" + total);

    



});