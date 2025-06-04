import type { BlogPost } from "@/types/blog";

// Mock authors
const authors = {
  sarah: {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Dr. Sarah Chen is the CEO and Co-Founder of OlaAI. With a PhD in Computer Science from Stanford, she has over 10 years of experience in AI and machine learning, specializing in natural language processing and misinformation detection.",
  },
  marcus: {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Marcus Rodriguez is the CTO and Co-Founder of OlaAI. Previously an engineering leader at Google, he specializes in building scalable AI systems and real-time data processing pipelines.",
  },
  aisha: {
    name: "Dr. Aisha Patel",
    role: "Head of AI Research",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Dr. Aisha Patel leads the AI research team at OlaAI. With a PhD in Computational Linguistics, she has published numerous papers on fact-checking algorithms and misinformation detection.",
  },
  james: {
    name: "James Thompson",
    role: "Head of Product",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "James Thompson is the Head of Product at OlaAI. A former journalist, he brings a unique perspective to our product development, focusing on user experience and practical applications of fact-checking technology.",
  },
};

// Mock blog posts
export const mockBlogPosts: BlogPost[] = [
  {
    slug: "misinformation-trends-2024",
    title: "Misinformation Trends in 2024: What Our Data Reveals",
    excerpt:
      "Our analysis of millions of fact-checks reveals emerging patterns in how misinformation spreads across platforms and demographics.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 28, 2024",
    author: authors.sarah,
    category: "research",
    tags: ["Misinformation", "Research", "Data Analysis", "Social Media"],
    readTime: 8,
  },
  {
    slug: "ai-ethics-fact-checking",
    title: "The Ethics of AI in Automated Fact-Checking",
    excerpt:
      "Exploring the ethical considerations and responsibilities when deploying AI systems for fact-checking at scale.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/8438958/pexels-photo-8438958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 20, 2024",
    author: authors.aisha,
    category: "research",
    tags: ["AI Ethics", "Research", "Technology", "Fact-Checking"],
    readTime: 12,
  },
  {
    slug: "introducing-ola-api",
    title: "Introducing the OlaAI API: Fact-Checking for Developers",
    excerpt:
      "We're excited to announce our new API that allows developers to integrate our fact-checking technology into their applications.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 15, 2024",
    author: authors.marcus,
    category: "company",
    tags: ["Product Updates", "API", "Developers", "Technology"],
    readTime: 5,
  },
  {
    slug: "visual-misinformation-detection",
    title: "Advances in Visual Misinformation Detection",
    excerpt:
      "How our new computer vision models can identify manipulated images and videos with unprecedented accuracy.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/8875643/pexels-photo-8875643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 10, 2024",
    author: authors.aisha,
    category: "research",
    tags: [
      "Computer Vision",
      "Research",
      "Technology",
      "Visual Misinformation",
    ],
    readTime: 10,
  },
  {
    slug: "media-literacy-schools",
    title: "OlaAI Partners with Schools to Promote Media Literacy",
    excerpt:
      "Our new educational initiative aims to teach students how to critically evaluate online information.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/7596913/pexels-photo-7596913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 5, 2024",
    author: authors.james,
    category: "company",
    tags: ["Education", "Media Literacy", "Partnerships", "Schools"],
    readTime: 6,
  },
  {
    slug: "fact-checking-election-season",
    title: "Preparing for Election Season: Scaling Fact-Checking Operations",
    excerpt:
      "How we're ramping up our systems to handle the increased demand for fact-checking during election periods.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 28, 2024",
    author: authors.marcus,
    category: "industry",
    tags: ["Elections", "Scaling", "Technology", "Politics"],
    readTime: 7,
  },
  {
    slug: "health-misinformation-study",
    title: "New Study: The Impact of Health Misinformation on Public Behavior",
    excerpt:
      "Our research team's findings on how health misinformation affects decision-making and public health outcomes.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/7715269/pexels-photo-7715269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 22, 2024",
    author: authors.sarah,
    category: "research",
    tags: ["Health", "Research", "Misinformation", "Public Health"],
    readTime: 9,
  },
  {
    slug: "fact-checking-workflow-guide",
    title: "A Step-by-Step Guide to Efficient Fact-Checking Workflows",
    excerpt:
      "Practical tips for journalists and researchers on how to streamline their fact-checking process using OlaAI.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/9035000/pexels-photo-9035000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 15, 2024",
    author: authors.james,
    category: "tutorials",
    tags: ["Tutorials", "Journalism", "Workflow", "Productivity"],
    readTime: 11,
  },
  {
    slug: "series-b-funding-announcement",
    title: "OlaAI Secures $15M in Series B Funding to Expand Global Reach",
    excerpt:
      "We're thrilled to announce our Series B funding round, led by Tech Ventures, to accelerate our international expansion.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/5912588/pexels-photo-5912588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 10, 2024",
    author: authors.sarah,
    category: "company",
    tags: ["Funding", "Company News", "Growth", "Investors"],
    readTime: 4,
  },
  {
    slug: "multilingual-fact-checking",
    title: "Breaking Language Barriers: Multilingual Fact-Checking at Scale",
    excerpt:
      "How our new language models enable accurate fact-checking across 25+ languages and cultural contexts.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/30917907/pexels-photo-30917907/free-photo-of-scrabble-tiles-forming-words-guide-and-news.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 5, 2024",
    author: authors.aisha,
    category: "research",
    tags: ["Languages", "Research", "Technology", "Global"],
    readTime: 8,
  },
  {
    slug: "misinformation-psychology",
    title: "The Psychology of Misinformation: Why We Believe False Claims",
    excerpt:
      "Understanding the cognitive biases and psychological factors that make us susceptible to misinformation.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "March 28, 2024",
    author: authors.james,
    category: "industry",
    tags: ["Psychology", "Research", "Misinformation", "Cognitive Bias"],
    readTime: 10,
  },
  {
    slug: "fact-checking-api-tutorial",
    title: "How to Integrate the OlaAI Fact-Checking API in Your Application",
    excerpt:
      "A technical tutorial on implementing our API to add real-time fact-checking capabilities to your platform.",
    content: "Full content would go here...",
    coverImage:
      "https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "March 20, 2024",
    author: authors.marcus,
    category: "tutorials",
    tags: ["API", "Developers", "Tutorial", "Integration"],
    readTime: 15,
  },
];
