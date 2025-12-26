import { Request, Response } from "express";
import { simplifyText } from "./ai.service";

export const simplifyController = async (req: any, res: Response) => {
  const { text } = req.body;
  const result = await simplifyText(text, req.user.plan);
  res.json({ result });
};
