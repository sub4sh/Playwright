const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');   
// ✅ Added curly braces back to match the module.exports layout above
const { Filter } = require('../page/filter');         

test('filter', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const filter = new Filter(page); // 🚀 This will now initialize flawlessly!

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);

  // Step 2 & 3: Playwright's selectOption automatically clicks and selects,
  // but if you want to visibly click it first, this works:
  await filter.clickfilter.click();
  await filter.sortBy('za');

  // Step 4: Verify first item is sorted correctly
  const firstItem = page.locator('.inventory_item_name').first();
  await expect(firstItem).toHaveText('Sauce Labs Backpack');
  await page.pause();
});
