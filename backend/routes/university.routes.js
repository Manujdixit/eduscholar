import express from "express";
import {
  searchUniversities,
  getAffordableUniversities,
} from "../controllers/university.controller.js";

const router = express.Router();

// Search universities
router.get("/search", searchUniversities);

// Get affordable universities
router.get("/top-affordable", getAffordableUniversities);

export default router;
