const { test, expect } = require('@playwright/test');

test('test alerts on Herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // --- Simple Alert ---
  page.once('dialog', async dialog => {
    console.log(dialog.type());       // "alert"
    console.log(dialog.message());    // "I am a JS Alert"
    await dialog.accept();            // clicks OK
  });
  await page.click('text=Click for JS Alert');
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  // --- Confirm Alert ---
  page.once('dialog', async dialog => {
    console.log(dialog.type());       // "confirm"
    console.log(dialog.message());    // "I am a JS Confirm"
    await dialog.dismiss();           // presses Cancel
  });
  await page.click('text=Click for JS Confirm');
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

  // --- Prompt Alert ---
  page.once('dialog', async dialog => {
    console.log(dialog.type());       // "prompt"
    console.log(dialog.message());    // "I am a JS prompt"
    await dialog.accept('Subash');    // enters "Subash" and presses OK
  });
  await page.click('text=Click for JS Prompt');
  await expect(page.locator('#result')).toHaveText('You entered: Subash');

  await page.pause(); // optional for debugging
});
