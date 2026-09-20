const { test, expect } = require('@playwright/test');

test('Iframe test with nested form', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Helper to fill input and assert value
  async function fillInput(frame, selector, value) {
    await frame.locator(selector).fill(value);
    await expect(frame.locator(selector)).toHaveValue(value);
  }

  // Frame 1
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await fillInput(frame1, 'input[name="mytext1"]', 'Subash1');

  // Frame 2
  const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  await fillInput(frame2, 'input[name="mytext2"]', 'Subash2');

  // Frame 3
  const frame3 = page.frameLocator('frame[src="frame_3.html"]');
  await fillInput(frame3, 'input[name="mytext3"]', 'Subash3');

  // Inner iframe inside Frame 3
  const innerIframe = frame3.frameLocator('iframe');

  // Radio button: "I am a human"
  const optionHuman = innerIframe.locator('[role="radio"][aria-label="I am a human"]');
  await optionHuman.click();
  await expect(optionHuman).toHaveAttribute('aria-checked', 'true');

  // // Checkbox: "Web Testing"
  // const webTesting = innerIframe.locator('input[value="Web Testing"]');
  // await webTesting.check();
  // await expect(webTesting).toBeChecked();

  // Next button inside inner iframe
const nextButton = innerIframe.getByRole('button', { name: 'अर्को' });
await nextButton.click();

const detail=innerIframe.getByRole('textbox',{name:'Enter a short text'});
await detail.fill('hi im subash timalsina');

// Click the last button (Submit) inside the inner iframe
const submit = innerIframe.getByRole('button', { name: 'पेस गर्नुहोस' });
await submit.click();     
  await page.pause(); // Debug mode
});
