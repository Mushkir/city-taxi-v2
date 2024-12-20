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
