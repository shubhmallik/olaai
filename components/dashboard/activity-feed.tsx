"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Info, ThumbsUp, Award, Target, Clock, Calendar } from "lucide-react"

interface ActivityItem {
  id: string
  type: "fact_check" | "achievement" | "feedback" | "milestone"
  title: string
  description: string
  timestamp: string
  verdict?: "TRUE" | "FALSE" | "MISLEADING" | "UNVERIFIABLE"
  confidence?: number
  category?: string
  icon?: React.ReactNode
}

const activityData: ActivityItem[] = [
  {
    id: "1",
    type: "fact_check",
    title: "Fact-checked health claim",
    description: "Does chocolate cure depression?",
    timestamp: "2 hours ago",
    verdict: "MISLEADING",
    confidence: 78,
    category: "Health",
  },
  {
    id: "2",
    type: "achievement",
    title: "Accuracy Expert Badge Earned!",
    description: "Maintained 95%+ accuracy for 7 consecutive days",
    timestamp: "4 hours ago",
    icon: <Award className="h-4 w-4 text-yellow-600" />,
  },
  {
    id: "3",
    type: "fact_check",
    title: "Fact-checked science claim",
    description: "Is climate change caused by humans?",
    timestamp: "6 hours ago",
    verdict: "TRUE",
    confidence: 96,
    category: "Science",
  },
  {
    id: "4",
    type: "feedback",
    title: "Positive feedback received",
    description: "User found your fact-check on vaccines helpful",
    timestamp: "8 hours ago",
    icon: <ThumbsUp className="h-4 w-4 text-green-600" />,
  },
  {
    id: "5",
    type: "milestone",
    title: "100 Fact Checks Milestone!",
    description: "You've completed 100 fact checks with 94% average accuracy",
    timestamp: "1 day ago",
    icon: <Target className="h-4 w-4 text-blue-600" />,
  },
  {
    id: "6",
    type: "fact_check",
    title: "Fact-checked health claim",
    description: "Do vaccines cause autism?",
    timestamp: "1 day ago",
    verdict: "FALSE",
    confidence: 98,
    category: "Health",
  },
  {
    id: "7",
    type: "achievement",
    title: "Consistency Champion Badge!",
    description: "Completed fact checks for 7 consecutive days",
    timestamp: "2 days ago",
    icon: <Calendar className="h-4 w-4 text-purple-600" />,
  },
  {
    id: "8",
    type: "fact_check",
    title: "Fact-checked science claim",
    description: "Is the Earth flat?",
    timestamp: "2 days ago",
    verdict: "FALSE",
    confidence: 99,
    category: "Science",
  },
]

export function ActivityFeed() {
  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "FALSE":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "MISLEADING":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "UNVERIFIABLE":
        return <Info className="h-4 w-4 text-gray-600" />
      default:
        return <Info className="h-4 w-4 text-gray-600" />
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

  const getActivityIcon = (item: ActivityItem) => {
    if (item.icon) return item.icon

    switch (item.type) {
      case "fact_check":
        return item.verdict ? getVerdictIcon(item.verdict) : <CheckCircle className="h-4 w-4 text-blue-600" />
      case "achievement":
        return <Award className="h-4 w-4 text-yellow-600" />
      case "feedback":
        return <ThumbsUp className="h-4 w-4 text-green-600" />
      case "milestone":
        return <Target className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-yellow-100"
      case "feedback":
        return "bg-green-100"
      case "milestone":
        return "bg-blue-100"
      default:
        return "bg-slate-100"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityData.map((item, index) => (
            <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
              <div className={`p-2 rounded-lg ${getActivityColor(item.type)}`}>{getActivityIcon(item)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-slate-500">{item.timestamp}</span>
                      {item.category && (
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      )}
                      {item.verdict && (
                        <Badge className={`${getVerdictColor(item.verdict)} border text-xs`}>{item.verdict}</Badge>
                      )}
                      {item.confidence && <span className="text-xs text-slate-600">{item.confidence}% confidence</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline">Load More Activity</Button>
        </div>
      </CardContent>
    </Card>
  )
}
