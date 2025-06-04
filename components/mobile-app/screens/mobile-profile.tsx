"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Settings, Crown, BarChart3, Shield, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { MobileBottomNav } from "../components/mobile-bottom-nav"
import type { MobileScreen } from "../mobile-app"

interface MobileProfileProps {
  onNavigate: (screen: MobileScreen) => void
}

const mockUser = {
  name: "Demo User",
  email: "demo@example.com",
  avatar: "/placeholder.svg?height=80&width=80",
  plan: "pro",
  factChecksCount: 127,
  accuracyScore: 94,
  joinDate: "2024-01-15",
}

const menuItems = [
  { icon: Settings, label: "Settings", action: "settings" },
  { icon: Bell, label: "Notifications", action: "notifications" },
  { icon: BarChart3, label: "Analytics", action: "analytics" },
  { icon: Crown, label: "Upgrade Plan", action: "upgrade" },
  { icon: HelpCircle, label: "Help & Support", action: "help" },
  { icon: LogOut, label: "Sign Out", action: "signout" },
]

export function MobileProfile({ onNavigate }: MobileProfileProps) {
  const handleMenuAction = (action: string) => {
    if (action === "settings") {
      onNavigate("settings")
    }
    // Handle other actions
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "pro":
        return "bg-blue-100 text-blue-800"
      case "enterprise":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => onNavigate("home")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg">Profile</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile Header */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <Card>
            <CardContent className="p-6 text-center">
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
                <AvatarFallback className="text-xl">
                  {mockUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold mb-1">{mockUser.name}</h2>
              <p className="text-slate-600 mb-3">{mockUser.email}</p>
              <Badge className={`${getPlanColor(mockUser.plan)} border`}>
                {mockUser.plan === "pro" && <Crown className="h-3 w-3 mr-1" />}
                {mockUser.plan.toUpperCase()} PLAN
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">{mockUser.factChecksCount}</div>
                <div className="text-xs text-slate-600">Fact Checks</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">{mockUser.accuracyScore}%</div>
                <div className="text-xs text-slate-600">Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
                <div className="text-xs text-slate-600">This Week</div>
              </CardContent>
            </Card>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Card key={index} className="cursor-pointer hover:bg-slate-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between" onClick={() => handleMenuAction(item.action)}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <item.icon className="h-4 w-4 text-slate-600" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Info */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">OLA.AI</span>
            </div>
            <p className="text-xs text-slate-500">Version 1.0.0</p>
            <p className="text-xs text-slate-500">Member since {new Date(mockUser.joinDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav currentScreen="profile" onNavigate={onNavigate} />
    </div>
  )
}
