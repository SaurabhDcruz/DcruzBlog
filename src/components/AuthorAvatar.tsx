import type React from "react"
import { Link } from "react-router-dom"
import type { Author } from "../types"

interface AuthorAvatarProps {
  author: Author
  showTitle?: boolean
}

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ author, showTitle = true }) => {
  return (
    <Link to={`/author/${author.id}`} className="flex items-center group">
      <img
        src={author.avatar || "/placeholder.svg"}
        alt={author.name}
        className="w-8 h-8 rounded-full object-cover border border-gray-200"
      />
      {showTitle && (
        <div className="ml-2">
          <p className="text-sm font-medium group-hover:text-primary transition-colors">{author.name}</p>
          <p className="text-xs text-gray-500">{author.title}</p>
        </div>
      )}
    </Link>
  )
}

export default AuthorAvatar