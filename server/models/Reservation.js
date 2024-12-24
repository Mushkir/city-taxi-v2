import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    pickupLocation: {
      type: String,
      required: true,
    },

    dropLocation: {
      type: String,
      required: true,
    },

    passengerId: {
      type: String,
      ref: "Passenger",
      required: true,
    },

    driverId: {
      type: String,
      ref: "Driver",
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
