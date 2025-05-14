const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    fees: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Course", courseSchema);
