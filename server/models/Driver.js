import mongoose, { Schema } from "mongoose";

const driverSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    idCardNo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    driverPassword: {
      type: String,
      required: true,
    },
    availabilityStatus: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    taxiNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "driver",
    },
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;
