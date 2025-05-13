import express from "express";
import { getRecentArticles } from "../controllers/articles.controller.js";

const router = express.Router();

// Get recent articles
router.get("/recent", getRecentArticles);

export default router;
