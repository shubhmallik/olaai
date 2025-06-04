"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Shield,
  Search,
  Brain,
  CheckCircle,
  Database,
  Target,
  Users,
  Clock,
  ArrowRight,
  Play,
} from "lucide-react";

interface HowItWorksProps {
  onBack?: () => void;
}

const processSteps = [
  {
    step: 1,
    title: "Input Analysis",
    description:
      "Our AI analyzes your claim or URL to extract key facts and context",
    icon: <Search className="h-8 w-8" />,
    details: [
      "Natural Language Processing extracts key claims",
      "Context analysis identifies relevant topics",
      "Claim normalization for better matching",
      "Source type detection (text vs URL)",
    ],
    time: "< 1 second",
  },
  {
    step: 2,
    title: "Source Scanning",
    description:
      "We scan multiple credible news sources and databases in real-time",
    icon: <Database className="h-8 w-8" />,
    details: [
      "Search across 50+ trusted news sources",
      "Academic database integration",
      "Government and official source checking",
      "Real-time content retrieval",
    ],
    time: "1-2 seconds",
  },
  {
    step: 3,
    title: "AI Verification",
    description:
      "Advanced machine learning models analyze and cross-reference information",
    icon: <Brain className="h-8 w-8" />,
    details: [
      "BERT-based semantic similarity analysis",
      "BiLSTM classification models",
      "Cross-reference validation",
      "Confidence score calculation",
    ],
    time: "1-2 seconds",
  },
  {
    step: 4,
    title: "Results & Evidence",
    description:
      "Get a clear verdict with supporting evidence and confidence metrics",
    icon: <CheckCircle className="h-8 w-8" />,
    details: [
      "Color-coded verdict classification",
      "Source credibility weighting",
      "Evidence snippet extraction",
      "Transparent confidence scoring",
    ],
    time: "< 1 second",
  },
];

const faqData = [
  {
    question: "How accurate is OlaAI's fact-checking?",
    answer:
      "Our AI models achieve 94% accuracy on average, validated against human fact-checkers. We continuously improve our models using user feedback and new training data.",
  },
  {
    question: "What sources does OlaAI use for verification?",
    answer:
      "We scan over 50 trusted sources including major news outlets (BBC, Reuters, AP), academic databases, government websites, and specialized fact-checking organizations like Snopes and PolitiFact.",
  },
  {
    question: "How does the confidence score work?",
    answer:
      "Our confidence score (0-100%) considers source credibility, claim specificity, evidence strength, and consensus across multiple sources. Higher scores indicate stronger evidence for the verdict.",
  },
  {
    question: "Can OlaAI fact-check any type of claim?",
    answer:
      "OlaAI works best with factual claims that can be verified against reliable sources. We handle health, science, politics, and general news claims most effectively.",
  },
  {
    question: "How fast is the fact-checking process?",
    answer:
      "Most fact-checks complete in 3-5 seconds. Complex claims with limited sources may take slightly longer, but we prioritize speed without compromising accuracy.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "We don't store your personal queries. Anonymous usage data helps improve our models, but individual fact-check requests are not retained or shared with third parties.",
  },
];

export function HowItWorks({ onBack }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
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
          <Button onClick={() => setShowDemo(true)}>
            <Play className="h-4 w-4 mr-2" />
            Watch Demo
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How OlaAI Works
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Discover how our AI-powered fact-checking platform verifies claims
            in seconds using advanced machine learning and trusted sources.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3-5 seconds average</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>94% accuracy rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>50+ trusted sources</span>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Fact-Checking Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.step}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeStep === step.step
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : ""
                }`}
                onClick={() => setActiveStep(step.step)}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge variant="outline" className="mb-2">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <Clock className="h-3 w-3" />
                    <span>{step.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Step Details */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {processSteps[activeStep - 1].icon}
                </div>
                Step {activeStep}: {processSteps[activeStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                {processSteps[activeStep - 1].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Details:</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {processSteps[activeStep - 1].details.map(
                      (detail, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {detail}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Processing Time:</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {processSteps[activeStep - 1].time}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Optimized for speed without compromising accuracy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Deep Dive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Deep Dive
          </h2>
          <Tabs defaultValue="ai-models" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ai-models">AI Models</TabsTrigger>
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="ai-models" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Machine Learning Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">
                        BERT-based Analysis
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Semantic similarity detection</li>
                        <li>• Context-aware claim matching</li>
                        <li>• Multi-language support</li>
                        <li>• Real-time inference optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        BiLSTM Classification
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Sequential pattern recognition</li>
                        <li>• Temporal relationship analysis</li>
                        <li>• Confidence score generation</li>
                        <li>• Continuous learning integration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Model Performance
                    </h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          94%
                        </div>
                        <div className="text-sm text-blue-700">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          2.3s
                        </div>
                        <div className="text-sm text-blue-700">Avg Speed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          50M+
                        </div>
                        <div className="text-sm text-blue-700">
                          Training Examples
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Trusted Data Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">News Organizations</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• BBC, Reuters, Associated Press</li>
                        <li>• CNN, NPR, The Guardian</li>
                        <li>• Local and regional outlets</li>
                        <li>• International news sources</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        Academic & Official
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• PubMed medical database</li>
                        <li>• Government websites (.gov)</li>
                        <li>• WHO, CDC health data</li>
                        <li>• Scientific journals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Fact-Checkers</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• Snopes, PolitiFact</li>
                        <li>• FactCheck.org</li>
                        <li>• International fact-checkers</li>
                        <li>• Specialized verification sites</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Data Protection</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          No personal query storage
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          End-to-end encryption
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          GDPR compliant
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Anonymous analytics only
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Infrastructure</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          99.9% uptime guarantee
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Global CDN distribution
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Auto-scaling architecture
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Regular security audits
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Fact-Checking?
              </h3>
              <p className="text-slate-600 mb-6">
                Join thousands of users who trust OlaAI for accurate, fast
                fact-checking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={onBack}>
                  Try OlaAI Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="h-4 w-4 mr-2" />
                  Learn About Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>OlaAI Demo Video</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDemo(false)}
              >
                ×
              </Button>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">
                    Demo video would be embedded here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
