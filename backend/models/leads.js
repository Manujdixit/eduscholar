import mongoose from "mongoose";

const { Schema, model } = mongoose;

const leadsSchema = new Schema({
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

const Leads = model("Leads", leadsSchema);

export default Leads;
