import { Request, Response } from "express";
import { generateDocument, simplifyDocument, checkRisk } from "./ai.service";

export const aiGenerate = async (req: Request, res: Response) => {
  try {
    const { documentType, answers } = req.body;
    const content = await generateDocument(documentType, answers);
    res.json({ content });
  } catch (err) {
    res.status(500).json({ message: "AI generation failed", error: err });
  }
};

export const aiSimplify = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const simplified = await simplifyDocument(text);
    res.json({ simplified });
  } catch (err) {
    res.status(500).json({ message: "Simplify failed", error: err });
  }
};

export const aiRiskCheck = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const risks = await checkRisk(text);
    res.json({ risks });
  } catch (err) {
    res.status(500).json({ message: "Risk check failed", error: err });
  }
};
