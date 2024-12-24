import express from "express";
import { Count, Create, Read } from "../controllers/reservation.controller.js";
import userAuth from "../middleware/user.auth.js";

const reservationRouter = express.Router();

reservationRouter.post("/reserve-taxi", userAuth, Create);

reservationRouter.get("/count-reservations", userAuth, Count);

reservationRouter.get("/show-reservation-details", userAuth, Read);

export default reservationRouter;
