import type React from "react"
import { Link } from "react-router-dom"
import type { Article } from "../types"
import CategoryBadge from "./CategoryBadge"
import AuthorAvatar from "./AuthorAvatar"
import { CalendarDays } from "lucide-react"

interface FeaturedPostProps {
  article: Article
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ article }) => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center tracking-tight">
        🌟 Featured Article
      </h2>

      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl transition-shadow hover:shadow-2xl duration-300 animate-fade-in group">
        <div className="flex flex-col md:flex-row">
          {/* Cover Image */}
          <div className="md:w-1/2 relative overflow-hidden">
            <Link to={`/article/${article.slug}`} className="block h-full">
              <img
                src={article.coverImage || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-72 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <CategoryBadge category={article.category} />
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                  <span>Over 1 year ago</span>
                </div>
              </div>

              {/* Title */}
              <Link to={`/article/${article.slug}`}>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-gray-700 text-base md:text-lg mb-6 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>

              {/* CTA */}
              <Link
                to={`/article/${article.slug}`}
                className="inline-block mt-2 text-primary font-semibold text-sm uppercase tracking-wide hover:underline"
              >
                Read Full Article →
              </Link>
            </div>

            {/* Author */}
            <div className="flex items-center mt-8">
              <AuthorAvatar author={article.author} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost