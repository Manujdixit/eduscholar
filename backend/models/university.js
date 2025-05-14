import mongoose from "mongoose";

const { Schema, model } = mongoose;

const universitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    stream: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
    affordabilityScore: {
      type: Number,
      required: true,
      index: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    ranking: {
      type: Number,
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const University = model("University", universitySchema);

export default University;
