"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Shield,
  Target,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react"

interface AboutProps {
  onBack?: () => void
}

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Stanford AI researcher with 10+ years in NLP and misinformation detection.",
    avatar: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer specializing in large-scale ML systems and real-time processing.",
    avatar: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of AI Research",
    bio: "PhD in Computational Linguistics, published researcher in fact-checking algorithms.",
    avatar: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Thompson",
    role: "Head of Product",
    bio: "Former journalist turned product leader, passionate about fighting misinformation.",
    avatar: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    twitter: "#",
  },
]

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description: "OLAAI was founded with a mission to democratize fact-checking through AI.",
  },
  {
    year: "2023",
    title: "Beta Launch",
    description: "Launched beta version with 1,000 early users and 85% accuracy rate.",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $5M Series A to expand team and improve AI models.",
  },
  {
    year: "2024",
    title: "Public Launch",
    description: "Launched publicly with 94% accuracy and 50+ trusted sources.",
  },
]

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Truth & Transparency",
    description: "We believe in radical transparency about our methods, sources, and limitations.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Accuracy First",
    description: "Every decision prioritizes accuracy and reliability over speed or convenience.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Accessibility",
    description: "Fact-checking should be free, fast, and available to everyone, everywhere.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Impact",
    description: "We're building tools to combat misinformation at a global scale.",
  },
]

const stats = [
  { label: "Fact Checks Completed", value: "2.5M+", icon: <Shield className="h-6 w-6" /> },
  { label: "Active Users", value: "150K+", icon: <Users className="h-6 w-6" /> },
  { label: "Accuracy Rate", value: "94%", icon: <Target className="h-6 w-6" /> },
  { label: "Countries Served", value: "50+", icon: <Globe className="h-6 w-6" /> },
]

export function About({ onBack }: AboutProps) {
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
              <span className="text-xl font-bold text-slate-800">OlaAI.com</span>
            </div>
          </div>
          <Button>
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About OLAAI</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            We're on a mission to democratize fact-checking and combat misinformation through cutting-edge AI technology
            that's accessible to everyone.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="px-4 py-2">
              Founded in 2022
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              San Francisco, CA
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Series A Funded
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3 text-blue-600">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                To democratize access to accurate, real-time fact-checking by leveraging advanced AI technology. We
                believe that everyone deserves access to truth, regardless of their technical expertise or resources.
                Our platform empowers individuals, journalists, and organizations to verify information quickly and
                reliably.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                A world where misinformation cannot thrive because everyone has instant access to fact-checking tools.
                We envision a future where AI-powered verification is seamlessly integrated into how we consume and
                share information, creating a more informed and truthful digital society.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4 text-blue-600">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-slate-300 mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                      <Badge variant="outline">{milestone.year}</Badge>
                    </div>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    {member.linkedin && (
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.twitter && (
                      <Button variant="ghost" size="sm">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.github && (
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TechCrunch Disrupt</h3>
                <p className="text-sm text-slate-600">Winner - Best AI Application 2023</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">MIT Technology Review</h3>
                <p className="text-sm text-slate-600">Featured in "35 Innovators Under 35"</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Knight Foundation</h3>
                <p className="text-sm text-slate-600">Grant Recipient - Media Innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact & Press */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="text-slate-600">hello@ola-ai.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Press & Media</h4>
                <p className="text-slate-600">press@ola-ai.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Partnerships</h4>
                <p className="text-slate-600">partnerships@ola-ai.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office</h4>
                <p className="text-slate-600">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Press & Media Kit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                Download our media kit for logos, product screenshots, and company information.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  Company Logos
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Product Screenshots
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Executive Bios
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Press Releases
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-slate-600 mb-6">
                Help us build a more truthful world. Whether you're a user, partner, or potential team member, we'd love
                to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={onBack}>
                  Try OLAAI
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
