import OpenAI from "openai";
import { generateDocumentPrompt, simplifyDocumentPrompt, riskCheckPrompt } from "./prompts";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const generateDocument = async (type: string, answers: any) => {
  const prompt = generateDocumentPrompt(type, answers);
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });
  return response.choices[0].message?.content || "";
};

export const simplifyDocument = async (text: string) => {
  const prompt = simplifyDocumentPrompt(text);
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });
  return response.choices[0].message?.content || "";
};

export const checkRisk = async (text: string) => {
  const prompt = riskCheckPrompt(text);
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0
  });
  try {
    return JSON.parse(response.choices[0].message?.content || "[]");
  } catch {
    return [];
  }
};
