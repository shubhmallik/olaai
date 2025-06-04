"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  joinDate: string
  plan: "free" | "pro" | "enterprise"
  factChecksCount: number
  accuracyScore: number
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => void
  updateProfile: (updates: Partial<User>) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem("ola-ai-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock validation
    if (email === "demo@example.com" && password === "password") {
      const mockUser: User = {
        id: "1",
        email: "demo@example.com",
        name: "Demo User",
        avatar: "/placeholder.svg?height=40&width=40",
        joinDate: "2024-01-15",
        plan: "pro",
        factChecksCount: 127,
        accuracyScore: 94,
      }
      setUser(mockUser)
      localStorage.setItem("ola-ai-user", JSON.stringify(mockUser))
      setIsLoading(false)
      return { success: true }
    }

    setIsLoading(false)
    return { success: false, error: "Invalid email or password" }
  }

  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      joinDate: new Date().toISOString().split("T")[0],
      plan: "free",
      factChecksCount: 0,
      accuracyScore: 0,
    }

    setUser(newUser)
    localStorage.setItem("ola-ai-user", JSON.stringify(newUser))
    setIsLoading(false)
    return { success: true }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("ola-ai-user")
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return { success: false, error: "Not authenticated" }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem("ola-ai-user", JSON.stringify(updatedUser))
    setIsLoading(false)
    return { success: true }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
