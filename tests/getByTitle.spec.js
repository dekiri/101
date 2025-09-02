const{test, expect} = require('@playwright/test')

test('Launch Apllication', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
    await page.getByTitle('ParaBank').click();

})