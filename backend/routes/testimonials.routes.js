import express from "express";
import { getTestimonials } from "../controllers/testimonials.controller.js";

const router = express.Router();

// Get testimonials
router.get("/", getTestimonials);

export default router;
