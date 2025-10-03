// bun
import { config } from "dotenv";
config();
import express, { json } from "express";
import { connect, set, connection } from "mongoose";
import cors from "cors";
import logger from "morgan";

// Import routers and controllers
import resources from "./routers/resources";

// Connect to MongoDB
connect(`${import.meta.env.MONGODB_URI}`);
set("debug", true);
connection.on("connected", () => {
  console.log(`Connected to MongoDB ${connection.name}.`);
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
