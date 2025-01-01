import express from "express";
import userAuth from "../middleware/user.auth.js";
import {
  AcceptReservationRequest,
  ChangeDriverStateAsBusy,
  CountNewReservationRequests,
  CreateDriver,
  GetDriverDetail,
  GetReservationRequestsDetail,
  ReadDriver,
  RejectReservationRequest,
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

driverRouter.post(
  "/reject-reservation-request",
  userAuth,
  RejectReservationRequest
);

driverRouter.post(
  "/change-driver-to-busy-status",
  userAuth,
  ChangeDriverStateAsBusy
);
export default driverRouter;
