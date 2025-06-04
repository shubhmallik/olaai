"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, ExternalLink, CheckCircle, XCircle, AlertTriangle, Info, Calendar } from "lucide-react"

interface FactCheck {
  id: string
  claim: string
  verdict: "TRUE" | "FALSE" | "MISLEADING" | "UNVERIFIABLE"
  confidence: number
  date: string
  time: string
  category: string
  sources: number
  feedback?: "positive" | "negative"
}

const mockFactChecks: FactCheck[] = [
  {
    id: "1",
    claim: "Does chocolate cure depression?",
    verdict: "MISLEADING",
    confidence: 78,
    date: "2024-01-15",
    time: "14:30",
    category: "Health",
    sources: 12,
    feedback: "positive",
  },
  {
    id: "2",
    claim: "Is climate change caused by humans?",
    verdict: "TRUE",
    confidence: 96,
    date: "2024-01-15",
    time: "10:15",
    category: "Science",
    sources: 18,
    feedback: "positive",
  },
  {
    id: "3",
    claim: "Do vaccines cause autism?",
    verdict: "FALSE",
    confidence: 98,
    date: "2024-01-14",
    time: "16:45",
    category: "Health",
    sources: 25,
    feedback: "positive",
  },
  {
    id: "4",
    claim: "Is the Earth flat?",
    verdict: "FALSE",
    confidence: 99,
    date: "2024-01-14",
    time: "09:20",
    category: "Science",
    sources: 15,
  },
  {
    id: "5",
    claim: "Can drinking water cure cancer?",
    verdict: "FALSE",
    confidence: 94,
    date: "2024-01-13",
    time: "11:30",
    category: "Health",
    sources: 20,
    feedback: "negative",
  },
  {
    id: "6",
    claim: "Are electric cars better for environment?",
    verdict: "TRUE",
    confidence: 85,
    date: "2024-01-13",
    time: "15:10",
    category: "Environment",
    sources: 14,
    feedback: "positive",
  },
]

export function FactCheckHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterVerdict, setFilterVerdict] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")

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
        return "bg-green-100 text-green-800 border-green-200"
      case "FALSE":
        return "bg-red-100 text-red-800 border-red-200"
      case "MISLEADING":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "UNVERIFIABLE":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredChecks = mockFactChecks.filter((check) => {
    const matchesSearch = check.claim.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesVerdict = filterVerdict === "all" || check.verdict === filterVerdict
    const matchesCategory = filterCategory === "all" || check.category === filterCategory
    return matchesSearch && matchesVerdict && matchesCategory
  })

  const categories = Array.from(new Set(mockFactChecks.map((check) => check.category)))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Fact-Check History
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search fact checks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterVerdict} onValueChange={setFilterVerdict}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="All verdicts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All verdicts</SelectItem>
              <SelectItem value="TRUE">True</SelectItem>
              <SelectItem value="FALSE">False</SelectItem>
              <SelectItem value="MISLEADING">Misleading</SelectItem>
              <SelectItem value="UNVERIFIABLE">Unverifiable</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-32">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="confidence">Confidence</SelectItem>
              <SelectItem value="verdict">Verdict</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Summary */}
        <div className="mb-4">
          <p className="text-sm text-slate-600">
            Showing {filteredChecks.length} of {mockFactChecks.length} fact checks
          </p>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim</TableHead>
                <TableHead>Verdict</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Sources</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredChecks.map((check) => (
                <TableRow key={check.id} className="hover:bg-slate-50">
                  <TableCell className="max-w-xs">
                    <p className="font-medium truncate" title={check.claim}>
                      {check.claim}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getVerdictColor(check.verdict)} border flex items-center gap-1 w-fit`}>
                      {getVerdictIcon(check.verdict)}
                      {check.verdict}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{check.confidence}%</span>
                      <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 transition-all" style={{ width: `${check.confidence}%` }} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{check.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{new Date(check.date).toLocaleDateString()}</div>
                      <div className="text-slate-600">{check.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-slate-600">{check.sources} sources</span>
                  </TableCell>
                  <TableCell>
                    {check.feedback && (
                      <Badge variant={check.feedback === "positive" ? "default" : "destructive"}>
                        {check.feedback === "positive" ? "👍" : "👎"}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredChecks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-600">No fact checks found matching your criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
