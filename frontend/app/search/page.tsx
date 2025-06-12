"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useComprehensiveSearch } from "@/hooks/useComprehensiveSearch";
import { SearchResultsLoadingSkeleton } from "@/components/skeleton/search-skeleton";
import {
  GraduationCap,
  BookOpen,
  FileText,
  MapPin,
  Star,
  Clock,
} from "lucide-react";
import Link from "next/link";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { results, loading, error, search, getTotalResults } =
    useComprehensiveSearch();

  useEffect(() => {
    if (query) {
      search(query);
    }
  }, [query, search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {loading ? "Searching..." : `Search Results for "${query}"`}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-4 mb-6">
          {error}
        </div>
      )}

      {!loading && getTotalResults() === 0 && !error && (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-700">
            No results found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching with different keywords or browse our listings
          </p>
        </div>
      )}

      {loading ? (
        <SearchResultsLoadingSkeleton />
      ) : (
        <div className="space-y-8">
          {/* Colleges Section */}
          {results.colleges.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="text-blue-600" size={24} />
                <h2 className="text-xl font-semibold text-gray-800">
                  Colleges ({results.colleges.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.colleges.map((college) => (
                  <Card
                    key={`college-${college.id}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">
                        {college.college_name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-gray-400" />
                          <p className="text-gray-600">{college.location}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star size={16} className="text-yellow-500" />
                          <p className="text-gray-600">
                            Rating: {college.rating}
                          </p>
                        </div>
                        <p className="text-gray-600">
                          <span className="font-medium">Score:</span>{" "}
                          {college.score}
                        </p>
                      </div>
                      <div className="mt-4 text-blue-600 hover:text-blue-800">
                        Learn more →
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Courses Section */}
          {results.courses.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="text-green-600" size={24} />
                <h2 className="text-xl font-semibold text-gray-800">
                  Courses ({results.courses.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.courses.map((course) => (
                  <Card
                    key={`course-${course.id}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">
                        {course.course_name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-400" />
                          <p className="text-gray-600">
                            Duration:{" "}
                            {Math.round(course.duration_in_months / 12)} years
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star size={16} className="text-yellow-500" />
                          <p className="text-gray-600">
                            Rating: {course.rating}
                          </p>
                        </div>
                        <p className="text-gray-600">
                          <span className="font-medium">Score:</span>{" "}
                          {course.score}
                        </p>
                      </div>
                      <div className="mt-4 text-green-600 hover:text-green-800">
                        View course →
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {results.articles.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="text-purple-600" size={24} />
                <h2 className="text-xl font-semibold text-gray-800">
                  Articles ({results.articles.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.articles.map((article) => (
                  <Card
                    key={`article-${article.id}`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-purple-800 flex-1">
                          {article.title}
                        </h3>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-2">
                          {article.silos}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {article.meta_desc}
                      </p>
                      {/* <p className="text-gray-500 text-xs mb-4">
                        Published:{" "}
                        {new Date(article.createdAt).toLocaleDateString()}
                      </p> */}
                      <div className="text-purple-600 hover:text-purple-800">
                        Read article →
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense
      fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}
    >
      <SearchResultsContent />
    </Suspense>
  );
}
