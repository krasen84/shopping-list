const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://krasen84-shopping-list.onrender.com/shopping-list');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  