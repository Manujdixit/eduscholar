import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Top 10 Cheapest Unis in Australia",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image: "/placeholder.svg?height=200&width=300",
    category: "UNIVERSITY",
    date: "MAY 10, 2023",
  },
  {
    id: 2,
    title: "How to Transfer from Diploma to Bachelor",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image: "/placeholder.svg?height=200&width=300",
    category: "EDUCATION",
    date: "MAY 8, 2023",
  },
  {
    id: 3,
    title: "Does Transferring Affect Your Visa?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam tincidunt.",
    image: "/placeholder.svg?height=200&width=300",
    category: "VISA",
    date: "MAY 5, 2023",
  },
];

export default function ArticlesSection() {
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
              key={article.id}
              className="bg-[#F6F6F7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{article.category}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-bold text-lg text-blue-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <Link
                  href="#"
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
