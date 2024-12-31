import Driver from "../models/Driver.js";
import Reservation from "../models/Reservation.js";
import bcrypt from "bcrypt";

// POST Method
// Driver registration
export const CreateDriver = async (req, res) => {
  try {
    // console.log(typeof req?.body?.profileImage);
    const {
      addressLine,
      availableTime,
      city,
      confirmPassword,
      country,
      email,
      finishingTime,
      idCardNo,
      name,
      password,
      phoneNumber,
      profileImage,
      taxiNumber,
      username,
    } = req?.body;

    const isUserEmailExist = await Driver.findOne({ email });
    const isUsernameExist = await Driver.findOne({ username });
    const isUserIdNoExist = await Driver.findOne({ idCardNo });
    const isUserTaxiNumberExist = await Driver.findOne({ taxiNumber });

    if (isUserEmailExist) {
      return res
        .status(400)
        .json({ message: "Email already exist", status: 400 });
    }

    if (isUsernameExist) {
      return res
        .status(400)
        .json({ message: "Username already exist", status: 400 });
    }

    if (isUserIdNoExist) {
      return res
        .status(400)
        .json({ message: "ID Card Number already exist", status: 400 });
    }

    if (isUserTaxiNumberExist) {
      return res
        .status(400)
        .json({ message: "Taxi Number already exist", status: 400 });
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const doc = {
      name,
      email,
      profileImg: profileImage,
      phone: phoneNumber,
      idCardNo,
      username,
      driverPassword: hashPassword,
      address: addressLine,
      startTime: availableTime,
      endTime: finishingTime,
      city,
      country,
      taxiNumber,
    };
    const newDriver = new Driver(doc);
    await newDriver.save();
    res.status(201).json({
      error: false,
      message: "Driver created successfully",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

// GET Method
// Get all drivers detail
export const ReadDriver = async (req, res) => {
  try {
    const availableDrivers = await Driver.find()
      .where("availabilityStatus")
      .equals(true);

    return res.status(200).json({
      status: 200,
      error: false,
      data: availableDrivers,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

// POST Method
// Get driver detail
export const GetDriverDetail = async (req, res) => {
  try {
    const loggedInUser = req.userId;
    const { id } = req?.body;

    if (!loggedInUser) {
      return res
        .status(401)
        .json({ status: 401, message: "Forbidden", error: true });
    }

    const selectedDriver = await Driver.findOne({ _id: id });

    res.status(200).json({
      status: 200,
      error: false,
      data: selectedDriver?.city,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

// GET Method
// Count new reservation requests
export const CountNewReservationRequests = async (req, res) => {
  try {
    const userId = req?.userId;

    const query = { driverId: userId, status: "pending" };
    const countNewRequests = await Reservation.countDocuments(query);

    return res.status(200).json({
      status: 200,
      error: false,
      data: countNewRequests,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Errorr" });
  }
};

// GET Method
// Get all reservation requests detail
export const GetReservationRequestsDetail = async (req, res) => {
  try {
    const driverId = req?.userId;

    const requestDetails = await Reservation.find({
      driverId: driverId,
      status: "pending",
    }).populate("passengerId");

    res.status(200).json({
      status: 200,
      data: requestDetails,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Errorr" });
  }
};

// POST Method
// Accept a reservation request
export const AcceptReservationRequest = async (req, res) => {
  try {
    const { reservationId } = req?.body;

    const filter = { _id: reservationId };
    const update = { status: "on process" };

    const doc = await Reservation.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });

    res.status(200).json({
      status: 200,
      error: false,
      data: doc,
      message: "Request has been accepted.",
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Errorr" });
  }
};

// POST Method
// Reject a reservation request
export const RejectReservationRequest = async (req, res) => {
  try {
    const { reservationId } = req?.body;

    const filter = { _id: reservationId };
    const update = { status: "rejected" };

    const rejectedDoc = await Reservation.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });

    res.status(200).json({
      status: 200,
      error: false,
      message: "Request has been rejected.",
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Errorr" });
  }
};
