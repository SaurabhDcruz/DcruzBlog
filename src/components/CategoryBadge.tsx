import type React from "react";
import { Link } from "react-router-dom";

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getColor = () => {
    switch (category.toLowerCase()) {
      case "technology":
        return "bg-blue-100 text-blue-600";
      case "lifestyle":
        return "bg-green-100 text-green-600";
      case "business":
        return "bg-amber-100 text-amber-600";
      case "culture":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Link
      to={`?category=${category.toLowerCase()}`}
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getColor()}`}
    >
      {category}
    </Link>
  );
};

export default CategoryBadge;