import { Request, Response } from "express";
import { generateDocumentAI, simplifyAI, riskDetectionAI } from "./ai.service";

export const generateDocument = async (req: Request, res: Response) => {
  const { documentType, answers } = req.body;
  try {
    const result = await generateDocumentAI(documentType, answers);
    res.json({ content: result });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const simplifyText = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const result = await simplifyAI(text);
    res.json({ content: result });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const riskCheck = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const result = await riskDetectionAI(text);
    res.json({ content: result });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
