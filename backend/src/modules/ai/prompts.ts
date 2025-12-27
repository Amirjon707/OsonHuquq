export const generateDocumentPrompt = (type: string, answers: any) => {
  return `
Siz O'zbekistondagi huquqiy hujjat generatorisiz.
Hujjat turi: ${type}
Foydalanuvchi javoblari: ${JSON.stringify(answers)}

Rasmiy, huquqiy tuzilgan matn hosil qiling.
Faqat matn qaytaring, hech qanday qo‘shimcha sharh yo‘q.
`;
};

export const simplifyDocumentPrompt = (text: string) => {
  return `
Quyidagi matnni oddiy o‘zbek tiliga tushunarli qilib tarjima qiling:
"${text}"
Faqat matn qaytaring.
`;
};

export const riskCheckPrompt = (text: string) => {
  return `
Quyidagi hujjatda xavfli shartlarni aniqlang va tavsifini qaytaring:
"${text}"
Format: JSON array [{"type": "Penalty|Unilateral|Auto-renew", "description": "...", "severity": "LOW|MEDIUM|HIGH"}]
`;
};
