const mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("User", userSchema);
