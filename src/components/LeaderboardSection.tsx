import { Crown, Medal, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  rank: number;
  avatar: string;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: "1", name: "Alex Green", points: 2847, rank: 1, avatar: "AG" },
  { id: "2", name: "Sarah Ocean", points: 2156, rank: 2, avatar: "SO" },
  { id: "3", name: "Mike Forest", points: 1998, rank: 3, avatar: "MF" },
  { id: "4", name: "You", points: 1247, rank: 4, avatar: "YU", isCurrentUser: true },
  { id: "5", name: "Emma Earth", points: 1089, rank: 5, avatar: "EE" },
];

export const LeaderboardSection = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-4 h-4 text-warning" />;
      case 2:
        return <Medal className="w-4 h-4 text-muted-foreground" />;
      case 3:
        return <Medal className="w-4 h-4 text-warning/60" />;
      default:
        return <span className="text-sm font-medium text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-warning/10 border-warning/20";
      case 2:
        return "bg-muted/50 border-border";
      case 3:
        return "bg-warning/5 border-warning/10";
      default:
        return "bg-background border-border";
    }
  };

  return (
    <Card className="mx-4 mb-6 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-warning" />
        <h2 className="text-lg font-semibold text-foreground">Leaderboard</h2>
      </div>
      
      <div className="space-y-2">
        {leaderboardData.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${getRankStyle(entry.rank)} ${
              entry.isCurrentUser ? "ring-2 ring-primary/20" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(entry.rank)}
              </div>
              
              <Avatar className="w-8 h-8 bg-primary/10">
                <div className="w-full h-full flex items-center justify-center text-xs font-medium text-primary">
                  {entry.avatar}
                </div>
              </Avatar>
              
              <span className={`font-medium ${entry.isCurrentUser ? "text-primary" : "text-foreground"}`}>
                {entry.name}
              </span>
            </div>
            
            <span className="text-sm font-medium text-muted-foreground">
              {entry.points.toLocaleString()} pts
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};