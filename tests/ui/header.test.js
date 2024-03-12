const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://krasen84-shopping-list.onrender.com'); 
    const homeLink = await page.$('h1');
    const text = await homeLink.textContent();
    expect(text).toBe('My Shopping List');
  });
  