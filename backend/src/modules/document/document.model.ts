import mongoose, { Schema, Document } from "mongoose";

export interface IDocument extends Document {
  userId: mongoose.Types.ObjectId;
  type: "ARIZA" | "SHARTNOMA" | "DAVO" | "TARJIMA";
  title: string;
  content: string;
  riskFlags: {
    type: string;
    description: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
  }[];
  createdAt: Date;
}

const DocumentSchema: Schema<IDocument> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  type: {
    type: String,
    enum: ["ARIZA", "SHARTNOMA", "DAVO", "TARJIMA"],
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  riskFlags: [
    {
      type: { type: String },
      description: { type: String },
      severity: { type: String, enum: ["LOW", "MEDIUM", "HIGH"] },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export const DocumentModel = mongoose.model<IDocument>(
  "Document",
  DocumentSchema
);
