"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search articles..." }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 pl-4 pr-12 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-gray-500 hover:text-primary"
      >
        <Search size={20} />
      </button>
    </form>
  )
}

export default SearchBar
