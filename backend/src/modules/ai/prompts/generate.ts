export const GENERATE_PROMPT = (type: string, answers: string) => {
  return `
Sizning vazifangiz: quyidagi turdagi hujjatni (type) yaratish.
Foydalanuvchi javoblari: ${answers}

Shartlar:
- Hujjatni rasmiy huquqiy formatda yozing.
- Foydalanuvchi javoblarini to‘liq va tushunarli tarzda qo‘shing.
- Hujjatni o‘zbek tilida taqdim eting.
`;
};
