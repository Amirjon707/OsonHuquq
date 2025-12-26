import { Router } from "express";
import { generateDocument } from "./document.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { usageMiddleware } from "../../middlewares/usage.middleware";

export const documentRoutes = Router();
documentRoutes.post(
  "/generate",
  authMiddleware,
  usageMiddleware,
  generateDocument
);
