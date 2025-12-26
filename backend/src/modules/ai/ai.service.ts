import { openai } from "../../config/openai";

export const simplifyText = async (text: string, plan: string) => {
  const prompt =
    plan === "free"
      ? `Explain simply in Uzbek:\n${text}`
      : `Explain clause-by-clause in simple Uzbek and highlight risks:\n${text}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
};
