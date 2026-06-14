import { test, expect } from '@playwright/test';

test.describe('API Testing - User Management System', () => {
    // Đổi sang một public API khác không yêu cầu xác thực
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('GET - Lấy danh sách người dùng và xác thực dữ liệu (Read)', async ({ request }) => {
        const response = await request.get(`${baseURL}/users`);
        
        // Xác nhận Status Code 200 (Thành công)
        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        // API này trả về một mảng (array) các users. Mình check xem mảng có dữ liệu không.
        expect(responseBody.length).toBeGreaterThan(0);
        
        // Kiểm tra user đầu tiên có các trường dữ liệu chuẩn xác không
        expect(responseBody[0]).toHaveProperty('id');
        expect(responseBody[0]).toHaveProperty('name');
        
        console.log('GET /users thành công! Dữ liệu trả về chuẩn.');
    });

    test('POST - Tạo mới một người dùng vào hệ thống (Create)', async ({ request }) => {
        // Chuẩn bị payload data gửi lên
        const newEmployee = {
            name: 'Lê Nhật Tùng',
            job: 'Automation SDET',
            email: 'tung.sdet@example.com'
        };

        const response = await request.post(`${baseURL}/users`, {
            data: newEmployee
        });

        // Đa số các API quy định tạo mới thành công sẽ trả về 201 (Created)
        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        
        // Assert: Xác nhận Server đã nhận và trả lại đúng data
        expect(responseBody.name).toBe('Lê Nhật Tùng');
        expect(responseBody.job).toBe('Automation SDET');
        
        // Cực kỳ quan trọng: Xác nhận server có sinh ra một ID mới cho user này
        expect(responseBody).toHaveProperty('id');
        
        console.log('POST /users thành công! Đã tạo user mới với ID:', responseBody.id);
    });
});