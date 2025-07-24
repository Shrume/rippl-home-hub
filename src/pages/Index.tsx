import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { DailyActionCard } from "@/components/DailyActionCard";
import { RipplsList } from "@/components/RipplsList";

import { DoRipplScreen } from "@/components/DoRipplScreen";
import { ImpactScreen } from "@/components/ImpactScreen";

type ScreenType = "home" | "do-rippl" | "impact";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home");

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
      <main className="flex-1 pt-6">
        {/* Daily Action Card */}
        <DailyActionCard onStartAction={handleStartAction} />
        
        {/* Rippls List */}
        <RipplsList />
      </main>
      
    </div>
  );
};

export default Index;
