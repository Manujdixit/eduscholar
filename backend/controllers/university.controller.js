const University = require("../models/university.js");

// Search universities API
export const searchUniversities = async (req, res) => {
  try {
    const { q, stream, minFees, maxFees, location } = req.query;

    // Build filter object
    const filter = {};
    if (q) {
      filter.name = { $regex: q, $options: "i" };
    }
    if (stream) {
      filter.stream = stream;
    }
    if (minFees || maxFees) {
      filter.fees = {};
      if (minFees) filter.fees.$gte = parseFloat(minFees);
      if (maxFees) filter.fees.$lte = parseFloat(maxFees);
    }
    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    const universities = await University.find(filter)
      .sort({ ranking: 1 })
      .select("name stream location fees ranking affordabilityScore")
      .limit(20);

    res.status(200).json({
      success: true,
      count: universities.length,
      data: universities,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({
      success: false,
      message: "Error searching universities",
      error: error.message,
    });
  }
};

// Get affordable universities by stream
export const getAffordableUniversities = async (req, res) => {
  try {
    const { stream } = req.query;
    const filter = {};

    if (stream) {
      filter.stream = stream;
    }

    const universities = await University.find(filter)
      .sort({ affordabilityScore: -1, fees: 1 })
      .select("name stream location fees affordabilityScore")
      .limit(10);

    res.status(200).json({
      success: true,
      count: universities.length,
      data: universities,
    });
  } catch (error) {
    console.error("Affordable universities error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching affordable universities",
      error: error.message,
    });
  }
};
