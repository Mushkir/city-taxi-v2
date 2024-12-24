import Reservation from "../models/Reservation.js";

export const Create = async (req, res) => {
  const loggedInUserId = req.userId;

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized", status: 401 });
    }
    const { pickupLocation, driverId, dropLocation } = req?.body;

    const reservation = new Reservation({
      pickupLocation,
      dropLocation,
      passengerId: loggedInUserId,
      driverId,
    });

    await reservation.save();
    res.status(201).json({
      error: false,
      message: "Reservation request has been sent successfully.",
      status: 201,
    });

    // console.log(req?.body);
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

// GET Method
// Count user reservations
export const Count = async (req, res) => {
  const loggedInUserId = req?.userId;

  try {
    const query = { passengerId: loggedInUserId };
    const countPassengerReservations = await Reservation.countDocuments(query);

    res
      .status(200)
      .json({ status: 200, count: countPassengerReservations, error: false });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

// GET Method
// Get all user reservations
export const Read = async (req, res) => {
  const passengerId = req?.userId;

  try {
    const reservations = await Reservation.find({
      passengerId,
    }).populate("driverId");

    res.status(200).json({ data: reservations, status: 200, error: false });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Errorr" });
  }
};
