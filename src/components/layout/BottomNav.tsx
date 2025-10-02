import { NavLink } from "react-router-dom";
import { Home, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/chat", icon: MessageCircle, label: "Matches" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="sticky bottom-0 z-50 bg-card border-t shadow-lg">
      <div className="container max-w-md mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 min-w-[60px] py-2 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
                  <span className={cn("text-xs", isActive && "font-semibold")}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
