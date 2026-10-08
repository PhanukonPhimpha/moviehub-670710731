// src/first.test.js (ไฟล์ลองมือ ลบทิ้งได้หลังคาบ)
// ฟังก์ชันเล็ก ๆ ไว้ลองเสต์ (ปกติจะ import มาจาไฟล์อื่น)

function isLongEnough(text) {
    return text.trim().length >= 10;
}

describe('isLongEnough: กติการีวิวต้องยาวอย่างน้อย 10 ตัวอักษร', () => {
    test('ข้อความยาวพอ ต้องได้ true', () => {
        expect(isLongEnough('สนุกมาก ฉากเอ็กชันดี')).toBe(true);
    });

    test('ข้อความสั้น ต้องได้ false', () => {
        expect(isLongEnough('สั้นไป')).toBe(false);
    });

    test('ช่องว่างล้วนๆ ไม่นับเป็นความยาว', () => {
        expect(isLongEnough('          ')).toBe(false);
    });
});