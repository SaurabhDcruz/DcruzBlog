"use client"

import type React from "react"
import { useState } from "react"
import type { Article } from "../types"
import ArticleGrid from "./ArticleGrid"

interface AuthorArticlesProps {
  articles: Article[]
  authorId: string
}

const AuthorArticles: React.FC<AuthorArticlesProps> = ({ articles, authorId }) => {
  const [activeTab, setActiveTab] = useState("all")

  // Filter articles by the author
  const authorArticles = articles.filter((article) => article.author.id === authorId)

  // Filter articles based on the active tab
  const filteredArticles = (() => {
    if (activeTab === "all") return authorArticles
    if (activeTab === "popular") {
      // Sort by popularity (we'll use a random metric for demo)
      return [...authorArticles].sort(() => Math.random() - 0.5)
    }
    if (activeTab === "recent") {
      // Sort by date (newest first)
      return [...authorArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
    return authorArticles
  })()

  return (
    <div>
      {/* Tab Section with Animated Hover and Active State */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`tab ${activeTab === "all" ? "active" : ""} hover:text-primary-600 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            All Articles
          </button>
          <button
            onClick={() => setActiveTab("popular")}
            className={`tab ${activeTab === "popular" ? "active" : ""} hover:text-primary-600 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Popular
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`tab ${activeTab === "recent" ? "active" : ""} hover:text-primary-600 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Recent
          </button>
        </div>
      </div>

      {/* Display Articles */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <ArticleGrid articles={filteredArticles} />
      {/* </div> */}
    </div>
  )
}

export default AuthorArticles