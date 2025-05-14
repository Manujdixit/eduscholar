import Testimonial from "../models/testimonials.js";

// Get testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ rating: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    console.error("Testimonials error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching testimonials",
      error: error.message,
    });
  }
};
