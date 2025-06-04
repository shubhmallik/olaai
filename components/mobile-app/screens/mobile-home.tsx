"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Shield,
  Search,
  Camera,
  Mic,
  History,
  TrendingUp,
  Bell,
  Menu,
  Plus,
  Zap,
} from "lucide-react";
import { MobileBottomNav } from "../components/mobile-bottom-nav";
import type { MobileScreen } from "../mobile-app";

interface MobileHomeProps {
  onNavigate: (screen: MobileScreen) => void;
  onFactCheck: (query: string) => void;
  onBack?: () => void;
}

const trendingClaims = [
  "Chocolate cures depression",
  "5G causes health issues",
  "Climate change is natural",
  "Vaccines contain microchips",
];

const recentChecks = [
  {
    claim: "Does chocolate cure depression?",
    verdict: "MISLEADING",
    time: "2h ago",
  },
  {
    claim: "Is climate change caused by humans?",
    verdict: "TRUE",
    time: "1d ago",
  },
  { claim: "Do vaccines cause autism?", verdict: "FALSE", time: "2d ago" },
];

export function MobileHome({
  onNavigate,
  onFactCheck,
  onBack,
}: MobileHomeProps) {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleQuickCheck = (claim: string) => {
    onFactCheck(claim);
  };

  const handleSubmit = () => {
    if (query.trim()) {
      onFactCheck(query);
    }
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return "bg-green-100 text-green-800";
      case "FALSE":
        return "bg-red-100 text-red-800";
      case "MISLEADING":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg">OlaAI</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Quick Fact Check */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Quick Fact Check</h2>
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="space-y-3">
                <Input
                  placeholder="Type or paste a claim to verify..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-base"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={handleSubmit}
                    disabled={!query.trim()}
                    className="flex-1"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Fact Check
                  </Button>
                  <Button variant="outline" size="icon">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Claims */}
        <div className="px-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            <h3 className="font-semibold">Trending Claims</h3>
          </div>
          <div className="space-y-2">
            {trendingClaims.map((claim, index) => (
              <Card key={index} className="cursor-pointer hover:bg-slate-50">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex-1">{claim}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuickCheck(claim)}
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Checks */}
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <History className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Recent Checks</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("history")}
            >
              View All
            </Button>
          </div>
          <div className="space-y-2">
            {recentChecks.map((check, index) => (
              <Card key={index} className="cursor-pointer hover:bg-slate-50">
                <CardContent className="p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2 mb-1">
                        {check.claim}
                      </p>
                      <p className="text-xs text-slate-500">{check.time}</p>
                    </div>
                    <Badge className={getVerdictColor(check.verdict)}>
                      {check.verdict}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-20 flex-col gap-2"
              onClick={() => onNavigate("fact-check")}
            >
              <Plus className="h-6 w-6" />
              <span className="text-sm">New Check</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2"
              onClick={() => onNavigate("history")}
            >
              <History className="h-6 w-6" />
              <span className="text-sm">History</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileBottomNav currentScreen="home" onNavigate={onNavigate} />
    </div>
  );
}
