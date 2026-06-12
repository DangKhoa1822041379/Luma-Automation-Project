import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false, 
    ignoreHTTPSErrors: true, // Bỏ qua mọi cảnh báo SSL
    launchOptions: {
      slowMo: 1000, // Cố tình làm chậm lại 1000 mili-giây (1 giây) sau mỗi thao tác
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});