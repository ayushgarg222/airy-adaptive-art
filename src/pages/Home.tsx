import { useState } from "react";
import { MatchCard } from "@/components/home/MatchCard";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const mockProfiles = [
  {
    id: "1",
    name: "Sarah",
    age: 26,
    distance: 2,
    bio: "Love hiking and exploring new coffee shops...",
    interests: ["Music", "Travel"],
    photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"],
  },
  {
    id: "2",
    name: "Emily",
    age: 24,
    distance: 5,
    bio: "Photographer and food enthusiast. Always looking for the next adventure!",
    interests: ["Photography", "Food", "Art"],
    photos: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800"],
  },
  {
    id: "3",
    name: "Jessica",
    age: 27,
    distance: 3,
    bio: "Fitness instructor by day, Netflix binger by night 😄",
    interests: ["Fitness", "Movies"],
    photos: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800"],
  },
];

const Home = () => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [credits, setCredits] = useState(5);

  const handleSwipe = (direction: "left" | "right") => {
    // Remove the first profile
    setProfiles(profiles.slice(1));
    
    if (direction === "right") {
      // Simulate match chance
      const isMatch = Math.random() > 0.7;
      if (isMatch) {
        // Show match modal (would be implemented)
        console.log("It's a match!");
      }
    }
  };

  const handleFindMatch = () => {
    if (credits > 0) {
      setCredits(credits - 1);
      // Simulate finding a new match
      console.log("Finding match...");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar credits={credits} />
      
      <main className="flex-1 container max-w-md mx-auto px-4 py-6 flex flex-col">
        {profiles.length > 0 ? (
          <>
            <div className="flex-1 flex items-center justify-center">
              <MatchCard profile={profiles[0]} onSwipe={handleSwipe} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-sm">
              <div className="text-6xl">🔍</div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">Ready to find someone?</h2>
                <p className="text-muted-foreground">
                  Click below to get matched with someone who shares your interests!
                </p>
              </div>
              
              <Button
                onClick={handleFindMatch}
                disabled={credits === 0}
                size="lg"
                className="w-full"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Find Match (1 💎)
              </Button>
              
              <div className="text-sm text-muted-foreground space-y-1 pt-4">
                <p className="font-semibold">How it works:</p>
                <ul className="space-y-1">
                  <li>• We find someone for you</li>
                  <li>• Chat anonymously first</li>
                  <li>• Reveal when ready</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
