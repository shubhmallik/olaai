"use client"

import { useState } from "react"
import { BlogListing } from "./blog-listing"
import { BlogPostDetail } from "./blog-post-detail"

interface BlogProps {
  onBack?: () => void
}

export function Blog({ onBack }: BlogProps) {
  const [currentView, setCurrentView] = useState<"listing" | "detail">("listing")
  const [currentSlug, setCurrentSlug] = useState<string>("")

  const handleViewPost = (slug: string) => {
    setCurrentSlug(slug)
    setCurrentView("detail")
  }

  const handleBackToListing = () => {
    setCurrentView("listing")
  }

  if (currentView === "detail") {
    return <BlogPostDetail slug={currentSlug} onBack={handleBackToListing} onViewPost={handleViewPost} />
  }

  return <BlogListing onBack={onBack} onViewPost={handleViewPost} />
}
