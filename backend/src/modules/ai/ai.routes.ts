import { Router } from "express";
import { simplifyController } from "./ai.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const aiRoutes = Router();
aiRoutes.post("/simplify", authMiddleware, simplifyController);
