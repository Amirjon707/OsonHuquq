import api from "@/app/lib/api";

export const generateAI = (prompt: string) =>
  api.post("/ai/generate", { prompt });

export const simplifyAI = (text: string) =>
  api.post("/ai/simplify", { text });

export const riskAI = (text: string) =>
  api.post("/ai/risk", { text });
