const { test, expect } = require('@playwright/test');
const { Loginpage } = require('../page/loginpage'); 

test('successful login', async ({ page }) => {
    const loginPageInstance = new Loginpage(page); 
    
    await loginPageInstance.goto();
    await loginPageInstance.login('standard_user', 'secret_sauce');
// Change /dashboard/ to /inventory/ or /inventory.html/
await expect(page).toHaveURL(/inventory/); 

});
