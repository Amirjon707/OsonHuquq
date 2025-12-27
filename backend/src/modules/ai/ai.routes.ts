import { Router } from "express";
import { aiGenerate, aiSimplify, aiRiskCheck } from "./ai.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/generate", authMiddleware, aiGenerate);
router.post("/simplify", authMiddleware, aiSimplify);
router.post("/risk", authMiddleware, aiRiskCheck);

export default router;
