import Driver from "../models/Driver.js";
import Passenger from "../models/Passenger.js";
import bcrypt from "bcrypt";
import createSecretToken from "../utils/createSecretToken.js";
import setCookie from "../utils/setCookie.js";

export const Login = async (req, res) => {
  try {
    const { email, password, role } = req?.body;

    if (role === "passenger") {
      const passenger = await Passenger.findOne({ email });

      if (!passenger) {
        return res
          .status(404)
          .json({ message: "Passenger not found", status: 404 });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        passenger?.passengerPassword
      );

      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid credintials", status: 401 });
      }

      const { passengerPassword, ...safeData } = passenger.toObject();

      const token = createSecretToken(passenger?._id);
      await setCookie(req, res, token);

      return res
        .status(200)
        .json({ userData: safeData, status: 200, error: false });
    }

    if (role === "driver") {
      const driver = await Driver.findOne({ email });

      if (!driver) {
        return res
          .status(404)
          .json({ message: "Driver not found", status: 404 });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        driver?.driverPassword
      );

      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid credintials", status: 401 });
      }

      const { driverPassword, ...safeData } = driver.toObject();

      const token = createSecretToken(driver?.id);
      await setCookie(req, res, token);

      return res
        .status(200)
        .json({ userData: safeData, status: 200, error: false });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .clearCookie("token")
      .status(200)
      .json({ message: "Successfully logged out.", status: 200 });
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};
