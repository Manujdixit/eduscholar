"use client";
import { useUniversity } from "@/hooks/useUniversity";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function UniLayout({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  let { college, loading, error } = useUniversity(Number(id));

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!college) return <div>No college found</div>;
  console.log(college);

  return (
    <div className="bg-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="/transfer.svg" // Background image
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />

        {/* University Logo - centered bottom */}
        <div className="container">
          <div className="absolute -bottom-20  transform -translate-x-1/2 z-10">
            <div className="w-40 h-40 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-lg border border-gray-300">
              <Image
                src="/benefit7.svg" // Logo image
                alt="University Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* University Name and Address */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex">
        <div className="">
          <h1 className="text-2xl font-bold text-blue-800 ">
            {college?.college_name}
          </h1>
          <p className="text-gray-600 mt-2">{college?.location}</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium flex items-center ml-auto">
          Enquire Now
          <Image
            src="/logo-button.svg"
            alt="Icon"
            width={40}
            height={40}
            className="ml-2"
          />
        </Button>
      </div>
    </div>
  );
}

export default UniLayout;
