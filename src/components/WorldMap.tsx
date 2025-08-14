export const WorldMap = () => {
  return (
    <div className="bg-muted/50 rounded-lg p-6 mb-4">
      {/* Realistic world map representation */}
      <div className="relative w-full h-40 bg-muted/30 rounded-lg overflow-hidden">
        {/* World map with realistic continent shapes */}
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Ocean background */}
          <rect width="800" height="400" fill="currentColor" className="text-muted/20" />
          
          {/* North America */}
          <path d="M50 80 Q80 60 120 70 Q150 75 170 90 Q180 120 160 150 Q140 180 100 170 Q70 160 50 140 Q40 110 50 80 Z" fill="currentColor" className="text-muted-foreground/40" />
          <path d="M120 180 Q140 175 160 185 Q170 200 165 220 Q150 240 130 235 Q110 230 120 180 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* South America */}
          <path d="M140 240 Q160 235 170 250 Q175 280 170 320 Q165 360 155 380 Q145 385 135 375 Q130 350 135 320 Q140 280 140 240 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* Europe */}
          <path d="M350 80 Q380 75 400 85 Q420 95 415 110 Q400 125 380 120 Q360 115 350 100 Q345 90 350 80 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* Africa */}
          <path d="M360 130 Q390 125 410 140 Q425 160 430 200 Q435 250 425 300 Q415 340 400 360 Q380 370 365 360 Q350 340 355 300 Q360 250 365 200 Q360 160 360 130 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* Asia */}
          <path d="M440 70 Q500 65 580 75 Q640 85 680 100 Q720 120 730 150 Q735 180 720 200 Q680 220 640 210 Q580 200 520 195 Q460 190 440 170 Q430 150 435 120 Q440 90 440 70 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* Australia */}
          <path d="M600 280 Q640 275 680 285 Q720 295 730 315 Q735 335 720 345 Q680 355 640 350 Q600 345 590 325 Q585 305 600 280 Z" fill="currentColor" className="text-muted-foreground/40" />
          
          {/* Antarctica (bottom) */}
          <path d="M100 360 Q200 350 300 355 Q400 360 500 355 Q600 350 700 360 Q750 365 780 375 Q790 385 780 395 Q700 400 600 398 Q500 396 400 398 Q300 400 200 398 Q100 396 50 385 Q40 375 50 365 Q75 355 100 360 Z" fill="currentColor" className="text-muted-foreground/40" />
        </svg>
        
        {/* Impact dots with pulsing animation positioned over realistic continents */}
        <div className="absolute inset-0">
          {/* North America */}
          <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-primary rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-[35%] left-[12%] w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse [animation-delay:0.5s]"></div>
          <div className="absolute top-[30%] left-[18%] w-2 h-2 bg-primary rounded-full opacity-70 animate-pulse [animation-delay:1s]"></div>
          
          {/* Europe */}
          <div className="absolute top-[22%] left-[47%] w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse [animation-delay:1.5s]"></div>
          <div className="absolute top-[28%] left-[45%] w-3 h-3 bg-primary rounded-full opacity-80 animate-pulse [animation-delay:2s]"></div>
          
          {/* Africa */}
          <div className="absolute top-[40%] left-[48%] w-3 h-3 bg-primary rounded-full opacity-80 animate-pulse [animation-delay:0.8s]"></div>
          <div className="absolute top-[55%] left-[50%] w-2 h-2 bg-primary rounded-full opacity-70 animate-pulse [animation-delay:1.3s]"></div>
          
          {/* Asia */}
          <div className="absolute top-[25%] left-[65%] w-4 h-4 bg-primary rounded-full opacity-90 animate-pulse [animation-delay:1.8s]"></div>
          <div className="absolute top-[35%] left-[70%] w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse [animation-delay:2.3s]"></div>
          <div className="absolute top-[30%] left-[80%] w-3 h-3 bg-primary rounded-full opacity-75 animate-pulse [animation-delay:0.3s]"></div>
          
          {/* Australia */}
          <div className="absolute top-[75%] left-[78%] w-2 h-2 bg-primary rounded-full opacity-70 animate-pulse [animation-delay:1.7s]"></div>
          
          {/* South America */}
          <div className="absolute top-[50%] left-[20%] w-2 h-2 bg-primary rounded-full opacity-65 animate-pulse [animation-delay:2.5s]"></div>
          <div className="absolute top-[65%] left-[18%] w-3 h-3 bg-primary rounded-full opacity-80 animate-pulse [animation-delay:0.7s]"></div>
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