import { Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface ImpactScreenProps {
  onBackToHome: () => void;
}

export const ImpactScreen = ({ onBackToHome }: ImpactScreenProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col max-w-md mx-auto relative overflow-hidden">
      {/* Confetti overlay */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
        {/* Success Icon */}
        <div className="relative">
          <div className="w-32 h-32 bg-success rounded-full flex items-center justify-center shadow-soft animate-scale-in">
            <Check className="w-16 h-16 text-white" strokeWidth={3} />
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-success/20 rounded-full animate-pulse" />
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Rippl complete! 🎉
          </h1>
          
          <div className="space-y-3">
            <p className="text-xl font-semibold text-success">
              +50 Spiral Points
            </p>
            
            {/* New Points Total */}
            <Badge 
              variant="outline" 
              className="bg-primary/5 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
            >
              Total: 1,297 points
            </Badge>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 w-full border border-border/50">
          <h3 className="font-semibold text-foreground mb-4">Your Impact</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-xs text-muted-foreground">Tree planted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2.3</div>
              <div className="text-xs text-muted-foreground">CO₂ offset (kg)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">10</div>
              <div className="text-xs text-muted-foreground">Lives touched</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <div className="p-6 space-y-3">
        {/* Share Button */}
        <Button 
          variant="outline" 
          className="w-full h-12 border-primary text-primary hover:bg-primary/5"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share wave
        </Button>
        
        {/* Back to Home */}
        <Button 
          onClick={onBackToHome}
          className="w-full h-14 text-lg font-semibold bg-gradient-teal-blue text-white shadow-glow"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};