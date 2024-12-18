import express from "express";
import { Create } from "../controllers/reservation.controller.js";
import userAuth from "../middleware/user.auth.js";

const reservationRouter = express.Router();

reservationRouter.post("/reserve-taxi", userAuth, Create);

export default reservationRouter;
