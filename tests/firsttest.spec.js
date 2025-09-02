const {test, expect} = require('@playwright/test')

test('Launch Application', async ({page}) => {
   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
})