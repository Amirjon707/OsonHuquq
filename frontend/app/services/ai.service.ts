import api from "@/app/lib/api";

export const generateAI = (prompt: string) => {
  return api.post("/ai/generate", { prompt });
};

export const simplifyAI = (text: string) => {
  return api.post("/ai/simplify", { text });
};

export const riskAI = (text: string) => {
  return api.post("/ai/risk", { text });
};
