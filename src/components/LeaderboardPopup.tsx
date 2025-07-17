import React from "react";
import { Trophy, Medal, Crown, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
  rank: number;
  avatar: string;
  badge?: string;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: 1, name: "Sarah Green", points: 2847, rank: 1, avatar: "SG", badge: "Eco Warrior" },
  { id: 2, name: "Mike Chen", points: 2234, rank: 2, avatar: "MC", badge: "Tree Hugger" },
  { id: 3, name: "Alex Rivera", points: 1998, rank: 3, avatar: "AR", badge: "Climate Hero" },
  { id: 4, name: "Emma Davis", points: 1756, rank: 4, avatar: "ED" },
  { id: 5, name: "Jordan Smith", points: 1653, rank: 5, avatar: "JS" },
  { id: 6, name: "You", points: 1247, rank: 6, avatar: "YO", badge: "Rising Star" },
  { id: 7, name: "Taylor Brown", points: 1156, rank: 7, avatar: "TB" },
  { id: 8, name: "Casey Wilson", points: 1089, rank: 8, avatar: "CW" },
  { id: 9, name: "Sam Johnson", points: 987, rank: 9, avatar: "SJ" },
  { id: 10, name: "Riley Kim", points: 876, rank: 10, avatar: "RK" },
];

interface LeaderboardPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeaderboardPopup = ({ open, onOpenChange }: LeaderboardPopupProps) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground w-6 text-center">{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "border-yellow-200 bg-yellow-50";
      case 2:
        return "border-gray-200 bg-gray-50";
      case 3:
        return "border-amber-200 bg-amber-50";
      default:
        return "border-border bg-background";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Trophy className="w-6 h-6 text-warning" />
            Global Leaderboard
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3">
          {leaderboardData.map((entry) => (
            <div
              key={entry.id}
              className={`flex items-center gap-3 p-3 rounded-lg border ${getRankColor(entry.rank)} ${
                entry.name === "You" ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Rank */}
              <div className="flex-shrink-0 w-8 flex justify-center">
                {getRankIcon(entry.rank)}
              </div>

              {/* Avatar */}
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {entry.avatar}
                </AvatarFallback>
              </Avatar>

              {/* User info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`font-medium truncate ${entry.name === "You" ? "text-primary" : ""}`}>
                    {entry.name}
                  </span>
                  {entry.name === "You" && (
                    <Star className="w-4 h-4 text-primary fill-current" />
                  )}
                </div>
                {entry.badge && (
                  <Badge variant="secondary" className="text-xs mt-1">
                    {entry.badge}
                  </Badge>
                )}
              </div>

              {/* Points */}
              <div className="text-right">
                <div className="font-bold text-primary">
                  {entry.points.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            Keep making ripples to climb the ranks! 🌊
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};