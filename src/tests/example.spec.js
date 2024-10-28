const { test , expect } = require('@playwright/test')

test('This is my test sample', async({ page }) => {
    await page.goto('http://www.google.com')
    await expect(page).toHaveTitle('Google')
})