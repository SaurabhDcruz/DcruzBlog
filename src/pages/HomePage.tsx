import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FeaturedPost from "../components/FeaturedPost";
import CategoryTabs from "../components/CategoryTabs";
import ArticleGrid from "../components/ArticleGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import { useArticles } from "../context/ArticleContext";


const HomePage: React.FC = () => {
  const location = useLocation();
  const { articles, loading } = useArticles();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    const searchParam = params.get("search");

    setActiveCategory(categoryParam || "all");
    setSearchQuery(searchParam || "");
  }, [location.search]);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" ||
      article.category.toLowerCase() === activeCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.length > 0 ? articles[0] : null;

  const articlesToDisplay = filteredArticles
    .filter((article) => article.id !== featuredArticle?.id)
    .slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const searchParams = new URLSearchParams(location.search);
    query ? searchParams.set("search", query) : searchParams.delete("search");
    window.history.pushState(
      {},
      "",
      `${location.pathname}?${searchParams.toString()}`
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl">Discover Insightful Articles</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-title-md">
          Stay updated with the latest trends, expert opinions, and in-depth
          analysis.
        </p>
      </div>
      {/* Search */}
      <div className="mb-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Featured */}
      {!searchQuery && featuredArticle && (
        <div className="mb-16 animate-fade-in">
          <FeaturedPost article={featuredArticle} />
        </div>
      )}

      {/* Latest Articles */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Latest Articles
        </h2>

        <div className="mb-8">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : articlesToDisplay.length > 0 ? (
          <>
            <div className="animate-fade-in">
              <ArticleGrid
                articles={articlesToDisplay}
                category={activeCategory}
              />
            </div>

            <div className="flex justify-center mt-8 sticky bottom-0  py-4 z-10">
              <LoadMoreButton
                onClick={handleLoadMore}
                loading={loading}
                hasMore={visibleCount < filteredArticles.length - 1}
              />
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
