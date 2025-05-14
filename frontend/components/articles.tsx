"use client";
import { useArticles } from "@/hooks/useArticles";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesSection() {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-800">Recent</span>{" "}
            <span className="text-orange-500">Articles</span>
          </h2>
          <div className="text-center">Loading articles...</div>
        </div>
      </section>
    );
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-blue-800">Recent</span>{" "}
          <span className="text-orange-500">Articles</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-[#F6F6F7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                {/* <Image
                  src={article.image || "/placeholder.svg?height=200&width=300"}
                  alt={article.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{article.category || "GENERAL"}</span>
                  <span className="mx-2">•</span>
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
                <h3 className="font-bold text-lg text-blue-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article._id}`}
                  className="text-orange-500 font-medium text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
