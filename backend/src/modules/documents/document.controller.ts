import { Request, Response } from "express";
import { Document } from "./document.model";
import { openai } from "../../config/openai";

interface AuthRequest extends Request {
  user: any;
}

export const generateDocument = async (req: AuthRequest, res: Response) => {
  try {
    const { type, answers } = req.body;

    if (!type || !answers) {
      return res.status(400).json({ message: "Document type and answers are required" });
    }

    const prompt = `Create ${type} in Uzbek using answers: ${answers}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const content = completion.choices?.[0]?.message?.content || "";

    req.user.usage.docs = (req.user.usage.docs || 0) + 1;
    await req.user.save();

    const doc = await Document.create({
      userId: req.user._id,
      type,
      content,
    });

    res.json(doc);
  } catch (err: any) {
    console.error("Generate document error:", err.message);
    res.status(500).json({ message: "Failed to generate document", error: err.message });
  }
};
