import { Request, Response, NextFunction } from "express";

export const usageMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  if (req.user.plan === "free" && req.user.usage.docs >= 3) {
    return res
      .status(403)
      .json({ message: "Free plan document limit reached" });
  }
  next();
};
