"use client";

import { useUniversity } from "@/hooks/useUniversity";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Universitytabs from "@/components/university/Universitytabs";

const indexes = [
  "info",
  "courses",
  "departments",
  "careers",
  "ranking",
  "fees",
  "scholarships",
  "reviews",
  "faqs",
];

function CollegePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  const { college, error, loading } = useUniversity(Number(id));

  console.log(college);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!college) return <div>No college found</div>;

  return (
    <div className="min-h-screen container mx-auto px-4 py-6">
      <Tabs defaultValue="info" className="">
        <TabsList className="w-full justify-start gap-6 mb-6">
          {indexes.map((index) => (
            <TabsTrigger key={index} value={index}>
              {index.toUpperCase()}
            </TabsTrigger>
          ))}
        </TabsList>
        {indexes.map((index) => (
          <TabsContent key={index} value={index}>
            <div className="p-6">
              <Universitytabs tab={index} id={id} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default CollegePage;
