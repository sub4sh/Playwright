const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');
// ✅ Added curly braces to match the module.exports layout
const { Cart } = require('../page/cartandpay'); 

test('cart and pay', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cart = new Cart(page); // 🚀 This will now initialize without crashing!

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await cart.carto('Subash', 'QA', '12345');
  await expect(page).toHaveURL(/checkout-step-one.html/);
  await cart.clickcontinue();
  await cart.clickfinish();
  



  await page.pause(); 
});
