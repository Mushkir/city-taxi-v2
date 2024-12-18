import express from "express";
import driverRouter from "./routes/driver.routes.js";
import connectDB from "./config/db.config.js";
import cors from "cors";
import bodyParser from "body-parser";
import passengerRouter from "./routes/passenger.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import reservationRouter from "./routes/reservation.routes.js";

const app = express();
app.use(cookieParser());
const PORT = 3000;

const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/driver", driverRouter);
app.use("/api/passenger", passengerRouter);
app.use("/api/user", userRouter);
app.use("/api/reservation", reservationRouter);

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
  connectDB();
});
