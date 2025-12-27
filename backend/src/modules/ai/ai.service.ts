import { openai } from "../../config/openai";
import {
  generateDocumentPrompt,
  simplifyPrompt,
  riskDetectionPrompt,
} from "./prompts";

export const generateDocumentAI = async (
  documentType: string,
  answers: any
) => {
  const prompt = generateDocumentPrompt(documentType, answers);
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message?.content || "";
};

export const simplifyAI = async (text: string) => {
  const prompt = simplifyPrompt(text);
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message?.content || "";
};

export const riskDetectionAI = async (text: string) => {
  const prompt = riskDetectionPrompt(text);
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message?.content || "";
};
