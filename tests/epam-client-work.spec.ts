import { test, expect } from '@playwright/test';

test('navigate from EPAM home to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAll = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.getByRole('banner').getByRole('link', { name: 'Services' }).first().click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  // Ensures the destination page loaded fully.
});
