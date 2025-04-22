import type React from "react";
import { useEffect } from "react";
import ArticleContent from "../components/ArticleContent";
import RelatedArticles from "../components/RelatedArticles";
import Comments from "../components/Comments";
import { useArticles } from "../context/ArticleContext";
import { useNavigate, useParams } from "react-router-dom";

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { articles, comments } = useArticles();

  // Find the article by slug
  const article = articles.find((article) => article.slug === slug);

  // If article not found, redirect to home
  useEffect(() => {
    if (!article && articles.length > 0) {
      navigate("/");
    }
  }, [article, articles, navigate]);

  // Filter comments for this article
  const articleComments = comments.filter(
    (comment) => comment.articleId === article?.id
  );

  if (!article) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <ArticleContent article={article} />
      <RelatedArticles
        articles={articles.filter((a) => a.category === article.category)}
        currentArticleId={article.id}
      />
      <Comments comments={articleComments} />
    </div>
  );
};

export default ArticlePage;