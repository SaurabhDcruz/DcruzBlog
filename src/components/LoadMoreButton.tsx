"use client"

import type React from "react"

interface LoadMoreButtonProps {
  onClick: () => void
  loading?: boolean
  hasMore: boolean
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, loading = false, hasMore }) => {
  if (!hasMore) return null

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={onClick}
        disabled={loading}
        className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-sm shadow-inner hover:from-blue-600 hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 active:scale-95"
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.375 0 0 5.375 0 12h4zm2 5.29A8 8 0 014 12H0c0 3.04 1.14 5.82 3 7.94l3-2.65z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>Load More</span>
            <svg
              className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </div>
  )
}

export default LoadMoreButton