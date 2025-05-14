"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUniversities } from "@/hooks/useUniversities";

const categories = [
  "All",
  "Computer Science",
  "Software Engineering",
  "Computer Engineering",
  "Information Technology",
  "Data Science",
  "Social Science",
  "Business Analytics",
  "Artificial Intelligence",
];

export default function UniversitiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { universities, loading, error } = useUniversities(activeCategory);

  if (error) {
    return (
      <div className="py-16 text-center text-red-600">
        Error loading universities: {error}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-800">Top Affordable</span>{" "}
          <span className="text-orange-500">Universities</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* University Cards */}
        <div className="flex justify-center items-center">
          {loading ? (
            <div className="text-center text-gray-600">
              Loading universities...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {universities.map((uni, index) => (
                <div
                  key={uni.name + index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {/* <div className="rounded-full overflow-hidden mr-4">
                        <Image
                          src="/placeholder.svg"
                          alt={uni.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div> */}
                      <div>
                        <h3 className="font-bold text-blue-800 text-lg">
                          {uni.name}
                        </h3>
                        <p className="text-sm text-gray-500">{uni.location}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center rounded-sm overflow-hidden bg-orange-50 mb-2">
                      <div className="text-orange-500 p-2 font-normal">
                        Tuitions Start From
                      </div>
                      <div className="bg-orange-400 text-white p-2 font-medium">
                        ${uni.fees.toLocaleString()}/year
                      </div>
                    </div>

                    <div className="flex flex-col text-sm">
                      <div className="grid grid-cols-[100px_1fr] gap-1">
                        <p className="text-gray-500">Stream:</p>
                        <p className="font-medium">{uni.stream}</p>

                        <p className="text-gray-500">Location:</p>
                        <p className="font-medium">{uni.location}</p>

                        <p className="text-gray-500">Score:</p>
                        <p className="font-medium">
                          {uni.affordabilityScore}/10
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 bg-gray-100 hover:bg-gray-200 font-medium"
                  >
                    Check Transfer Options
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Button className="bg-blue-800 hover:bg-blue-900 text-white">
            View All Universities
          </Button>
        </div>
      </div>
    </section>
  );
}
