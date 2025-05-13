import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import { PORT } from "./config/secret.js";
import universityRoutes from "./routes/university.routes.js";
import testimonialRoutes from "./routes/testimonials.routes.js";
import articleRoutes from "./routes/articles.routes.js";
import leadRoutes from "./routes/leads.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

// Routes
app.use("/api/universities", universityRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/leads", leadRoutes);

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
