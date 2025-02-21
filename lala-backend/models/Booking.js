import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    renterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    checkIn: Date,
    checkOut: Date,
    status: { type: String, enum: ["Pending", "Confirmed", "Canceled"], default: "Pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
