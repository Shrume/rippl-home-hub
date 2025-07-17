import { Home, Users, User } from "lucide-react";

export const BottomTabBar = () => {
  return (
    <nav className="bg-card border-t border-border px-4 py-2">
      <div className="flex items-center justify-around">
        {/* Home - Active */}
        <button className="flex flex-col items-center gap-1 py-2 px-4">
          <Home className="w-6 h-6 text-primary fill-primary" />
          <span className="text-xs text-primary font-medium">Home</span>
        </button>
        
        {/* Community */}
        <button className="flex flex-col items-center gap-1 py-2 px-4">
          <Users className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Community</span>
        </button>
        
        {/* Profile */}
        <button className="flex flex-col items-center gap-1 py-2 px-4">
          <User className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Profile</span>
        </button>
      </div>
    </nav>
  );
};