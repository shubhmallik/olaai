"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Bell, Shield, Moon, Smartphone } from "lucide-react"
import type { MobileScreen } from "../mobile-app"

interface MobileSettingsProps {
  onNavigate: (screen: MobileScreen) => void
}

export function MobileSettings({ onNavigate }: MobileSettingsProps) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    soundEffects: true,
    autoFactCheck: false,
    offlineMode: true,
  })

  const updateSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => onNavigate("profile")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg">Settings</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Notifications */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Push Notifications</span>
              <Switch checked={settings.notifications} onCheckedChange={() => updateSetting("notifications")} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Sound Effects</span>
              <Switch checked={settings.soundEffects} onCheckedChange={() => updateSetting("soundEffects")} />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Moon className="h-4 w-4" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <Switch checked={settings.darkMode} onCheckedChange={() => updateSetting("darkMode")} />
            </div>
          </CardContent>
        </Card>

        {/* Fact Checking */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Fact Checking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm">Auto Fact-Check</span>
                <p className="text-xs text-slate-600">Automatically fact-check copied text</p>
              </div>
              <Switch checked={settings.autoFactCheck} onCheckedChange={() => updateSetting("autoFactCheck")} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm">Offline Mode</span>
                <p className="text-xs text-slate-600">Cache results for offline viewing</p>
              </div>
              <Switch checked={settings.offlineMode} onCheckedChange={() => updateSetting("offlineMode")} />
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Version</span>
              <span className="text-sm text-slate-600">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Build</span>
              <span className="text-sm text-slate-600">2024.01.15</span>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Check for Updates
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
