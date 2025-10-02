import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface StepThreeProps {
  onNext: () => void;
  onBack: () => void;
}

const interests = [
  "Travel", "Music", "Sports", "Movies", "Food", "Art",
  "Reading", "Gaming", "Fitness", "Photography", "Cooking", "Dancing"
];

export const OnboardingStepThree = ({ onNext, onBack }: StepThreeProps) => {
  const [bio, setBio] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const maxBioLength = 150;
  const maxInterests = 5;

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < maxInterests) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Tell us about you ✍️</h2>
        <p className="text-sm text-muted-foreground">Share your story</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Write a short bio..."
          value={bio}
          onChange={(e) => {
            if (e.target.value.length <= maxBioLength) {
              setBio(e.target.value);
            }
          }}
          rows={4}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground text-right">
          {bio.length}/{maxBioLength} characters
        </p>
      </div>

      <div className="space-y-3">
        <Label>Interests (select up to {maxInterests})</Label>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge
              key={interest}
              variant={selectedInterests.includes(interest) ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
              onClick={() => toggleInterest(interest)}
            >
              {interest}
              {selectedInterests.includes(interest) && " ✓"}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {selectedInterests.length}/{maxInterests} selected
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Next
        </Button>
      </div>
    </div>
  );
};
