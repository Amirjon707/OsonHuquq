import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const data = await registerUser(email, password);
    res.status(201).json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const data = await loginUser(email, password);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
