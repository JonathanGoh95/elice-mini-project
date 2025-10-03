// bun
import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

// Import routers and controllers
import resources from "./routers/resources.js";

// Connect to MongoDB
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI);
mongoose.set("debug", true);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const app = express();
app.use(cors());
app.use(json());
app.use(logger("dev"));
app.use("api/resources", resources);

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("The express app is ready!");
});
