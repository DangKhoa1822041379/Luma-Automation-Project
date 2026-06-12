import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Authentication Functionality', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Should show error message with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_email@test.com', 'WrongPass123!');
        
        await expect(loginPage.errorMessage).toBeVisible();
        // Thông báo lỗi đặc trưng của SauceDemo
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
        await loginPage.login('invalid_email@test.com', 'WrongPass123!');
        
        await page.pause(); // <--- Trình duyệt sẽ dừng cứng lại ở bước này
        
        await expect(loginPage.errorMessage).toBeVisible();
    });
});