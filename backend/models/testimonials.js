const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  testimonial: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

//Export the model
module.exports = mongoose.model("User", userSchema);
