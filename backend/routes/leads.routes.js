import express from "express";
import { captureLead } from "../controllers/leads.controller.js";

const router = express.Router();

// Capture lead
router.post("/", captureLead);

export default router;
