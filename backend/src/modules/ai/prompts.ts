export const generateDocumentPrompt = (documentType: string, answers: any) => `
Siz O'zbekistonda huquqiy hujjat yozuvchi AI asistentsiz.
Foydalanuvchi uchun quyidagi hujjat turini yaratish kerak: ${documentType}.
Foydalanuvchi javoblari: ${JSON.stringify(answers)}.
Natija rasmiy huquqiy shaklda, bo'limlarga ajratilgan holda bo'lsin.
`;

export const simplifyPrompt = (text: string) => `
Quyidagi huquqiy matnni oddiy o'zbek tiliga tushuntiring va xavfli yoki muhim bo'limlarni ajratib ko'rsating.
Matn: ${text}
`;

export const riskDetectionPrompt = (text: string) => `
Quyidagi hujjatni tahlil qiling va xavfli shartlarni aniqlang:
- Jarimalar
- Bir tomonlama o'zgarishlar
- Avtomatik yangilanishlar
JSON formatida qaytaring: type, description, severity.
Matn: ${text}
`;
