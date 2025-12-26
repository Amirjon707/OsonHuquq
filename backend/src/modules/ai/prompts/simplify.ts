export const SIMPLIFY_FREE = (text: string) => {
  return `
Sizning vazifangiz:
Ushbu murakkab huquqiy matnni oddiy va tushunarli o‘zbek tiliga soddalashtiring.

Matn:
${text}
`;
};

export const SIMPLIFY_PREMIUM = (text: string) => {
  return `
Sizning vazifangiz:
Ushbu murakkab huquqiy matnni oddiy va tushunarli o‘zbek tiliga soddalashtiring.
Xatarli jumlalarni ajratib ko‘rsating va foydalanuvchiga ogohlantirish bering.

Matn:
${text}
`;
};
