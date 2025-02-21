import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    pricePerNight: Number,
    location: String,
    hostId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
