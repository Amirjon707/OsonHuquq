import mongoose from "mongoose";
import { MONGO_URI } from "./env";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("db connected");
  } catch (err) {
    console.error("db connection error:", err);
    process.exit(1);
  }
};
