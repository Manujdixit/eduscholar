import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
import { PORT } from "./config/secret";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
