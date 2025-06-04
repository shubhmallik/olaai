"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "signin" | "signup"
}

export function AuthModal({ isOpen, onClose, defaultMode = "signin" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode)

  const handleSuccess = () => {
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        {mode === "signin" ? (
          <SignInForm onSuccess={handleSuccess} onSwitchToSignUp={() => setMode("signup")} />
        ) : (
          <SignUpForm onSuccess={handleSuccess} onSwitchToSignIn={() => setMode("signin")} />
        )}
      </DialogContent>
    </Dialog>
  )
}
