"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Shield,
  TrendingUp,
  Download,
  Calendar,
  Clock,
  BarChart3,
  Activity,
  Target,
  Award,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { FactCheckHistory } from "./fact-check-history";
import { AnalyticsCharts } from "./analytics-charts";
import { ActivityFeed } from "./activity-feed";

interface UserDashboardProps {
  onBack?: () => void;
}

// Mock data for dashboard metrics
const dashboardMetrics = {
  totalChecks: 127,
  accuracyScore: 94,
  weeklyChecks: 12,
  monthlyChecks: 45,
  streakDays: 7,
  savedTime: 240, // minutes
  topCategory: "Health",
  improvementRate: 8.5,
};

const weeklyData = [
  { day: "Mon", checks: 3, accuracy: 92 },
  { day: "Tue", checks: 5, accuracy: 96 },
  { day: "Wed", checks: 2, accuracy: 88 },
  { day: "Thu", checks: 4, accuracy: 94 },
  { day: "Fri", checks: 6, accuracy: 98 },
  { day: "Sat", checks: 1, accuracy: 100 },
  { day: "Sun", checks: 2, accuracy: 90 },
];

export function UserDashboard({ onBack }: UserDashboardProps) {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
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
          <div className="flex items-center gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback className="text-xl">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-slate-600">
                Here's your fact-checking activity and insights
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Total Fact Checks
                  </p>
                  <p className="text-3xl font-bold text-slate-800">
                    {dashboardMetrics.totalChecks}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600 font-medium">
                  +{dashboardMetrics.improvementRate}%
                </span>
                <span className="text-slate-600 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Accuracy Score
                  </p>
                  <p className="text-3xl font-bold text-slate-800">
                    {dashboardMetrics.accuracyScore}%
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4">
                <Progress
                  value={dashboardMetrics.accuracyScore}
                  className="h-2"
                />
                <p className="text-xs text-slate-600 mt-2">
                  Excellent performance!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    This Week
                  </p>
                  <p className="text-3xl font-bold text-slate-800">
                    {dashboardMetrics.weeklyChecks}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Calendar className="h-4 w-4 text-slate-600 mr-1" />
                <span className="text-slate-600">
                  {dashboardMetrics.streakDays} day streak
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Time Saved
                  </p>
                  <p className="text-3xl font-bold text-slate-800">
                    {Math.floor(dashboardMetrics.savedTime / 60)}h
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Award className="h-4 w-4 text-orange-600 mr-1" />
                <span className="text-slate-600">
                  {dashboardMetrics.savedTime} minutes total
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Weekly Performance Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Weekly Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyData.map((day, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium text-slate-600">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-slate-600">
                              {day.checks} checks
                            </span>
                            <span className="text-sm font-medium">
                              {day.accuracy}%
                            </span>
                          </div>
                          <Progress value={day.accuracy} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Top Category
                      </span>
                      <Badge variant="secondary">
                        {dashboardMetrics.topCategory}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        Monthly Goal
                      </span>
                      <span className="text-sm font-medium">45/50</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Rank</span>
                      <span className="text-sm font-medium text-blue-600">
                        Top 15%
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Award className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Accuracy Expert</p>
                        <p className="text-xs text-slate-600">
                          95%+ accuracy for 7 days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Consistency Champion
                        </p>
                        <p className="text-xs text-slate-600">
                          7 day checking streak
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <FactCheckHistory />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsCharts />
          </TabsContent>

          <TabsContent value="activity">
            <ActivityFeed />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
