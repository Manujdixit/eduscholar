const Lead = require("../models/leads.js");

// Capture lead
export const captureLead = async (req, res) => {
  try {
    const { fname, lname, email, mobile, message } = req.body;

    // Validate required fields
    if (!fname || !email || !mobile) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create new lead
    const lead = await Lead.create({
      fname,
      lname,
      email,
      mobile,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead captured successfully",
      data: lead,
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    // Handle duplicate email/mobile
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted a request",
      });
    }
    res.status(500).json({
      success: false,
      message: "Error capturing lead",
      error: error.message,
    });
  }
};
