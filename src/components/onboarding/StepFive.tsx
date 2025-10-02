import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface StepFiveProps {
  onComplete: () => void;
  onBack: () => void;
}

export const OnboardingStepFive = ({ onComplete, onBack }: StepFiveProps) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Almost done! 🎉</h2>
        <p className="text-sm text-muted-foreground">Review your profile</p>
      </div>

      {/* Photo Preview */}
      <div className="rounded-lg border p-4">
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-md bg-muted" />
          ))}
        </div>

        <div className="space-y-3">
          <div>
            <p className="font-semibold text-lg">John, 28 📍 San Francisco</p>
          </div>

          <div className="text-sm text-muted-foreground">
            "Love hiking and coffee shops. Always up for an adventure!"
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">✈️ Travel</Badge>
            <Badge variant="secondary">🎵 Music</Badge>
            <Badge variant="secondary">☕ Coffee</Badge>
          </div>

          <div className="text-sm space-y-1 pt-2 border-t">
            <p className="text-muted-foreground">Looking for: Women</p>
            <p className="text-muted-foreground">Age: 24-32 • Distance: 25mi</p>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2 bg-muted/50 p-4 rounded-lg">
        <Checkbox
          id="terms"
          checked={agreedToTerms}
          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
        />
        <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
          I agree to the Terms of Service and Privacy Policy
        </Label>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onComplete} disabled={!agreedToTerms} className="flex-1">
          Complete
        </Button>
      </div>
    </div>
  );
};
