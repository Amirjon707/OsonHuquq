import { Request, Response } from "express";
import { User } from "../users/user.model";
import { hashPassword, comparePassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Email exists" });

  const user = await User.create({
    email,
    passwordHash: await hashPassword(password),
  });

  const token = signToken(user._id.toString());
  res.json({ token });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.passwordHash))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signToken(user._id.toString());
  res.json({ token });
};
