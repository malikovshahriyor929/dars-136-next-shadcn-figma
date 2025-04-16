"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hi, how can I help you today?" },
    { sender: "user", text: "Hey, I'm having trouble with my account." },
    { sender: "agent", text: "What seems to be the problem?" },
    { sender: "user", text: "I can't log in." },
    { sender: "agent", text: "What seems to be the problem?" },
    { sender: "user", text: "I can't log in." },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <>
      <Card className="w-full min-h-[500px] rounded-xl">
        <CardContent className="space-y-4 p-4">
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.sender === "agent"
                    ? "bg-zinc-800 text-white self-start"
                    : "bg-white text-black self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-zinc-800 pt-2">
            <Input
              placeholder="Type your message..."
              className="bg-zinc-800 text-white border-none focus:ring-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button
              onClick={handleSend}
              className="bg-zinc-700 hover:bg-zinc-600"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
