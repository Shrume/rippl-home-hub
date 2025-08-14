import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const WaveSection = () => {
  return (
    <div className="mx-4 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Current Wave</h2>
      
      <div className="bg-muted/50 rounded-2xl p-4 space-y-4">
        {/* Wave Title */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground">Pick up pieces of trash</h3>
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            Sustainability
          </Badge>
        </div>
        
        {/* Wave Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {/* Participants */}
          <div className="bg-background rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Participants</div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-foreground">100</span>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
          </div>
          
          {/* Pieces Collected */}
          <div className="bg-background rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Pieces collected</div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-foreground">100</span>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
          </div>
          
          {/* CO₂ Offset */}
          <div className="bg-background rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">CO₂ offset (kg)</div>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-foreground">1.02</span>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};