"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, PieChart, Target, Activity } from "lucide-react"

const monthlyData = [
  { month: "Jan", checks: 45, accuracy: 92 },
  { month: "Feb", checks: 52, accuracy: 94 },
  { month: "Mar", checks: 38, accuracy: 89 },
  { month: "Apr", checks: 61, accuracy: 96 },
  { month: "May", checks: 55, accuracy: 93 },
  { month: "Jun", checks: 48, accuracy: 91 },
]

const categoryData = [
  { category: "Health", count: 45, percentage: 35, color: "bg-blue-500" },
  { category: "Science", count: 32, percentage: 25, color: "bg-green-500" },
  { category: "Politics", count: 25, percentage: 20, color: "bg-purple-500" },
  { category: "Environment", count: 15, percentage: 12, color: "bg-orange-500" },
  { category: "Technology", count: 10, percentage: 8, color: "bg-pink-500" },
]

const verdictData = [
  { verdict: "TRUE", count: 48, percentage: 38, color: "bg-green-500" },
  { verdict: "FALSE", count: 35, percentage: 28, color: "bg-red-500" },
  { verdict: "MISLEADING", count: 30, percentage: 24, color: "bg-yellow-500" },
  { verdict: "UNVERIFIABLE", count: 14, percentage: 11, color: "bg-gray-500" },
]

export function AnalyticsCharts() {
  const maxChecks = Math.max(...monthlyData.map((d) => d.checks))

  return (
    <div className="space-y-6">
      {/* Performance Trends */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{month.month}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-600">{month.checks} checks</span>
                      <span className="text-sm font-medium">{month.accuracy}%</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(month.checks / maxChecks) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-20">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${month.accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Accuracy Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                <p className="text-sm text-slate-600">Average Accuracy</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+2.3% this month</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Best Day</span>
                  <span className="text-sm font-medium">98% (Friday)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Improvement Rate</span>
                  <span className="text-sm font-medium text-green-600">+8.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Consistency Score</span>
                  <span className="text-sm font-medium">92/100</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category and Verdict Breakdown */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Categories Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{category.count} checks</span>
                      <Badge variant="outline">{category.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`${category.color} h-2 rounded-full transition-all`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Verdict Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verdictData.map((verdict, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{verdict.verdict}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{verdict.count} checks</span>
                      <Badge variant="outline">{verdict.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`${verdict.color} h-2 rounded-full transition-all`}
                      style={{ width: `${verdict.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights and Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800">Performance Insights</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 rounded">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Accuracy Improving</p>
                    <p className="text-xs text-slate-600">Your accuracy has increased by 8.5% this month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 rounded">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Consistent Performance</p>
                    <p className="text-xs text-slate-600">You maintain high accuracy across all categories</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800">Recommendations</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-orange-100 rounded">
                    <Activity className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Diversify Categories</p>
                    <p className="text-xs text-slate-600">Try fact-checking more technology and environment claims</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 rounded">
                    <BarChart3 className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Maintain Streak</p>
                    <p className="text-xs text-slate-600">Keep up your daily fact-checking to reach 10-day streak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
