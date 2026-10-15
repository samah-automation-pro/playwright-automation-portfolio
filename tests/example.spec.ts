import { test, expect } from '@playwright/test';

test('Mon premier test personnalisé', async ({ page }) => {
  // 1. Aller sur le site de Playwright
  await page.goto('https://playwright.dev/');

  // 2. Vérifier que le titre de la page contient bien "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});
