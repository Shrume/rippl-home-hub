import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MobileHeader } from "@/components/MobileHeader";
import { DailyActionCard } from "@/components/DailyActionCard";
import { RipplsList } from "@/components/RipplsList";
import { WaveSection } from "@/components/WaveSection";
import { BottomTabBar } from "@/components/BottomTabBar";

import { DoRipplScreen } from "@/components/DoRipplScreen";
import { ImpactScreen } from "@/components/ImpactScreen";

type ScreenType = "home" | "do-rippl" | "impact";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleStartAction = () => {
    setCurrentScreen("do-rippl");
  };

  const handleCompleteRippl = () => {
    setCurrentScreen("impact");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
  };

  // Render Do Rippl Screen
  if (currentScreen === "do-rippl") {
    return (
      <DoRipplScreen 
        onComplete={handleCompleteRippl}
        onBack={handleBackToHome}
      />
    );
  }

  // Render Impact Screen
  if (currentScreen === "impact") {
    return (
      <ImpactScreen 
        onBackToHome={handleBackToHome}
      />
    );
  }

  // Render Home Screen
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <MobileHeader />
      
      {/* Main Content */}
      <main className="flex-1 pt-6 pb-20">
        {/* Wave Section */}
        <WaveSection />
        
        {/* Rippl Section */}
        <div className="mx-4 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Rippl</h2>
          <DailyActionCard onStartAction={handleStartAction} />
        </div>
        
        {/* Rippls List */}
        <RipplsList />
      </main>
      
      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
};

export default Index;
