import { Home, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHome = location.pathname === "/";
  const isProfile = location.pathname === "/profile";
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 max-w-md mx-auto z-50">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button 
          className="flex flex-col items-center gap-1 py-2 px-4"
          onClick={() => navigate("/")}
        >
          <Home className={`w-6 h-6 ${isHome ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
          <span className={`text-xs font-medium ${isHome ? 'text-primary' : 'text-muted-foreground'}`}>Home</span>
        </button>
        
        {/* Profile */}
        <button 
          className="flex flex-col items-center gap-1 py-2 px-4"
          onClick={() => navigate("/profile")}
        >
          <User className={`w-6 h-6 ${isProfile ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
          <span className={`text-xs font-medium ${isProfile ? 'text-primary' : 'text-muted-foreground'}`}>Profile</span>
        </button>
      </div>
    </nav>
  );
};