"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Eye, ChevronRight, ChevronLeft } from "lucide-react"

interface MobileOnboardingProps {
  onComplete: () => void
}

const onboardingSteps = [
  {
    icon: <Shield className="h-16 w-16 text-blue-600" />,
    title: "Welcome to OLA.AI",
    description: "Your pocket fact-checker powered by AI. Verify claims instantly with trusted sources.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: <Zap className="h-16 w-16 text-green-600" />,
    title: "Instant Verification",
    description: "Get fact-check results in seconds. Simply type, paste, or speak your claim.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: <Eye className="h-16 w-16 text-purple-600" />,
    title: "Transparent Results",
    description: "See exactly how we reached our verdict with source links and confidence scores.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function MobileOnboarding({ onComplete }: MobileOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const step = onboardingSteps[currentStep]

  return (
    <div className="h-full flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="sm" onClick={onComplete}>
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        {/* Illustration */}
        <div className="mb-8">
          <img
            src={step.image || "/placeholder.svg"}
            alt={step.title}
            className="w-64 h-48 object-contain mx-auto mb-6"
          />
          <div className="flex justify-center mb-6">{step.icon}</div>
        </div>

        {/* Text Content */}
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">{step.description}</p>

        {/* Progress Dots */}
        <div className="flex gap-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep ? "bg-blue-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        <Button onClick={nextStep} className="flex items-center gap-2 px-8">
          {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
