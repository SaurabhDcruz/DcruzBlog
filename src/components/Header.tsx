"use client"

import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import Logo from "./Logo"

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/?category=technology" className="text-sm font-medium hover:text-primary transition-colors">
              Technology
            </Link>
            <Link to="/?category=lifestyle" className="text-sm font-medium hover:text-primary transition-colors">
              Lifestyle
            </Link>
            <Link to="/?category=business" className="text-sm font-medium hover:text-primary transition-colors">
              Business
            </Link>
            <Link to="/?category=culture" className="text-sm font-medium hover:text-primary transition-colors">
              Culture
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:w-64 h-9 pl-3 pr-10 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-primary"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header