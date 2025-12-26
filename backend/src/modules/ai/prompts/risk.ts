export const RISK_PROMPT = (text: string) => {
  return `
Sizning vazifangiz:
Ushbu huquqiy matnni tekshiring va xatarli bandlarni aniqlang:
- Jarimalar (penalties)
- Bir tomonlama o‘zgarishlar (unilateral changes)
- Avtomatik yangilanishlar (auto-renewals)
- Yuqori riskli majburiyatlar

Matn:
${text}

Natija:
- Har bir xatarli bandni ajratib ko‘rsating.
- Qisqacha tushuntiring: nima uchun bu xavfli.
`;
};
