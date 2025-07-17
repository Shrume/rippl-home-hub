import { Bell, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ripplLogo from "@/assets/rippl-logo.png";

export const MobileHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-background border-b border-border">
      {/* RIPPL Logo */}
      <div className="flex items-center">
        <div className="text-xl font-bold text-primary">
          RIPPL
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        {/* Points pill */}
        <div className="flex items-center bg-primary/10 rounded-full px-3 py-1.5 gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-medium text-primary">1,247</span>
        </div>
        
        {/* Trophy */}
        <Trophy className="w-5 h-5 text-warning" />
        
        {/* Notifications */}
        <div className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-warning rounded-full"></div>
        </div>
      </div>
    </header>
  );
};