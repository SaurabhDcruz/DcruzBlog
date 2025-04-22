import type React from "react"
import { Link } from "react-router-dom"
import type { Article } from "../types"
import CategoryBadge from "./CategoryBadge"

interface RelatedArticlesProps {
  articles: Article[]
  currentArticleId: string
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  currentArticleId,
}) => {
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, 3)

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-8 text-gray-900">Related Articles</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            to={`/article/${article.slug}`}
            key={article.id}
            className="group relative flex flex-col border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <img
              src={article.coverImage || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Content */}
            <div className="p-4">
              {/* Category Badge */}
              <CategoryBadge key={article.id} category={article.category} />
              <h4 className="text-base font-semibold text-gray-900 my-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {article.title}
              </h4>
              <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                <span>over 1 year ago</span>
                <span className="inline-flex items-center gap-1 text-primary hover:underline transition-all">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles