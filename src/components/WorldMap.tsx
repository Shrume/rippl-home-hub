export const WorldMap = () => {
  return (
    <div className="bg-muted/50 rounded-lg p-6 mb-4">
      {/* Simplified world map representation */}
      <div className="relative w-full h-40 bg-muted rounded-lg overflow-hidden">
        {/* World map background (simplified representation) */}
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-30">
          <rect width="400" height="200" fill="currentColor" className="text-muted-foreground/20" />
          {/* Simplified continent shapes */}
          <path d="M50 80 L120 70 L140 90 L100 120 L60 110 Z" fill="currentColor" className="text-muted-foreground/40" />
          <path d="M160 60 L240 55 L260 85 L220 130 L180 125 Z" fill="currentColor" className="text-muted-foreground/40" />
          <path d="M280 70 L350 65 L360 95 L340 140 L300 135 Z" fill="currentColor" className="text-muted-foreground/40" />
        </svg>
        
        {/* Impact dots */}
        <div className="absolute inset-0">
          {/* Various sized dots representing impact locations */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full opacity-80"></div>
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary rounded-full opacity-60"></div>
          <div className="absolute top-2/5 left-1/3 w-4 h-4 bg-primary rounded-full opacity-90"></div>
          <div className="absolute top-1/2 left-2/5 w-2 h-2 bg-primary rounded-full opacity-70"></div>
          <div className="absolute top-3/5 left-1/5 w-3 h-3 bg-primary rounded-full opacity-80"></div>
          
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary rounded-full opacity-60"></div>
          <div className="absolute top-2/5 right-1/4 w-3 h-3 bg-primary rounded-full opacity-80"></div>
          <div className="absolute top-1/2 right-2/5 w-2 h-2 bg-primary rounded-full opacity-70"></div>
          
          <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-primary rounded-full opacity-60"></div>
          <div className="absolute top-3/5 right-1/6 w-3 h-3 bg-primary rounded-full opacity-80"></div>
        </div>
      </div>
      
      {/* Global Impact Stats */}
      <div className="flex justify-center gap-8 mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">15</div>
          <div className="text-sm text-muted-foreground">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">2.1k</div>
          <div className="text-sm text-muted-foreground">People Reached</div>
        </div>
      </div>
    </div>
  );
};