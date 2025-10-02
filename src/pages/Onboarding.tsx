import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { OnboardingStepOne } from "@/components/onboarding/StepOne";
import { OnboardingStepTwo } from "@/components/onboarding/StepTwo";
import { OnboardingStepThree } from "@/components/onboarding/StepThree";
import { OnboardingStepFour } from "@/components/onboarding/StepFour";
import { OnboardingStepFive } from "@/components/onboarding/StepFive";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/home");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStepOne onNext={handleNext} />;
      case 2:
        return <OnboardingStepTwo onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <OnboardingStepThree onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <OnboardingStepFour onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <OnboardingStepFive onComplete={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 md:p-8 shadow-xl">
        {/* Progress Header */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i + 1 <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">
              Step {currentStep}/{totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        {renderStep()}
      </Card>
    </div>
  );
};

export default Onboarding;
