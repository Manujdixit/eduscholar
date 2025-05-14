import mongoose from "mongoose";

const { Schema, model } = mongoose;

const testimonialSchema = new Schema({
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

const Testimonial = model("Testimonial", testimonialSchema);

export default Testimonial;
