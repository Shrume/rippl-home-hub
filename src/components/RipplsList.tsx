import { Users, Trash2, Leaf } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RipplCard = () => {
  return (
    <div className="bg-muted rounded-xl p-4 mx-4 mb-4 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="bg-success/10 p-2 rounded-lg">
          <Trash2 className="w-5 h-5 text-success" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">
            Pick up pieces of trash
          </h3>
          
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="text-lg font-bold text-foreground">1,247</div>
              <div className="text-xs text-muted-foreground">participants</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trash2 className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="text-lg font-bold text-foreground">8,562</div>
              <div className="text-xs text-muted-foreground">pieces collected</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Leaf className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="text-lg font-bold text-foreground">142.3</div>
              <div className="text-xs text-muted-foreground">CO₂ offset (kg)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RipplsList = () => {
  return (
    <div className="flex-1">
      <Tabs defaultValue="your-rippls" className="w-full">
        <TabsList className="mx-4 mb-4 bg-muted w-auto">
          <TabsTrigger value="your-rippls" className="text-sm">Your Rippls</TabsTrigger>
          <TabsTrigger value="trending" className="text-sm">Trending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="your-rippls" className="mt-0">
          <RipplCard />
        </TabsContent>
        
        <TabsContent value="trending" className="mt-0">
          <div className="text-center text-muted-foreground p-8">
            <p>Trending rippls coming soon!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};