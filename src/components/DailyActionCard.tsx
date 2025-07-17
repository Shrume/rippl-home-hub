import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DailyActionCardProps {
  onStartAction: () => void;
}

export const DailyActionCard = ({ onStartAction }: DailyActionCardProps) => {
  return (
    <div className="relative bg-gradient-teal-blue rounded-2xl p-6 text-white shadow-glow mx-4 mb-6">
      {/* Points badge */}
      <Badge 
        variant="secondary" 
        className="absolute top-4 right-4 bg-white/20 text-white border-white/30 backdrop-blur-sm"
      >
        +50 pts
      </Badge>

      {/* Category chip */}
      <Badge 
        variant="outline" 
        className="bg-white/10 text-white border-white/30 mb-4 backdrop-blur-sm"
      >
        Environment
      </Badge>

      {/* Content */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold leading-tight">
          Plant a tree in your neighborhood
        </h2>
        
        <p className="text-white/90 text-sm leading-relaxed">
          Join thousands making a difference! Find a local spot and plant a native tree species to help combat climate change.
        </p>
      </div>

      {/* Start button */}
      <Button 
        onClick={onStartAction}
        className="absolute bottom-4 right-4 bg-white text-primary hover:bg-white/90 font-medium"
        size="sm"
      >
        Start now
        <ArrowRight className="ml-1 w-4 h-4" />
      </Button>
    </div>
  );
};