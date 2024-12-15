import Passenger from "../models/Passenger.js";
import bcrypt from "bcrypt";

export const CreatePassenger = async (req, res) => {
  try {
    const {
      addressLine,
      city,
      confirmPassword,
      country,
      idCardNo,
      passengerEmail,
      passengerName,
      passengerPhoneNo,
      password,
      profileImg,
      username,
    } = req?.body;

    const isEmailExist = await Passenger.findOne({ email: passengerEmail });
    const isUsernameExist = await Passenger.findOne({ username });
    const isIdCardNoExist = await Passenger.findOne({ idCardNo });

    if (isEmailExist) {
      return res
        .status(400)
        .json({ message: "Email already exist", status: 400 });
    }

    if (isUsernameExist) {
      return res
        .status(400)
        .json({ message: "Username already exist", status: 400 });
    }

    if (isIdCardNoExist) {
      return res
        .status(400)
        .json({ message: "ID Card No already exist", status: 400 });
    }

    const saltRound = 10;

    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newPassenger = new Passenger({
      name: passengerName,
      email: passengerEmail,
      phone: passengerPhoneNo,
      username,
      passengerPassword: hashedPassword,
      idCardNo,
      address: addressLine,
      city,
      country,
      profileImage: profileImg,
    });

    await newPassenger.save();
    res.status(201).json({
      message: "Passenger created successfully",
      status: 201,
      error: false,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};
