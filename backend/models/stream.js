import mongoose from "mongoose";

const { Schema, model } = mongoose;

const streamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

const Stream = model("Stream", streamSchema);

export default Stream;
