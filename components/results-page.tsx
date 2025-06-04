"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  Info,
  ChevronDown,
  ChevronUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface ResultsPageProps {
  query: string;
  onBack: () => void;
}

const mockResult = {
  verdict: "MISLEADING",
  confidence: 78,
  summary:
    'While chocolate contains compounds that may affect mood, there is insufficient scientific evidence to support claims that it "cures" depression.',
  sources: [
    {
      title: "Harvard Health: The truth about chocolate and mood",
      outlet: "Harvard Health Publishing",
      credibility: 95,
      timeAgo: "2 hours ago",
      excerpt:
        "Dark chocolate contains phenylethylamine and serotonin, which may have mood-lifting effects, but clinical evidence for treating depression is limited.",
      url: "#",
      relevance: 92,
    },
    {
      title: "Mayo Clinic: Depression treatment options",
      outlet: "Mayo Clinic",
      credibility: 98,
      timeAgo: "1 day ago",
      excerpt:
        "Effective depression treatments include therapy, medication, and lifestyle changes. No single food item has been proven to cure depression.",
      url: "#",
      relevance: 85,
    },
    {
      title: "Journal of Nutritional Science study on cocoa",
      outlet: "Cambridge University Press",
      credibility: 90,
      timeAgo: "3 days ago",
      excerpt:
        "Cocoa consumption showed modest improvements in mood markers, but researchers emphasize this does not constitute a cure for clinical depression.",
      url: "#",
      relevance: 88,
    },
  ],
};

export function ResultsPage({ query, onBack }: ResultsPageProps) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [userFeedback, setUserFeedback] = useState<"up" | "down" | null>(null);

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return "text-green-700 bg-green-50 border-green-200";
      case "FALSE":
        return "text-red-700 bg-red-50 border-red-200";
      case "MISLEADING":
        return "text-yellow-700 bg-yellow-50 border-yellow-200";
      case "UNVERIFIABLE":
        return "text-gray-700 bg-gray-50 border-gray-200";
      default:
        return "text-gray-700 bg-gray-50 border-gray-200";
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "TRUE":
        return <CheckCircle className="h-6 w-6" />;
      case "FALSE":
        return <XCircle className="h-6 w-6" />;
      case "MISLEADING":
        return <AlertTriangle className="h-6 w-6" />;
      case "UNVERIFIABLE":
        return <Info className="h-6 w-6" />;
      default:
        return <Info className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">
                  OlaAI.com
                </span>
                <span className="text-sm  text-slate-800">
                  Online Lie Analyser
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Query Display */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium text-slate-600 mb-2">
              Fact-checking claim:
            </h2>
            <p className="text-xl text-slate-800 font-medium">"{query}"</p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Verdict Banner */}
            <Card className={`border-2 ${getVerdictColor(mockResult.verdict)}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {getVerdictIcon(mockResult.verdict)}
                  <h3 className="text-2xl font-bold">{mockResult.verdict}</h3>
                </div>
                <p className="text-lg mb-4">{mockResult.summary}</p>

                {/* Confidence Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Confidence Score
                    </span>
                    <span className="text-sm font-bold">
                      {mockResult.confidence}%
                    </span>
                  </div>
                  <Progress value={mockResult.confidence} className="h-3" />
                  <p className="text-xs text-slate-600">
                    Based on source credibility, claim specificity, and evidence
                    strength
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Evidence Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Supporting Evidence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockResult.sources.map((source, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {source.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="font-medium">{source.outlet}</span>
                          <Badge variant="outline" className="text-xs">
                            Credibility: {source.credibility}%
                          </Badge>
                          <span>{source.timeAgo}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-slate-700 mb-3">{source.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>Relevance: {source.relevance}%</span>
                      <Progress value={source.relevance} className="w-20 h-1" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Technical Details */}
            <Card>
              <CardHeader>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-0 h-auto"
                  onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                >
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Technical Details
                  </CardTitle>
                  {showTechnicalDetails ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </CardHeader>
              {showTechnicalDetails && (
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">NLP Confidence:</span>
                      <span className="ml-2">82.4%</span>
                    </div>
                    <div>
                      <span className="font-medium">Sources Analyzed:</span>
                      <span className="ml-2">12</span>
                    </div>
                    <div>
                      <span className="font-medium">Processing Time:</span>
                      <span className="ml-2">2.3s</span>
                    </div>
                    <div>
                      <span className="font-medium">Model Version:</span>
                      <span className="ml-2">v2.1.0</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="text-xs text-slate-600">
                    <p className="font-medium mb-2">Verification Process:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Claim extraction and normalization</li>
                      <li>• Multi-source cross-referencing</li>
                      <li>• Credibility scoring and temporal analysis</li>
                      <li>• Semantic similarity matching</li>
                    </ul>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Was this verdict accurate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button
                    variant={userFeedback === "up" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setUserFeedback("up")}
                    className="flex-1"
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Yes
                  </Button>
                  <Button
                    variant={userFeedback === "down" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setUserFeedback("down")}
                    className="flex-1"
                  >
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    No
                  </Button>
                </div>
                {userFeedback && (
                  <p className="text-sm text-slate-600 mt-3">
                    Thank you for your feedback! This helps improve our
                    accuracy.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* How We Verify */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How We Verify</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">1</span>
                  </div>
                  <p>Scan multiple credible news sources and databases</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">2</span>
                  </div>
                  <p>Apply NLP models to extract and compare key claims</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">3</span>
                  </div>
                  <p>Weight evidence by source credibility and recency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">4</span>
                  </div>
                  <p>Generate confidence scores and transparent explanations</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share Results
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Report Issue
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Info className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
