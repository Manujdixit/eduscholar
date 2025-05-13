const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
