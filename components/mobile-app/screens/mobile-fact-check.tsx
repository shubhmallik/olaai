"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Camera, Mic, Link, ImageIcon, Zap, MicIcon } from "lucide-react"
import { MobileBottomNav } from "../components/mobile-bottom-nav"
import type { MobileScreen } from "../mobile-app"

interface MobileFactCheckProps {
  onNavigate: (screen: MobileScreen) => void
  onFactCheck: (query: string) => void
}

const exampleClaims = [
  "Chocolate cures depression",
  "5G towers cause cancer",
  "Vaccines contain microchips",
  "Climate change is a hoax",
]

export function MobileFactCheck({ onNavigate, onFactCheck }: MobileFactCheckProps) {
  const [inputMethod, setInputMethod] = useState<"text" | "voice" | "camera" | "url">("text")
  const [query, setQuery] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleSubmit = async () => {
    if (!query.trim()) return

    setIsAnalyzing(true)
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)
    onFactCheck(query)
  }

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording)
    // Simulate voice recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setQuery("Does chocolate really cure depression?")
      }, 3000)
    }
  }

  const handleExampleClick = (claim: string) => {
    setQuery(claim)
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => onNavigate("home")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg">Fact Check</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Input Method Selector */}
        <div className="p-4">
          <h2 className="font-semibold mb-3">How would you like to fact-check?</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button
              variant={inputMethod === "text" ? "default" : "outline"}
              className="h-16 flex-col gap-2"
              onClick={() => setInputMethod("text")}
            >
              <ImageIcon className="h-5 w-5" />
              <span className="text-sm">Type Text</span>
            </Button>
            <Button
              variant={inputMethod === "voice" ? "default" : "outline"}
              className="h-16 flex-col gap-2"
              onClick={() => setInputMethod("voice")}
            >
              <Mic className="h-5 w-5" />
              <span className="text-sm">Voice</span>
            </Button>
            <Button
              variant={inputMethod === "camera" ? "default" : "outline"}
              className="h-16 flex-col gap-2"
              onClick={() => setInputMethod("camera")}
            >
              <Camera className="h-5 w-5" />
              <span className="text-sm">Camera</span>
            </Button>
            <Button
              variant={inputMethod === "url" ? "default" : "outline"}
              className="h-16 flex-col gap-2"
              onClick={() => setInputMethod("url")}
            >
              <Link className="h-5 w-5" />
              <span className="text-sm">URL</span>
            </Button>
          </div>

          {/* Input Area */}
          <Card className="mb-6">
            <CardContent className="p-4">
              {inputMethod === "text" && (
                <div className="space-y-3">
                  <Textarea
                    placeholder="Type or paste the claim you want to fact-check..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="min-h-[120px] text-base"
                  />
                </div>
              )}

              {inputMethod === "voice" && (
                <div className="text-center py-8">
                  <Button
                    size="lg"
                    variant={isRecording ? "destructive" : "default"}
                    className="w-20 h-20 rounded-full"
                    onClick={handleVoiceRecord}
                  >
                    <MicIcon className="h-8 w-8" />
                  </Button>
                  <p className="mt-4 text-sm text-slate-600">
                    {isRecording ? "Recording... Tap to stop" : "Tap to start recording"}
                  </p>
                  {query && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                      <p className="text-sm">{query}</p>
                    </div>
                  )}
                </div>
              )}

              {inputMethod === "camera" && (
                <div className="text-center py-8">
                  <div className="w-full h-40 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Camera className="h-12 w-12 text-slate-400" />
                  </div>
                  <Button>
                    <Camera className="h-4 w-4 mr-2" />
                    Take Photo
                  </Button>
                  <p className="mt-2 text-xs text-slate-600">Capture text or images to fact-check</p>
                </div>
              )}

              {inputMethod === "url" && (
                <div className="space-y-3">
                  <Input
                    placeholder="Paste URL of article or social media post..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="text-base"
                  />
                  <p className="text-xs text-slate-600">We'll analyze the content and fact-check key claims</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button onClick={handleSubmit} disabled={!query.trim() || isAnalyzing} className="w-full h-12 text-base">
            {isAnalyzing ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Analyzing...
              </div>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Fact Check Now
              </>
            )}
          </Button>
        </div>

        {/* Example Claims */}
        <div className="px-4 mb-6">
          <h3 className="font-semibold mb-3">Try these examples:</h3>
          <div className="space-y-2">
            {exampleClaims.map((claim, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-blue-50 p-3 w-full justify-start text-left"
                onClick={() => handleExampleClick(claim)}
              >
                {claim}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav currentScreen="fact-check" onNavigate={onNavigate} />
    </div>
  )
}
