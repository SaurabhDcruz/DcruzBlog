import type React from "react";
import { useParams } from "react-router-dom";
import AuthorProfile from "../components/AuthorProfile";
import AuthorArticles from "../components/AuthorArticles";
import { useArticles } from "../context/ArticleContext";

const AuthorPage: React.FC = () => {
  const { authorId } = useParams<{ authorId: string }>();
  const { articles, authors } = useArticles();
  // Find the author by ID
  const author = authors.find((author) => author.id === authorId);
  if (!author) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section className="section-y-gutter min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12 bg-gradient-to-r from-blue-100 via-purple-200 to-indigo-300 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Author Profile Section */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
            <AuthorProfile author={author} />
          </div>

          {/* Articles Section */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-start sm:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-primary mb-8 transform transition duration-500 ease-in-out hover:scale-105 hover:from-primary hover:to-violet-600 drop-shadow-lg tracking-tight">
              ✍️ Articles by{" "}
              <span className="decoration-primary underline-offset-4">
                {author.name}
              </span>
            </h2>
            <AuthorArticles articles={articles} authorId={author.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorPage;