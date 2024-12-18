import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userAuth = async (req, res, next) => {
  try {
    const { token } = req?.cookies;
    if (!token)
      return res.status(401).json({ message: "Unauthorized", status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.userId = decoded?.userId;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default userAuth;
