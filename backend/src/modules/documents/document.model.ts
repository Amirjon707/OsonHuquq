import { Schema, model } from "mongoose";

const DocumentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    type: { type: String, required: true },
    content: { type: String, required: true },
    risks: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Document = model("Document", DocumentSchema);
