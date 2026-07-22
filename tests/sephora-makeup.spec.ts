import { test, expect } from '@playwright/test';

test('navigate to Sephora and select Makeup from header menu', async ({ page }) => {
  await page.goto('https://www.sephora.com');

  const makeUpMenu = page.getByRole('link', { name: /^Makeup$/ });
  await expect(makeUpMenu).toBeVisible();
  await makeUpMenu.click();
});
