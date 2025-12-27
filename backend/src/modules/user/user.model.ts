import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  role: "FREE" | "PREMIUM";
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["FREE", "PREMIUM"], default: "FREE" },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
