import type React from "react";
import { useState, useEffect } from "react";
import type { Article } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  category?: string;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, category }) => {
  const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);

    const timer = setTimeout(() => {
      setVisibleArticles(articles);
      setAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [articles, category]);

  return (
    <section className="w-full py-8 md:py-12 ">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700 ease-in-out ${
          animating
            ? "opacity-0 scale-95 translate-y-6"
            : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        {visibleArticles.map((article, index) => (
          <div
            key={article.id}
            className={`bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 animate-fade-in`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
              animationDuration: "0.6s",
            }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;