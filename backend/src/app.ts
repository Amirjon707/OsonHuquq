import express from "express";
import cors from "cors";
import { authRoutes } from "./modules/auth/auth.routes";
import { documentRoutes } from "./modules/documents/document.routes";
import { aiRoutes } from "./modules/ai/ai.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/ai", aiRoutes);
