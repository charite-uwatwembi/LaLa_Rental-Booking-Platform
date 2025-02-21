import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["Renter", "Host"], default: "Renter" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
