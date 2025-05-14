import Article from "../models/articles.js";

// Get recent articles
export const getRecentArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    console.error("Articles error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching recent articles",
      error: error.message,
    });
  }
};
