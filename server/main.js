import express from "express";
import driverRouter from "./routes/driver.routes.js";
import connectDB from "./config/db.config.js";

const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/driver", driverRouter);

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
  connectDB();
});
