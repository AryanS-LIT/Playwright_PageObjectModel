import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)

   await Login.goto();
   await Login.login('tomsmith', 'SuperSecretPassword!');

    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByLabel('username').click();
    // await page.getByLabel('username').fill('tomsmith');
    // await page.getByLabel('password').click();
    // await page.getByLabel('password').fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: 'login' }).click();
});