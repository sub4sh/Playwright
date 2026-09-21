const { test, expect } = require('@playwright/test');

test('pop after any tab open', async ({ page }) => {
  await page.goto('https://demoqa.com/browser-windows');

  // Click the correct button and wait for popup
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#tabButton').click()
  ]);

  // Verify content inside the new tab
  await expect(popup.locator('h1')).toHaveText('This is a sample page');

  // Optional: pause for debugging
  await page.pause();
});
