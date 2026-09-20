const { test, expect } = require('@playwright/test');

test('UI.Vision file upload demo', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  // Upload a file
   await page.locator('#file-upload').setInputFiles('C:\\Users\\subash\\Desktop\\playwright study.pdf'
    //, C:\\Users\\subash\\Desktop\\selenium study.pdf  // for Mutiple file upload
   );
   await page.locator('#file-submit').click();
   

  await page.pause();


  // Assert file name appears
  
});
