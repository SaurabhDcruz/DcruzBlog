"use client"

import type React from "react"
import { useParams } from "react-router-dom"
import AuthorProfile from "../components/AuthorProfile"
import AuthorArticles from "../components/AuthorArticles"
import { useArticles } from "../context/ArticleContext"

const AuthorPage: React.FC = () => {
  const { authorId } = useParams<{ authorId: string }>()
  const { articles, authors } = useArticles()

  // Find the author by ID
  const author = authors.find((author) => author.id === authorId)

  if (!author) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AuthorProfile author={author} />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Articles by {author.name}</h2>
          <AuthorArticles articles={articles} authorId={author.id} />
        </div>
      </div>
    </div>
  )
}

export default AuthorPage
