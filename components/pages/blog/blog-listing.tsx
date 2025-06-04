"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Shield,
  Search,
  Calendar,
  ChevronRight,
  Tag,
  Clock,
  Filter,
  ArrowRight,
} from "lucide-react";
import { BlogPostCard } from "@/components/pages/blog/blog-post-card";
import { mockBlogPosts } from "@/data/blog-posts";

interface BlogListingProps {
  onBack?: () => void;
  onViewPost: (slug: string) => void;
}

// Categories for blog posts
const categories = [
  { id: "all", name: "All Posts" },
  { id: "company", name: "Company News" },
  { id: "research", name: "Research" },
  { id: "industry", name: "Industry" },
  { id: "tutorials", name: "Tutorials" },
];

// Tags for filtering
const popularTags = [
  "AI Ethics",
  "Misinformation",
  "Research",
  "Product Updates",
  "Case Studies",
  "Media Literacy",
  "Technology",
];

export function BlogListing({ onBack, onViewPost }: BlogListingProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search query, category, and tag
  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Featured posts (first 3 posts)
  const featuredPosts = mockBlogPosts.slice(0, 3);

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      setSelectedCategory("all");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">
                  OlaAI.com
                </span>
                <span className="text-sm  text-slate-800">
                  Online Lie Analyser
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            OlaAI Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights on fact-checking, misinformation trends, and updates from
            our research team.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
                </CardHeader>
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                      />
                      <AvatarFallback>
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {post.author.name}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewPost(post.slug)}
                  >
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">Filter</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="hidden md:inline">Tags</span>
              </Button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs
          defaultValue="all"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              {/* All Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard
                    key={post.slug}
                    post={post}
                    onViewPost={onViewPost}
                  />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-600 mb-4">
                    No articles found matching your criteria.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedTag(null);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button variant="outline" size="sm" className="w-10">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-10">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-10">
              3
            </Button>
            <span className="mx-2">...</span>
            <Button variant="outline" size="sm" className="w-10">
              10
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-slate-600 mb-4">
                    Subscribe to our newsletter for the latest research insights
                    and fact-checking tips.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Enter your email" className="bg-white" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
