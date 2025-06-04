"use client"

import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ChevronRight, Clock } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogPostCardProps {
  post: BlogPost
  onViewPost: (slug: string) => void
}

export function BlogPostCard({ post, onViewPost }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video bg-slate-200 relative overflow-hidden">
        <img
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-4 left-4">{post.category}</Badge>
      </div>
      <CardHeader className="p-6 flex-1">
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
      </CardHeader>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            <AvatarFallback>
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={() => onViewPost(post.slug)}>
          Read More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
