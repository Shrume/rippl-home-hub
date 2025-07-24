import { LogOut, Trophy, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ripplLogo from "@/assets/rippl-logo.png";
import { useState } from "react";
import { LeaderboardPopup } from "./LeaderboardPopup";

export const MobileHeader = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
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
        {/* Streak Counter */}
        <div className="flex items-center bg-warning/10 rounded-full px-3 py-1.5 gap-2">
          <Flame className="w-4 h-4 text-warning" />
          <span className="text-sm font-medium text-warning">12</span>
        </div>
        
        {/* Points pill */}
        <div className="flex items-center bg-primary/10 rounded-full px-3 py-1.5 gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-medium text-primary">1,247</span>
        </div>
        
        {/* Trophy */}
        <Trophy 
          className="w-5 h-5 text-warning hover:scale-110 transition-transform cursor-pointer"
          onClick={() => setShowLeaderboard(true)}
        />
        
        {/* Logout */}
        <LogOut 
          className="w-5 h-5 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            window.location.reload();
          }}
        />
      </div>
      
      {/* Leaderboard Popup */}
      <LeaderboardPopup 
        open={showLeaderboard} 
        onOpenChange={setShowLeaderboard} 
      />
    </header>
  );
};