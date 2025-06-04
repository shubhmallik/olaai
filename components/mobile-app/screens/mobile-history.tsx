"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Filter, Calendar, Clock, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react"
import { MobileBottomNav } from "../components/mobile-bottom-nav"
import type { MobileScreen } from "../mobile-app"

interface MobileHistoryProps {
  onNavigate: (screen: MobileScreen) => void
}

const mockHistory = [
  {
    id: "1",
    claim: "Does chocolate cure depression?",
    verdict: "MISLEADING",
    confidence: 78,
    date: "2024-01-15",
    time: "14:30",
  },
  {
    id: "2",
    claim: "Is climate change caused by humans?",
    verdict: "TRUE",
    confidence: 96,
    date: "2024-01-15",
    time: "10:15",
  },
  {
    id: "3",
    claim: "Do vaccines cause autism?",
    verdict: "FALSE",
    confidence: 98,
    date: "2024-01-14",
    time: "16:45",
  },
  {
    id: "4",
    claim: "Is the Earth flat?",
    verdict: "FALSE",
    confidence: 99,
    date: "2024-01-14",
    time: "09:20",
  },
  {
    id: "5",
    claim: "Can drinking water cure cancer?",
    verdict: "FALSE",
    confidence: 94,
    date: "2024-01-13",
    time: "11:30",
  },
]

export function MobileHistory({ onNavigate }: MobileHistoryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterVerdict, setFilterVerdict] = useState("all")

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "FALSE":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "MISLEADING":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "UNVERIFIABLE":
        return <Info className="h-4 w-4 text-gray-600" />
      default:
        return <Info className="h-4 w-4 text-gray-600" />
    }
  }

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return "bg-green-100 text-green-800"
      case "FALSE":
        return "bg-red-100 text-red-800"
      case "MISLEADING":
        return "bg-yellow-100 text-yellow-800"
      case "UNVERIFIABLE":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredHistory = mockHistory.filter((item) => {
    const matchesSearch = searchQuery === "" || item.claim.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterVerdict === "all" || item.verdict === filterVerdict
    return matchesSearch && matchesFilter
  })

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => onNavigate("home")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg">History</h1>
      </div>

      {/* Search and Filter */}
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search fact checks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto">
          {["all", "TRUE", "FALSE", "MISLEADING", "UNVERIFIABLE"].map((filter) => (
            <Badge
              key={filter}
              variant={filterVerdict === filter ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setFilterVerdict(filter)}
            >
              {filter === "all" ? "All" : filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          <p className="text-sm text-slate-600 mb-4">
            {filteredHistory.length} fact check{filteredHistory.length !== 1 ? "s" : ""}
          </p>

          <div className="space-y-3">
            {filteredHistory.map((item) => (
              <Card key={item.id} className="cursor-pointer hover:bg-slate-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{getVerdictIcon(item.verdict)}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-2 mb-2">{item.claim}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getVerdictColor(item.verdict)}>{item.verdict}</Badge>
                        <span className="text-xs text-slate-600">{item.confidence}% confidence</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">No fact checks found.</p>
              <Button onClick={() => onNavigate("fact-check")}>Start Fact Checking</Button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav currentScreen="history" onNavigate={onNavigate} />
    </div>
  )
}
