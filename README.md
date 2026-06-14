# 🛒 Project Automation Test - SauceDemo

Đây là project cá nhân mình setup để chạy test tự động (End-to-End) cho trang web bán hàng [SauceDemo](https://www.saucedemo.com/). 

Mục tiêu của repo này là build một framework test gọn gàng, mô phỏng lại luồng mua hàng thực tế của user từ lúc login đến khi thanh toán xong.

## 🛠 Tech Stack
* **Core:** Playwright
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM)

## 📂 Cấu trúc Project
Mình thiết kế code theo pattern POM để tách biệt phần UI và logic test, giúp dễ maintain khi web thay đổi UI.

* `pages/`: Chứa các class định nghĩa locator và action của từng trang (VD: `LoginPage.ts`, `InventoryPage.ts`).
* `tests/`: Chứa các file kịch bản test chính.
* `playwright.config.ts`: File config chung của Playwright.

## 🚀 Hướng dẫn setup & chạy ở máy (Local)

**1. Clone repo & cài thư viện:**
```bash
git clone [https://github.com/DangKhoa1822041379/Luma-Automation-Project.git](https://github.com/DangKhoa1822041379/Luma-Automation-Project.git)
cd Luma-Automation-Project
npm install
npx playwright install
