
import { test } from '@playwright/test';

test('log request with goto', async ({ page }) => {
  // Requests
  page.on('request', req => {
    console.log('➡️ Method:', req.method());
    console.log('➡️ URL:', req.url());
  });

  // Responses
  page.on('response', res => {
    console.log('⬅️ Response:', res.status(), res.url());
  });

  // Block
  await page.route('**optimizely.com/event*', route => {
    console.log("Blocked another domain:", route.request().url());
    route.abort();
  });

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.locator('#start > button').click();

  await page.waitForTimeout(5000);

  await page.pause();
});
