import type React from "react"
import type { Author } from "../types"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

interface AuthorProfileProps {
  author: Author
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <img
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover border border-gray-200 mb-4"
        />
        <h2 className="text-xl font-bold">{author.name}</h2>
        <p className="text-gray-500 mb-4">{author.title}</p>

        <p className="text-gray-700 mb-6">{author.bio}</p>

        <div className="flex space-x-4 mb-6">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 w-full gap-4 text-center">
          <div className="bg-gray-50 rounded-md p-3">
            <p className="text-2xl font-bold">{author.articleCount}</p>
            <p className="text-gray-500 text-sm">Articles</p>
          </div>
          <div className="bg-gray-50 rounded-md p-3">
            <p className="text-2xl font-bold">{author.followers}</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
        </div>

        <button className="mt-6 w-full py-2 bg-primary/80 text-white rounded-md hover:bg-primary transition-colors">
          Follow Author
        </button>
      </div>
    </div>
  )
}

export default AuthorProfile