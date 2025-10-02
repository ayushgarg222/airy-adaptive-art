import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface StepFourProps {
  onNext: () => void;
  onBack: () => void;
}

export const OnboardingStepFour = ({ onNext, onBack }: StepFourProps) => {
  const [interestedIn, setInterestedIn] = useState<string[]>([]);
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [maxDistance, setMaxDistance] = useState([25]);
  const [lookingFor, setLookingFor] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (interestedIn.includes(interest)) {
      setInterestedIn(interestedIn.filter((i) => i !== interest));
    } else {
      setInterestedIn([...interestedIn, interest]);
    }
  };

  const toggleLookingFor = (option: string) => {
    if (lookingFor.includes(option)) {
      setLookingFor(lookingFor.filter((i) => i !== option));
    } else {
      setLookingFor([...lookingFor, option]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Your preferences 🎯</h2>
        <p className="text-sm text-muted-foreground">Who are you looking for?</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label>I'm interested in:</Label>
          <div className="flex gap-3 flex-wrap">
            {["Men", "Women", "Everyone"].map((option) => (
              <Button
                key={option}
                variant={interestedIn.includes(option) ? "default" : "outline"}
                onClick={() => toggleInterest(option)}
                className="flex-1 min-w-[80px]"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Age range:</Label>
            <span className="text-sm text-muted-foreground">
              {ageRange[0]} - {ageRange[1]}
            </span>
          </div>
          <Slider
            min={18}
            max={99}
            step={1}
            value={ageRange}
            onValueChange={setAgeRange}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Maximum distance:</Label>
            <span className="text-sm text-muted-foreground">{maxDistance[0]} miles</span>
          </div>
          <Slider
            min={1}
            max={100}
            step={1}
            value={maxDistance}
            onValueChange={setMaxDistance}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <Label>Looking for:</Label>
          <div className="space-y-2">
            {["Relationship", "Friendship", "Something Fun"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={lookingFor.includes(option)}
                  onCheckedChange={() => toggleLookingFor(option)}
                />
                <Label htmlFor={option} className="font-normal cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </div>
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
