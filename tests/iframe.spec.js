const { test, expect } = require('@playwright/test');

test('Iframe test with nested form', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Helper function
  async function fillInput(frame, selector, value) {
    await frame.locator(selector).fill(value);
    await expect(frame.locator(selector)).toHaveValue(value);
    console.log(`Filled ${selector} with ${value}`);
  }

  // Frame 1
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await fillInput(frame1, 'input[name="mytext1"]', 'Subash1');

  // Frame 2
  const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  await fillInput(frame2, 'input[name="mytext2"]', 'Subash2');

  // Frame 3 → nested iframe
  const frame3 = page.frameLocator('frame[src="frame_3.html"]');
  const innerIframe = frame3.frameLocator('iframe');

  // Question 1: radio
  const option1 = innerIframe.locator('input[value="option1"]');
  await option1.waitFor();
  await option1.check();
  await expect(option1).toBeChecked();
  console.log('Radio option selected');

  // Question 2: checkbox
  const webTesting = innerIframe.locator('input[value="Web Testing"]');
  await webTesting.waitFor();
  await webTesting.check();
  await expect(webTesting).toBeChecked();
  console.log('Checkbox selected');

  await page.pause();
});
