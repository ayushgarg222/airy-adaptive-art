import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Smile, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

const mockMessages: Message[] = [
  { id: "1", text: "Hey! How are you?", sender: "them", timestamp: "10:30 AM" },
  { id: "2", text: "I'm good! You?", sender: "me", timestamp: "10:32 AM" },
  { id: "3", text: "Want to grab coffee sometime?", sender: "them", timestamp: "10:35 AM" },
  { id: "4", text: "That sounds fun!", sender: "me", timestamp: "10:37 AM" },
];

const ChatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleRevealRequest = () => {
    setIsAnonymous(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="container max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/chat")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-semibold flex items-center gap-2">
                {isAnonymous ? "S****h" : "Sarah Miller"}, 26
                {isAnonymous && <span className="text-xs">🎭</span>}
              </h1>
              <p className="text-xs text-muted-foreground">
                {isAnonymous ? "Anonymous" : ""} • 2mi
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-md mx-auto px-4 py-4 space-y-4">
          {/* Reveal Banner */}
          {isAnonymous && (
            <div className="bg-accent/10 border border-accent rounded-lg p-4 space-y-3">
              <p className="text-sm font-medium flex items-center gap-2">
                🎭 Chat is anonymous
              </p>
              <Button
                onClick={handleRevealRequest}
                variant="default"
                size="sm"
                className="w-full"
              >
                Request Reveal (3 💎)
              </Button>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col",
                  message.sender === "me" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[70%] rounded-2xl px-4 py-2",
                    message.sender === "me"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {message.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Input */}
      <div className="sticky bottom-0 bg-card border-t">
        <div className="container max-w-md mx-auto px-4 py-3">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon">
              <Smile className="w-5 h-5" />
            </Button>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!newMessage.trim()}>
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
