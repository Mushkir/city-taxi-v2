import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    passengerId: {},
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
