import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

export const generateToken = (id: string, role: "FREE" | "PREMIUM") => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "7d" });
};
