import { test, expect } from '@playwright/test';

test('Test de navigation sur ParaBank', async ({ page }) => {
  // 1. Ouvrir le site ParaBank
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // 2. Cliquer sur le lien "Register" (S'inscrire)
  await page.locator('text=Register').click();

  // 3. Vérifier que l'on est bien sur la page d'inscription
  await expect(page).toHaveURL(/.*register.htm/);
});
