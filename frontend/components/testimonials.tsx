"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aamani Majumdar",
    role: "Marketing Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: false,
  },
  {
    id: 2,
    name: "Steven John",
    role: "Marketing Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: false,
  },
  {
    id: 3,
    name: "Sarah L",
    role: "Marketing Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: true,
  },
  {
    id: 4,
    name: "Vinay Rattan",
    role: "Marketing Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: false,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(testimonials.length - 3, currentIndex + 1));
  };

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            What Students <span className="text-orange-500">Say!</span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - 3}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-gray-800 rounded-lg p-6 relative"
            >
              <div className="mb-4">
                <span className="text-5xl text-gray-200">"</span>
                <p className="text-gray-600 relative -mt-6 pl-4">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center mt-4">
                <div className="relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  {testimonial.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                      <Play size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
