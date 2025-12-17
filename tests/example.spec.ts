import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  await expect(page).toHaveTitle(
    /E-commerce site for automation testing/
  );
});


test('navigate to My account page', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  await page.getByRole('link', { name: 'My account' }).click();

  await expect(page).toHaveURL(/my-account/);

  await expect(
    page.getByRole('heading', { name: /my account/i })
  ).toBeVisible();
});
