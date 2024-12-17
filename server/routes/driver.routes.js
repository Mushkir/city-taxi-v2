import express from "express";
import { CreateDriver, ReadDriver } from "../controllers/driver.controller.js";

const driverRouter = express.Router();

driverRouter.post("/register", CreateDriver);

driverRouter.get("/show-all-drivers", ReadDriver);

export default driverRouter;
