import { test, expect } from '@playwright/test';

test('Test d erreur de connexion sur Herokuapp', async ({ page }) => {
  // 1. Aller sur la page de connexion
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Remplir avec un mauvais identifiant ou un faux mot de passe
  await page.fill('#username', 'mauvais_utilisateur');
  await page.fill('#password', 'faux_mot_de_passe');

  // 3. Cliquer sur Login
  await page.click('button[type="submit"]');

  // 4. Vérifier que le message d'erreur rouge s'affiche bien
  const messageErreur = page.locator('#flash');
  await expect(messageErreur).toContainText('Your username is invalid!');
});