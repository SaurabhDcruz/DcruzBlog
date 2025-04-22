"use client"

import type React from "react"
import { useNavigate, useLocation } from "react-router-dom"

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onCategoryChange }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleTabClick = (category: string) => {
    onCategoryChange(category)

    const searchParams = new URLSearchParams(location.search)
    if (category === "all") {
      searchParams.delete("category")
    } else {
      searchParams.set("category", category)
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    })
  }

  const categories = [
    { id: "all", label: "All" },
    { id: "technology", label: "Technology" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "business", label: "Business" },
    { id: "culture", label: "Culture" },
  ]

  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-4">
      <div className="flex gap-3 rounded-full bg-gray-100 p-2 shadow-inner w-max sm:w-full sm:justify-center mx-auto">
        {categories.map((category) => {
          const isActive = activeCategory === category.id
          return (
            <button
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                ${
                  isActive
                    ? "bg-white text-primary shadow-md"
                    : "text-gray-600 hover:text-primary/80 hover:bg-white/70"
                }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryTabs