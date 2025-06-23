const {test,expect}=require('@playwright/test');

test('test',async ({page})=> {

    await page.goto();

    const loc=page.locator();
    await expect(loc).v
})