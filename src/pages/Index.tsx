import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Sparkles, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <Heart className="w-12 h-12 text-primary fill-primary relative" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">S.T.A.R.T.</h1>
            <p className="text-lg text-muted-foreground">Dating App</p>
          </div>

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed">
            Find meaningful connections with people who share your interests.
          </p>

          {/* CTA Button */}
          <Link to="/auth/signin" className="w-full">
            <Button size="lg" className="w-full text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              Get Started
            </Button>
          </Link>

          {/* Info Text */}
          <p className="text-sm text-muted-foreground">
            New here? Sign up takes less than 2 minutes
          </p>

          {/* Features */}
          <div className="pt-4 border-t border-border w-full">
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                Secure
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Anonymous
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5" />
                Free
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
