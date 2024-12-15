import mongoose, { Schema } from "mongoose";

const passengerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    passengerPassword: { type: String, required: true },
    role: { type: String, required: true, default: "passenger" },
    idCardNo: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    profileImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Passenger = mongoose.model("Passenger", passengerSchema);
export default Passenger;
