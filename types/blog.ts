export interface Author {
  name: string
  role: string
  avatar: string
  bio: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: Author
  category: string
  tags: string[]
  readTime: number
}
