import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly addToCartBackpackBtn: Locator;
    readonly cartIcon: Locator;
    readonly checkoutBtn: Locator;
    
    // Form thanh toán
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueBtn: Locator;
    readonly finishBtn: Locator;
    readonly orderSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Gom nhóm toàn bộ locator của quá trình mua hàng
        this.pageTitle = page.locator('.title');
        this.addToCartBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.checkoutBtn = page.locator('[data-test="checkout"]');
        
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
        this.finishBtn = page.locator('[data-test="finish"]');
        this.orderSuccessMessage = page.locator('.complete-header');
    }

    async addBackpackToCartAndCheckout() {
        // Hành vi: Click thêm hàng -> Vào giỏ -> Bấm thanh toán
        await this.addToCartBackpackBtn.click();
        await this.cartIcon.click();
        await this.checkoutBtn.click();
    }

    async fillShippingDetailsAndFinish(firstName: string, lastName: string, postalCode: string) {
        // Hành vi: Điền form -> Tiếp tục -> Xác nhận hoàn tất
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueBtn.click();
        await this.finishBtn.click();
    }
}