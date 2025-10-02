import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

interface StepTwoProps {
  onNext: () => void;
  onBack: () => void;
}

export const OnboardingStepTwo = ({ onNext, onBack }: StepTwoProps) => {
  const [photos, setPhotos] = useState<(string | null)[]>([null, null, null, null]);

  const handlePhotoUpload = (index: number) => {
    // Simulate photo upload
    const newPhotos = [...photos];
    newPhotos[index] = `https://images.unsplash.com/photo-${Math.random()}`;
    setPhotos(newPhotos);
  };

  const handlePhotoRemove = (index: number) => {
    const newPhotos = [...photos];
    newPhotos[index] = null;
    setPhotos(newPhotos);
  };

  const canProceed = photos.filter((p) => p !== null).length >= 2;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Add your photos 📸</h2>
        <p className="text-sm text-muted-foreground">Add at least 2 photos</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="aspect-square relative">
            {photo ? (
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-primary">
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                <button
                  onClick={() => handlePhotoRemove(index)}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:scale-110 transition-transform"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handlePhotoUpload(index)}
                className="w-full h-full rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors flex flex-col items-center justify-center gap-2 hover:bg-muted/50"
              >
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Photo {index + 1}</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
        <p className="text-xs font-semibold">Tips:</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Use recent photos</li>
          <li>• Show your face clearly</li>
          <li>• Smile! :)</li>
        </ul>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button onClick={onNext} disabled={!canProceed} className="flex-1">
          Next
        </Button>
      </div>
    </div>
  );
};
