"use client"

import { useState } from "react"
import { MobileHome } from "./screens/mobile-home"
import { MobileFactCheck } from "./screens/mobile-fact-check"
import { MobileResults } from "./screens/mobile-results"
import { MobileHistory } from "./screens/mobile-history"
import { MobileProfile } from "./screens/mobile-profile"
import { MobileSettings } from "./screens/mobile-settings"
import { MobileOnboarding } from "./screens/mobile-onboarding"

export type MobileScreen = "onboarding" | "home" | "fact-check" | "results" | "history" | "profile" | "settings"

interface MobileAppProps {
  onBack?: () => void
}

export function MobileApp({ onBack }: MobileAppProps) {
  const [currentScreen, setCurrentScreen] = useState<MobileScreen>("onboarding")
  const [factCheckQuery, setFactCheckQuery] = useState("")
  const [isFirstTime, setIsFirstTime] = useState(true)

  const navigateToScreen = (screen: MobileScreen) => {
    setCurrentScreen(screen)
  }

  const handleFactCheck = (query: string) => {
    setFactCheckQuery(query)
    setCurrentScreen("results")
  }

  const handleCompleteOnboarding = () => {
    setIsFirstTime(false)
    setCurrentScreen("home")
  }

  // Mobile app container with phone-like dimensions
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Phone Frame */}
        <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
          <div className="bg-white rounded-[2rem] overflow-hidden h-[800px] relative">
            {/* Status Bar */}
            <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-sm">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                </div>
                <div className="w-1 h-2 bg-white rounded-full"></div>
                <div className="w-6 h-3 border border-white rounded-sm">
                  <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="h-full bg-slate-50">
              {currentScreen === "onboarding" && <MobileOnboarding onComplete={handleCompleteOnboarding} />}
              {currentScreen === "home" && (
                <MobileHome onNavigate={navigateToScreen} onFactCheck={handleFactCheck} onBack={onBack} />
              )}
              {currentScreen === "fact-check" && (
                <MobileFactCheck onNavigate={navigateToScreen} onFactCheck={handleFactCheck} />
              )}
              {currentScreen === "results" && <MobileResults query={factCheckQuery} onNavigate={navigateToScreen} />}
              {currentScreen === "history" && <MobileHistory onNavigate={navigateToScreen} />}
              {currentScreen === "profile" && <MobileProfile onNavigate={navigateToScreen} />}
              {currentScreen === "settings" && <MobileSettings onNavigate={navigateToScreen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
