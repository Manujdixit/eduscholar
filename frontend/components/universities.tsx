"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "MBA",
  "Engineering",
  "Data Science",
  "Law",
  "Medicine",
  "Social Science",
  "Business Analytics",
  "Artificial Intelligence",
];

const universities = [
  {
    name: "Edith Cowan University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
  {
    name: "Bond University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
  {
    name: "Curtin University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
  {
    name: "Flinders University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
  {
    name: "La Trobe University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
  {
    name: "Monash University",
    logo: "/placeholder.svg?height=60&width=60",
    address: "270 Joondalup Drive, Joondalup WA 6027, Australia",
    tuition: "$18,000/year",
    prPathway: "Yes",
    intakes: "Feb, July, Nov",
    courses: "40+",
  },
];

export default function UniversitiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={uni.logo || "/placeholder.svg"}
                    alt={uni.name}
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-blue-800">{uni.name}</h3>
                    <p className="text-sm text-gray-500">{uni.address}</p>
                  </div>
                </div>

                <div className="bg-orange-100 p-2 rounded-md mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-orange-800">
                      Tuitions Start From
                    </span>
                    <span className="font-bold text-orange-500">
                      {uni.tuition}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">PR Pathway:</p>
                    <p className="font-medium">{uni.prPathway}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Intakes:</p>
                    <p className="font-medium">{uni.intakes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Courses:</p>
                    <p className="font-medium">{uni.courses}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full text-blue-800 border-blue-800 hover:bg-blue-50"
                >
                  Check Transfer Options
                </Button>
              </div>
            </div>
          ))}
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
