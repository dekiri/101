const{test, expect} = require('@playwright/test')

test('Launch Apllication', async({page}) => {
    await page.goto('https://playwright.dev/');
    await page.getByAltText('Playwright logo').nth(0).click();

})