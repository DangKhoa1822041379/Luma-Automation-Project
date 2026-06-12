import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('E2E Commerce Flow', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        // Khởi tạo các trang trước khi test chạy
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
    });

    test('Customer should be able to complete a purchase successfully', async ({ page }) => {
        // Bước 1: Điều hướng và Đăng nhập bằng tài khoản hợp lệ
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');
        
        // Assert: Xác nhận đã vào được trang sản phẩm
        await expect(inventoryPage.pageTitle).toHaveText('Products');

        // Bước 2: Thêm hàng vào giỏ và bắt đầu thanh toán
        await inventoryPage.addBackpackToCartAndCheckout();

        // Bước 3: Điền thông tin giao hàng và Hoàn tất
        await inventoryPage.fillShippingDetailsAndFinish('John', 'Doe', '12345');

        // Assert Quan Trọng Nhất: Xác nhận giao dịch thành công trên UI
        await expect(inventoryPage.orderSuccessMessage).toBeVisible();
        await expect(inventoryPage.orderSuccessMessage).toHaveText('Thank you for your order!');
    });
});