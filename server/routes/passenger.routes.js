import express from "express";
import { CreatePassenger } from "../controllers/passenger.controller.js";

const passengerRouter = express.Router();

passengerRouter.post("/register", CreatePassenger);

export default passengerRouter;
