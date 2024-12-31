import express from "express";
import userAuth from "../middleware/user.auth.js";
import {
  AcceptReservationRequest,
  CountNewReservationRequests,
  CreateDriver,
  GetDriverDetail,
  GetReservationRequestsDetail,
  ReadDriver,
} from "../controllers/driver.controller.js";

const driverRouter = express.Router();

driverRouter.post("/register", CreateDriver);

driverRouter.get("/show-all-drivers", ReadDriver);

driverRouter.post("/get-selected-driver-detail", userAuth, GetDriverDetail);

driverRouter.get(
  "/count-driver-new-request",
  userAuth,
  CountNewReservationRequests
);

driverRouter.get(
  "/get-new-reservation-request-details",
  userAuth,
  GetReservationRequestsDetail
);

driverRouter.post(
  "/accept-reservation-request",
  userAuth,
  AcceptReservationRequest
);

export default driverRouter;
