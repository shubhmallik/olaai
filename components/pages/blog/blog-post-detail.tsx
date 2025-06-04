"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Shield,
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link,
} from "lucide-react";
import { mockBlogPosts } from "@/data/blog-posts";
import { BlogPostCard } from "@/components/pages/blog/blog-post-card";

interface BlogPostDetailProps {
  slug: string;
  onBack: () => void;
  onViewPost: (slug: string) => void;
}

export function BlogPostDetail({
  slug,
  onBack,
  onViewPost,
}: BlogPostDetailProps) {
  // Find the current post
  const post = mockBlogPosts.find((p) => p.slug === slug);

  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Button onClick={onBack}>Back to Blog</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = mockBlogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-800">
                OlaAI.com
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-slate-800 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
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
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-slate-600">
                    {post.author.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {/* This would be the actual blog content, rendered from markdown or HTML */}
            <p className="lead">{post.excerpt}</p>

            <h2>Introduction</h2>
            <p>
              In today's digital landscape, misinformation spreads faster than
              ever before. Social media platforms, messaging apps, and even
              traditional news outlets can sometimes propagate false or
              misleading information, either inadvertently or deliberately.
            </p>

            <p>
              At OLAAI, we're committed to combating this problem through
              advanced artificial intelligence and machine learning techniques.
              Our research team continuously works to improve our fact-checking
              algorithms and develop new methods for detecting misinformation.
            </p>

            <h2>Key Findings</h2>
            <p>
              Our recent analysis of misinformation trends has revealed several
              important patterns:
            </p>

            <ul>
              <li>
                Health-related misinformation continues to be the most prevalent
                category
              </li>
              <li>
                Visual misinformation (manipulated images and videos) is
                increasing at an alarming rate
              </li>
              <li>
                Cross-platform spread of false claims has accelerated in the
                past six months
              </li>
              <li>
                Automated fact-checking can identify up to 78% of false claims
                within seconds
              </li>
            </ul>

            <h2>Methodology</h2>
            <p>
              Our research methodology combines natural language processing,
              computer vision, and network analysis to identify and track
              misinformation across the web. We analyze millions of social media
              posts, news articles, and other online content daily to identify
              emerging trends and patterns.
            </p>

            <blockquote>
              "The future of fact-checking lies in the combination of advanced
              AI and human expertise. Neither can be fully effective without the
              other." — Dr. Sarah Chen, CEO & Co-Founder
            </blockquote>

            <h2>Implications</h2>
            <p>
              The implications of these findings are significant for
              journalists, policymakers, and the general public. By
              understanding how misinformation spreads, we can develop more
              effective strategies for combating it.
            </p>

            <p>
              Our research suggests that early intervention is crucial. The
              first few hours after a false claim begins to spread are the most
              critical for effective fact-checking and correction.
            </p>

            <h2>Conclusion</h2>
            <p>
              As we continue to refine our fact-checking technology, we remain
              committed to transparency, accuracy, and accessibility. We believe
              that everyone deserves access to reliable information, and we're
              working tirelessly to make that a reality.
            </p>

            <p>
              Stay tuned for more updates from our research team as we continue
              to explore new frontiers in automated fact-checking and
              misinformation detection.
            </p>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-3">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Link className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                  />
                  <AvatarFallback className="text-xl">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {post.author.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {post.author.role}
                  </p>
                  <p className="text-slate-600 mb-4">{post.author.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard
                key={relatedPost.slug}
                post={relatedPost}
                onViewPost={onViewPost}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Enjoyed this article?
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Subscribe to our newsletter for more research insights and
                    fact-checking tips.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md border border-slate-300 flex-1"
                  />
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
