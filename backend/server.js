// bun
import { config } from "dotenv";
config();
import express, { json } from "express";
import { connect, set, connection } from "mongoose";
import cors from "cors";
import logger from "morgan";

// Import routers from controllers
import authRouter from "./routers/authRouter";
import userRouter from "./routers/userRouter";
import reservationRouter from "./routers/reservationRouter";
import branchRouter from "./routers/branchRouter";

// Connect to MongoDB
connect(`${import.meta.env.MONGODB_URI}`);
set("debug", true);
connection.on("connected", () => {
  console.log(`Connected to MongoDB ${connection.name}.`);
});

// Middleware
const app = express();
app.use(cors());
app.use(json());
app.use(logger("dev"));

// Routes Declaration
app.use("/", authRouter);
app.use("/reservations", reservationRouter);
app.use("/find-us", branchRouter);
app.use("/users", userRouter);

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("The express app is ready!");
});
