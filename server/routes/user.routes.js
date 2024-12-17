import express from "express";
import { Login, logout } from "../controllers/user.controller.js";
import userAuth from "../middleware/user.auth.js";

const userRouter = express.Router();

userRouter.post("/login", Login);

userRouter.get("/logout", userAuth, logout);

export default userRouter;
