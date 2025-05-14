import mongoose from "mongoose";

const { Schema, model } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      default: "GENERAL",
    },
  },
  { timestamps: true }
);

const Article = model("Article", articleSchema);
export default Article;
