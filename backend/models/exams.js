import mongoose from "mongoose";

const { Schema, model } = mongoose;

const examSchema = new Schema(
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

const Exam = model("Exams", examSchema);

export default Exam;
