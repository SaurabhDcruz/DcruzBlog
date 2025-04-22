import type React from "react"
import { Link } from "react-router-dom"
import type { Article } from "../types"
import CategoryBadge from "./CategoryBadge"
import AuthorAvatar from "./AuthorAvatar"

interface ArticleCardProps {
  article: Article
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 transform hover:scale-100">
      {/* Image Section */}
      <Link to={`/article/${article.slug}`} className="block overflow-hidden">
        <img
          src={article.coverImage || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-56 sm:h-72 object-cover transition-all duration-500"
        />
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col space-y-4">
        {/* Meta Section */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <CategoryBadge category={article.category} />
          <span>over 1 year ago</span>
        </div>

        {/* Title */}
        <Link to={`/article/${article.slug}`}>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white transition-all duration-300 hover:text-primary">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 transition-all duration-300 hover:text-gray-800 dark:hover:text-white">
          {article.excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center mt-auto">
          <AuthorAvatar author={article.author} />
        </div>
      </div>
    </div>
  )
}

export default ArticleCard