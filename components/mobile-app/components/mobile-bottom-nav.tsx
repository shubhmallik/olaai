"use client"

import { Button } from "@/components/ui/button"
import { Home, Search, History, User } from "lucide-react"
import type { MobileScreen } from "../mobile-app"

interface MobileBottomNavProps {
  currentScreen: MobileScreen
  onNavigate: (screen: MobileScreen) => void
}

export function MobileBottomNav({ currentScreen, onNavigate }: MobileBottomNavProps) {
  const navItems = [
    { id: "home" as MobileScreen, icon: Home, label: "Home" },
    { id: "fact-check" as MobileScreen, icon: Search, label: "Check" },
    { id: "history" as MobileScreen, icon: History, label: "History" },
    { id: "profile" as MobileScreen, icon: User, label: "Profile" },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t">
      <div className="grid grid-cols-4">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`h-16 flex-col gap-1 rounded-none ${
              currentScreen === item.id ? "text-blue-600" : "text-slate-600"
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
