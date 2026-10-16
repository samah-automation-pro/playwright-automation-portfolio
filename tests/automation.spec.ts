import { test, expect } from '@playwright/test';

test('Test de visite sur Automation Exercise', async ({ page }) => {
    // 1. Ouvrir le site d'exercice
    await page.goto('https://automationexercise.com/');

    // 2. Cliquer sur le bouton "Consent" de la bannière de cookies si elle s'affiche
    const consentButton = page.getByRole('button', { name: 'Consent' });
    if (await consentButton.isVisible()) {
        await consentButton.click();
    }

    // 3. Cliquer sur le bouton "Products"
    await page.locator('a[href="/products"]').click();

    // 4. Vérifier que l'on est bien sur la page des produits
    await expect(page).toHaveURL('https://automationexercise.com/products');
});