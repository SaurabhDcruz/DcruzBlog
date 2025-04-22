export interface Author {
  id: string
  name: string
  avatar: string
  title: string
  bio?: string
  articleCount?: number
  followers?: number
}

export interface CommentReply {
  id: string
  author: Author
  text: string
  date: string
  likes: number
}

export interface Comment {
  id: string
  articleId?: string
  author: Author
  text: string
  date: string
  likes: number
  replies?: CommentReply[]
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  author: Author
  date: string
  content: {
    heading?: string
    text: string
  }[]
}
