"use client";

import { useTopArticles } from "@/hooks/useTopArticles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Article } from "@/types/search";

function StudentResources() {
  const { articles, loading, error } = useTopArticles();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-800">Recent</span>{" "}
            <span className="text-orange-500">Articles</span>
          </h2>
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  console.log(articles);

  return (
    <div>
      {/* 2 blogs */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          {articles?.slice(0, 2).map((article: Article, index: number) => (
            <div
              key={article.id}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md md:shadow-none md:hover:shadow-none transition-shadow mb-6`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 h-64 md:h-auto">
                <Image
                  src={article.image || "/transfer3.svg"} // Replace with real image path
                  alt={article.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 p-6">
                <div className="flex items-center text-sm font-normal text-gray-500 mb-2">
                  <span>
                    {new Date(article.createdAt)
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </span>
                </div>
                <h3 className="font-medium text-4xl  text-blue-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-lg font-normal mb-4 truncate">
                  {article.content}
                </p>
                <Link
                  href={`/student-resources/${article.id}`}
                  className="text-orange-500 font-medium text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudentResources;
