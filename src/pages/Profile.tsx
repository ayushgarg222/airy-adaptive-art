import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Settings, MapPin, LogOut, Upload } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [credits, setCredits] = useState(5);

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      
      <main className="flex-1 container max-w-md mx-auto pb-20">
        <div className="p-4 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your Profile</h1>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>

          {/* Profile Photo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">John Doe, 28</h2>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </div>

          <Separator />

          {/* Credits */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">💎 Credits: {credits}</span>
            </div>
            <Button variant="default" className="w-full">
              Get More Credits
            </Button>
          </div>

          <Separator />

          {/* About Me */}
          <div className="space-y-2">
            <h3 className="font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Love hiking, coffee, and exploring new places. Always up for an adventure!
            </p>
          </div>

          <Separator />

          {/* Interests */}
          <div className="space-y-3">
            <h3 className="font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">✈️ Travel</Badge>
              <Badge variant="secondary">🎵 Music</Badge>
              <Badge variant="secondary">☕ Coffee</Badge>
              <Badge variant="secondary">🏔️ Hiking</Badge>
            </div>
          </div>

          <Separator />

          {/* Preferences */}
          <div className="space-y-2">
            <h3 className="font-semibold">Preferences</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Looking for: Women</p>
              <p>Age: 24-32</p>
              <p>Distance: 25 miles</p>
            </div>
          </div>

          <Separator />

          {/* Photos */}
          <div className="space-y-3">
            <h3 className="font-semibold">My Photos</h3>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-muted overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=200`}
                    alt={`Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors flex items-center justify-center">
                <Upload className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <Separator />

          {/* Sign Out */}
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
