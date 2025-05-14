"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useUniversitySearch } from "@/hooks/useUniversitySearch";
import Link from "next/link";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { results, loading, error, search } = useUniversitySearch();

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

      {!loading && results.length === 0 && !error && (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-700">
            No results found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching with different keywords or browse our university
            listings
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((university, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* <Link href={`/university/${university.id}`}> */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {university.name}
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Stream:</span>{" "}
                  {university.stream}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span>{" "}
                  {university.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Annual Fees:</span> $
                  {university.fees.toLocaleString()}
                </p>
              </div>
              <div className="mt-4 text-blue-600 hover:text-blue-800">
                Learn more →
              </div>
            </div>
            {/* </Link> */}
          </Card>
        ))}
      </div>
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
