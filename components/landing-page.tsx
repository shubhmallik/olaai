"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Link, Shield, Zap, Eye } from "lucide-react";
import { ResultsPage } from "./results-page";

// Add the auth imports at the top
import { AuthModal } from "./auth/auth-modal";
import { UserMenu } from "./user/user-menu";
import { UserProfile } from "./user/user-profile";
import { useAuth } from "@/contexts/auth-context";
// Add the dashboard import at the top with other imports
import { UserDashboard } from "./dashboard/user-dashboard";
// Add the new page imports
import { HowItWorks } from "./pages/how-it-works";
import { About } from "./pages/about";
// Add the blog import
import { Blog } from "./pages/blog/blog";
// Add the mobile app import
import { MobileApp } from "./mobile-app/mobile-app";

const exampleQueries = [
  "Does chocolate cure depression?",
  "Is climate change caused by humans?",
  "Do vaccines cause autism?",
  "Is the Earth flat?",
];

// Update the LandingPage component to include authentication state
export function LandingPage() {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // Add this state variable after the existing state variables
  const [showDashboard, setShowDashboard] = useState(false);
  // Add these new state variables
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  // Add blog state
  const [showBlog, setShowBlog] = useState(false);
  // Add mobile app state
  const [showMobileApp, setShowMobileApp] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsAnalyzing(true);
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  // Add these handlers after the existing handlers
  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  // Add this handler after the existing handlers
  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  const handleBackFromDashboard = () => {
    setShowDashboard(false);
  };

  const handleBackFromProfile = () => {
    setShowProfile(false);
  };

  // Add these new handlers
  const handleHowItWorksClick = () => {
    setShowHowItWorks(true);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleBackFromHowItWorks = () => {
    setShowHowItWorks(false);
  };

  const handleBackFromAbout = () => {
    setShowAbout(false);
  };

  // Add blog handlers
  const handleBlogClick = () => {
    setShowBlog(true);
  };

  const handleBackFromBlog = () => {
    setShowBlog(false);
  };

  // Add mobile app handlers
  const handleMobileAppClick = () => {
    setShowMobileApp(true);
  };

  const handleBackFromMobileApp = () => {
    setShowMobileApp(false);
  };

  if (showResults) {
    return <ResultsPage query={query} onBack={() => setShowResults(false)} />;
  }

  // Add this condition after the existing showResults condition
  if (showProfile) {
    return <UserProfile onBack={handleBackFromProfile} />;
  }

  // Add this condition after the existing showProfile condition
  if (showDashboard) {
    return <UserDashboard onBack={handleBackFromDashboard} />;
  }

  // Add these new conditions
  if (showHowItWorks) {
    return <HowItWorks onBack={handleBackFromHowItWorks} />;
  }

  if (showAbout) {
    return <About onBack={handleBackFromAbout} />;
  }

  // Add blog condition
  if (showBlog) {
    return <Blog onBack={handleBackFromBlog} />;
  }

  // Add mobile app condition
  if (showMobileApp) {
    return <MobileApp onBack={handleBackFromMobileApp} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-800">
                OlaAI.com
              </span>
              <span className="text-sm  text-slate-800">
                Online Lie Analyser
              </span>
            </div>
          </div>

          {/* In the header section, replace the existing nav with: */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Update the navigation links */}
            <button
              onClick={handleHowItWorksClick}
              className="text-slate-600 hover:text-slate-800"
            >
              How it works
            </button>
            <button
              onClick={handleBlogClick}
              className="text-slate-600 hover:text-slate-800"
            >
              Blog
            </button>
            <button
              onClick={handleMobileAppClick}
              className="text-slate-600 hover:text-slate-800"
            >
              Mobile App
            </button>
            <button
              onClick={handleAboutClick}
              className="text-slate-600 hover:text-slate-800"
            >
              About
            </button>
            {user ? (
              // In the UserMenu component call, update it to:
              <UserMenu
                onProfileClick={handleProfileClick}
                onDashboardClick={handleDashboardClick}
              />
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAuthModal(true)}
              >
                Sign In
              </Button>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Fact-check in <span className="text-blue-600">seconds</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Combat misinformation with AI-powered real-time fact-checking.
            Verify claims instantly against credible sources.
          </p>

          {/* Input Section */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Paste text/URL or type a claim..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="text-lg py-6 pr-12"
                    disabled={isAnalyzing}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                    <Link className="h-5 w-5 text-slate-400" />
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6"
                  disabled={!query.trim() || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analyzing claim...
                    </div>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Fact-Check Now
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Example Queries */}
          <div className="mb-16">
            <p className="text-slate-600 mb-4">Try these examples:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleQueries.map((example, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors px-4 py-2"
                  onClick={() => handleExampleClick(example)}
                >
                  {example}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Analysis</h3>
              </div>
              <p className="text-slate-600">
                Get instant fact-checking results by scanning multiple credible
                news sources simultaneously.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Transparent Sources</h3>
              </div>
              <p className="text-slate-600">
                Every verdict includes clear evidence with source credibility
                ratings and timestamps.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Confidence Scoring</h3>
              </div>
              <p className="text-slate-600">
                Advanced AI provides confidence metrics with detailed
                explanations of verification factors.
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Processing Overlay */}
      {isAnalyzing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Analyzing your claim...
              </h3>
              <p className="text-slate-600 mb-4">Scanning 12 news sources</p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full animate-pulse"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Add the AuthModal before the closing div of the component */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}
