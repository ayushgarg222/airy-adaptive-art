import { Link } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const mockChats = [
  {
    id: "1",
    name: "Sarah",
    age: 26,
    lastMessage: "Hey! How are you?",
    timestamp: "2 min ago",
    unreadCount: 2,
    isAnonymous: true,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    id: "2",
    name: "Emily",
    age: 24,
    lastMessage: "That sounds fun!",
    timestamp: "1 hour ago",
    unreadCount: 1,
    isAnonymous: true,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    id: "3",
    name: "Jessica Miller",
    age: 27,
    lastMessage: "See you then!",
    timestamp: "Yesterday",
    unreadCount: 0,
    isAnonymous: false,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
  },
];

const ChatList = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar />
      
      <main className="flex-1 container max-w-md mx-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Your Matches
          </h1>

          {mockChats.length > 0 ? (
            <div className="space-y-3">
              {mockChats.map((chat) => (
                <Link
                  key={chat.id}
                  to={`/chat/${chat.id}`}
                  className="block"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors border">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                        <img
                          src={chat.photo}
                          alt={chat.name}
                          className={chat.isAnonymous ? "blur-md" : ""}
                        />
                      </div>
                      {chat.unreadCount > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs"
                        >
                          {chat.unreadCount}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold truncate">
                          {chat.isAnonymous ? chat.name[0] + "****" : chat.name}, {chat.age}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {chat.timestamp}
                        </span>
                      </div>
                      <p className={`text-sm truncate ${chat.unreadCount > 0 ? "font-medium" : "text-muted-foreground"}`}>
                        {chat.lastMessage}
                      </p>
                      {chat.isAnonymous && (
                        <span className="text-xs text-muted-foreground">🎭 Anonymous</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl">💬</div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold">No matches yet!</h2>
                <p className="text-muted-foreground">
                  Start swiping to find your perfect match
                </p>
              </div>
              <Link to="/home">
                <Button size="lg">Start Matching</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ChatList;
