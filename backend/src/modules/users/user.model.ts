import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    plan: { type: String, enum: ["free", "premium"], default: "free" },
    usage: {
      docs: { type: Number, default: 0 },
      simplify: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
