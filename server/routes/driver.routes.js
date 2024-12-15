import express from "express";
import { CreateDriver } from "../controllers/driver.controller.js";

const driverRouter = express.Router();

driverRouter.post("/register", CreateDriver);


export default driverRouter;
