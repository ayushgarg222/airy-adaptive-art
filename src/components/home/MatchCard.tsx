import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Heart, Info, MapPin } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Profile {
  id: string;
  name: string;
  age: number;
  distance: number;
  bio: string;
  interests: string[];
  photos: string[];
}

interface MatchCardProps {
  profile: Profile;
  onSwipe: (direction: "left" | "right") => void;
}

export const MatchCard = ({ profile, onSwipe }: MatchCardProps) => {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x > 0 ? 200 : -200);
      onSwipe(info.offset.x > 0 ? "right" : "left");
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-sm h-[500px] cursor-grab active:cursor-grabbing"
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-card">
        {/* Photo */}
        <div className="relative h-3/4">
          <img
            src={profile.photos[0]}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold">
              {profile.name}, {profile.age}
            </h2>
            <p className="flex items-center gap-1 text-sm opacity-90">
              <MapPin className="w-4 h-4" />
              {profile.distance} miles away
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-3">
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <Badge key={interest} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{profile.bio}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute -bottom-20 left-0 right-0 flex justify-center items-center gap-4">
        <Button
          size="icon"
          variant="outline"
          className="w-14 h-14 rounded-full shadow-lg bg-card hover:bg-destructive hover:text-destructive-foreground transition-colors"
          onClick={() => onSwipe("left")}
        >
          <X className="w-6 h-6" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="w-12 h-12 rounded-full shadow-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Info className="w-5 h-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="w-14 h-14 rounded-full shadow-lg bg-card hover:bg-success hover:text-success-foreground transition-colors"
          onClick={() => onSwipe("right")}
        >
          <Heart className="w-6 h-6" />
        </Button>
      </div>
    </motion.div>
  );
};
