"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Camera, Crown, Calendar, Mail, User, Shield, BarChart3 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface UserProfileProps {
  onBack?: () => void
}

export function UserProfile({ onBack }: UserProfileProps) {
  const { user, updateProfile, isLoading } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  })
  const [message, setMessage] = useState("")

  if (!user) return null

  const handleSave = async () => {
    const result = await updateProfile(formData)
    if (result.success) {
      setMessage("Profile updated successfully!")
      setIsEditing(false)
      setTimeout(() => setMessage(""), 3000)
    } else {
      setMessage(result.error || "Failed to update profile")
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "pro":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "enterprise":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          )}
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">OlaAI.com</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-2xl">{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-slate-600 mb-4">{user.email}</p>

                <Badge className={`${getPlanColor(user.plan)} border`}>
                  {user.plan === "pro" && <Crown className="h-3 w-3 mr-1" />}
                  {user.plan.toUpperCase()} PLAN
                </Badge>

                <Separator className="my-6" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <BarChart3 className="h-4 w-4 text-slate-400" />
                    <span>{user.factChecksCount} fact checks completed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-slate-400" />
                    <span>{user.accuracyScore}% accuracy score</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Profile Information</CardTitle>
                <Button
                  variant={isEditing ? "outline" : "default"}
                  onClick={() => {
                    if (isEditing) {
                      setFormData({ name: user.name, email: user.email })
                    }
                    setIsEditing(!isEditing)
                  }}
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {message && (
                  <Alert>
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}

                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="pl-10"
                        />
                      </div>
                    ) : (
                      <p className="text-slate-800 py-2">{user.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    {isEditing ? (
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="pl-10"
                        />
                      </div>
                    ) : (
                      <p className="text-slate-800 py-2">{user.email}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-3">
                    <Button onClick={handleSave} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Your Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{user.factChecksCount}</div>
                    <div className="text-sm text-slate-600">Total Checks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{user.accuracyScore}%</div>
                    <div className="text-sm text-slate-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">12</div>
                    <div className="text-sm text-slate-600">This Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">4.8</div>
                    <div className="text-sm text-slate-600">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Information */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {user.plan === "pro" && <Crown className="h-5 w-5 text-blue-600" />}
                      <span className="text-lg font-semibold capitalize">{user.plan} Plan</span>
                    </div>
                    <p className="text-slate-600">
                      {user.plan === "free" && "Limited to 10 fact checks per day"}
                      {user.plan === "pro" && "Unlimited fact checks with priority support"}
                      {user.plan === "enterprise" && "Full access with team collaboration"}
                    </p>
                  </div>
                  {user.plan === "free" && <Button>Upgrade Plan</Button>}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
