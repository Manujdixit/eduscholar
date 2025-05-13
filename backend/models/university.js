const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema(
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("University", universitySchema);
