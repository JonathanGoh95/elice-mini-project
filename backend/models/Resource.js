import mongoose from "mongoose";

const { Schema, model } = mongoose;

const resourceSchema = new Schema(
  {
    title: String,
    description: String,
    type: String,
    externalId: String,
    thumbnail: String,
    progress: {
      type: String,
      enum: ["not_started", "in_progress", "completed"],
      default: "not_started",
    },
  },
  { timestamps: true }
);

const Resource = model("Resource", resourceSchema);

export default Resource;
