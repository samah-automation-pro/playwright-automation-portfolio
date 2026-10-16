import { test, expect } from '@playwright/test';

test('Test de sélection dans une liste déroulante', async ({ page }) => {
    // 1. Aller sur la page de test stable
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // 2. Sélectionner l'option 2 dans le menu déroulant
    await page.locator('#dropdown').selectOption({ label: 'Option 2' });

    // 3. Vérifier que l'option 2 est bien sélectionnée
    await expect(page.locator('#dropdown')).toHaveValue('2');
});