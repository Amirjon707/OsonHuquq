import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import {
  createDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
} from "./document.controller";

const router = Router();

router.use(authMiddleware);

router.post("/", createDocument);
router.get("/", getDocuments);
router.get("/:id", getDocumentById);
router.delete("/:id", deleteDocument);

export default router;
