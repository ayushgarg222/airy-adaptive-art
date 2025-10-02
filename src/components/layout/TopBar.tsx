import { Heart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TopBarProps {
  credits?: number;
}

export const TopBar = ({ credits }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b">
      <div className="container max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="font-bold text-lg">S.T.A.R.T.</span>
        </Link>

        <div className="flex items-center gap-3">
          {credits !== undefined && (
            <Badge variant="secondary" className="gap-1">
              💎 {credits}
            </Badge>
          )}
          
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
