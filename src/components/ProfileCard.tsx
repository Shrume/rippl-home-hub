import { Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProfileCard = () => {
  return (
    <div className="mx-4 mb-6">
      <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
        {/* Profile Avatar and Info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gradient-teal-blue rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">R</span>
            </div>
            
            {/* User Info */}
            <div>
              <h2 className="text-xl font-bold text-foreground">AmbitiousWave</h2>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  Sustainability
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Equality
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Edit Button */}
          <Button variant="ghost" size="sm" className="p-2">
            <Edit className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
        
        {/* Profile Description */}
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            This is a short profile description
          </p>
        </div>
      </div>
    </div>
  );
};