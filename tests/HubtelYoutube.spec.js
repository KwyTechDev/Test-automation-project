// Include Playwright module
const { test, expect } = require('@playwright/test');

// Write a test
test('Validate YouTube title', async ({ page }) => {
  // Go to URL
  await page.goto('https://www.youtube.com/');

  // Search with keywords
  await page.getByPlaceholder('Search').click();

  // Search name
  await page.getByPlaceholder('Search').fill('hubtel');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Search', exact: true }).click();


  // Clicking link on YouTube
  await page.getByRole('link', { name: /Hubtel AI Lab by Hubtel/ }).click();

  // Validate title
  await expect(page).toHaveTitle(/Hubtel AI Lab/);

  await page.evaluate(() => alert('Test Completed Successfully!'));
  
});
