"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Share2,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Clock,
  Shield,
} from "lucide-react"
import { MobileBottomNav } from "../components/mobile-bottom-nav"
import type { MobileScreen } from "../mobile-app"

interface MobileResultsProps {
  query: string
  onNavigate: (screen: MobileScreen) => void
}

// Mock result data
const mockResult = {
  verdict: "MISLEADING",
  confidence: 78,
  summary:
    'While chocolate contains compounds that may affect mood, there is insufficient scientific evidence to support claims that it "cures" depression.',
  sources: [
    {
      title: "Harvard Health: The truth about chocolate and mood",
      outlet: "Harvard Health Publishing",
      credibility: 95,
      timeAgo: "2 hours ago",
      excerpt: "Dark chocolate contains phenylethylamine and serotonin, which may have mood-lifting effects...",
      url: "#",
    },
    {
      title: "Mayo Clinic: Depression treatment options",
      outlet: "Mayo Clinic",
      credibility: 98,
      timeAgo: "1 day ago",
      excerpt: "Effective depression treatments include therapy, medication, and lifestyle changes...",
      url: "#",
    },
  ],
}

export function MobileResults({ query, onNavigate }: MobileResultsProps) {
  const [userFeedback, setUserFeedback] = useState<"up" | "down" | null>(null)
  const [showSources, setShowSources] = useState(false)

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case "FALSE":
        return <XCircle className="h-6 w-6 text-red-600" />
      case "MISLEADING":
        return <AlertTriangle className="h-6 w-6 text-yellow-600" />
      case "UNVERIFIABLE":
        return <Info className="h-6 w-6 text-gray-600" />
      default:
        return <Info className="h-6 w-6 text-gray-600" />
    }
  }

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return "bg-green-100 text-green-800 border-green-200"
      case "FALSE":
        return "bg-red-100 text-red-800 border-red-200"
      case "MISLEADING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "UNVERIFIABLE":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => onNavigate("home")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Results</h1>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Query Display */}
        <div className="p-4 bg-slate-50 border-b">
          <p className="text-sm text-slate-600 mb-1">Fact-checking claim:</p>
          <p className="font-medium">"{query}"</p>
        </div>

        {/* Verdict Card */}
        <div className="p-4">
          <Card className={`border-2 ${getVerdictColor(mockResult.verdict)}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                {getVerdictIcon(mockResult.verdict)}
                <h2 className="text-xl font-bold">{mockResult.verdict}</h2>
              </div>
              <p className="text-sm mb-4">{mockResult.summary}</p>

              {/* Confidence Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Confidence Score</span>
                  <span className="text-sm font-bold">{mockResult.confidence}%</span>
                </div>
                <Progress value={mockResult.confidence} className="h-2" />
                <p className="text-xs text-slate-600">Based on source credibility and evidence strength</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sources Section */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Sources ({mockResult.sources.length})
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setShowSources(!showSources)}>
              {showSources ? "Hide" : "Show"}
            </Button>
          </div>

          {showSources && (
            <div className="space-y-3">
              {mockResult.sources.map((source, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{source.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="font-medium">{source.outlet}</span>
                          <Badge variant="outline" className="text-xs">
                            {source.credibility}% credible
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-700 line-clamp-2">{source.excerpt}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      <span>{source.timeAgo}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Feedback Section */}
        <div className="px-4 mb-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Was this verdict accurate?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-3 mb-3">
                <Button
                  variant={userFeedback === "up" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserFeedback("up")}
                  className="flex-1"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Yes
                </Button>
                <Button
                  variant={userFeedback === "down" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserFeedback("down")}
                  className="flex-1"
                >
                  <ThumbsDown className="h-4 w-4 mr-2" />
                  No
                </Button>
              </div>
              {userFeedback && (
                <p className="text-xs text-slate-600">Thank you for your feedback! This helps improve our accuracy.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12">
              <Share2 className="h-4 w-4 mr-2" />
              Share Result
            </Button>
            <Button variant="outline" className="h-12" onClick={() => onNavigate("fact-check")}>
              New Check
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav currentScreen="results" onNavigate={onNavigate} />
    </div>
  )
}
