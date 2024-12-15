import express from "express";
import driverRouter from "./routes/driver.routes.js";
import connectDB from "./config/db.config.js";
import cors from "cors";
import bodyParser from "body-parser";
import passengerRouter from "./routes/passenger.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/driver", driverRouter);
app.use("/api/passenger", passengerRouter);

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
  connectDB();
});
