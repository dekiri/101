const{test, expect} = require('@playwright/test')

test('Launch Apllication', async({page}) => {
    await page.goto('https://login.salesforce.com/');
    await page.getByLabel('Remember me').click();

})