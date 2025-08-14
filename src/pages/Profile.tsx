import { useState } from "react";
import { MobileHeader } from "@/components/MobileHeader";
import { ProfileCard } from "@/components/ProfileCard";
import { WorldMap } from "@/components/WorldMap";
import { BottomTabBar } from "@/components/BottomTabBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <MobileHeader />
      
      {/* Main Content */}
      <main className="flex-1 pt-6 pb-20">
        {/* Profile Card */}
        <ProfileCard />
        
        {/* Impact Section */}
        <div className="mx-4">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="mb-6 bg-muted w-full">
              <TabsTrigger value="individual" className="flex-1 text-sm">Individual Impact</TabsTrigger>
              <TabsTrigger value="communal" className="flex-1 text-sm">Communal Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-0">
              {/* World Map */}
              <WorldMap />
              
              {/* Bottom Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">CO₂ Offset (kg)</div>
                  <div className="text-2xl font-bold text-foreground">11.6</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Power Saved (kWh)</div>
                  <div className="text-2xl font-bold text-foreground">25.9</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="communal" className="mt-0">
              {/* Communal Impact Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Rippls Completed</div>
                  <div className="text-3xl font-bold text-primary">22</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Waves Participated</div>
                  <div className="text-3xl font-bold text-primary">3</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">People Reached</div>
                  <div className="text-3xl font-bold text-primary">2.1k</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Countries Reached</div>
                  <div className="text-3xl font-bold text-primary">15</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">CO₂ Offset (kg)</div>
                  <div className="text-3xl font-bold text-primary">11.6</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Power Saved (kWh)</div>
                  <div className="text-3xl font-bold text-primary">25.9</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <BottomTabBar />
    </div>
  );
};

export default Profile;