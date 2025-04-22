"use client";

import type React from "react";
import type { Article } from "../types";
import CategoryBadge from "./CategoryBadge";
import AuthorAvatar from "./AuthorAvatar";
import {
  Clock,
  Share2,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

interface ArticleContentProps {
  article: Article;
}

const shareOptions: [string, LucideIcon][] = [
  ["Facebook", Facebook],
  ["Twitter", Twitter],
  ["LinkedIn", Linkedin],
];

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Link copied to clipboard!");
  };

  return (
    <article className="max-w-3xl mx-auto px-1 sm:px-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={article.category} />
          <span className="text-sm text-gray-400">• over 1 year ago</span>
        </div>

        <h1 className="md:text-4xl text-title-md font-bold tracking-tight text-gray-900 mb-4 leading-snug">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>

        {/* Author & Action Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 gap-3 sm:gap-0">
          {/* Author Info */}
          <div className="flex items-center gap-2">
            <AuthorAvatar author={article.author} />
            <span>•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" /> 5 min read
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <div className="flex flex-wrap items-center gap-2">
              {["Like", "Comment", "Save"].map((label) => (
                <button
                  key={label}
                  onClick={() => {}}
                  className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
                  aria-label={label}
                  title={label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {label === "Like" && (
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    )}
                    {label === "Comment" && (
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    )}
                    {label === "Save" && (
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    )}
                  </svg>
                </button>
              ))}

              {/* Share Dropdown */}
              <div className="relative group">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
                  title="Share"
                >
                  <Share2 size={18} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-10">
                  <div className="py-1">
                    <button
                      onClick={copyLink}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Copy size={14} className="mr-2" /> Copy link
                    </button>
                    {shareOptions.map(([name, Icon]) => (
                      <a
                        key={name}
                        href={
                          name === "Facebook"
                            ? `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                window.location.href
                              )}`
                            : name === "Twitter"
                            ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                window.location.href
                              )}&text=${encodeURIComponent(article.title)}`
                            : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                window.location.href
                              )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Icon size={14} className="mr-2" /> {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {article.coverImage && (
        <div className="relative mb-12 group">
          {/* Image Container with Parallax Effect */}
          <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl ">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>

          {/* Article Title with Animation */}
          <div className="absolute bottom-6 left-6 text-white font-bold text-xl sm:text-2xl md:text-4xl transition-all duration-500 transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-8 translate-y-4">
            <div className="flex items-center gap-2">
              <span>{article.title}</span>
            </div>
          </div>

          {/* Optional Parallax Effect */}
          <div className="absolute inset-0 bg-transparent group-hover:scale-105 group-hover:brightness-110"></div>
        </div>
      )}

      {/* Article Body */}
      <div className="prose prose-lg max-w-none text-gray-800">
        {article.content.map((section, index) => (
          <div key={index} className="mb-10">
            {section.heading && (
              <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            )}
            <p className="leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>

      {/* Footer Share & Feedback */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          {/* Share */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Share this article</p>
            <div className="flex items-center gap-2">
              {shareOptions.map(([name, Icon]) => (
                <a
                  key={name}
                  href={
                    name === "Facebook"
                      ? `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`
                      : name === "Twitter"
                      ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(article.title)}`
                      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  title={name}
                >
                  <Icon size={16} />
                </a>
              ))}
              <button
                onClick={copyLink}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                title="Copy link"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>

          {/* Feedback */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Was this helpful?</p>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 text-sm bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition">
                Yes
              </button>
              <button className="px-4 py-1.5 text-sm bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;