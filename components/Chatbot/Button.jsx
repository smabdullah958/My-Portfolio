"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import ChatWindow from "@/components/Chatbot/ChatBotComponent";

export default function ChatBot() {
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {showChatBot && <ChatWindow />}

      {/* Floating Button */}
      <Button
        size="icon"
        onClick={() => setShowChatBot(!showChatBot)}
        className={`
          fixed
          right-6
          z-50
          transition-all
          duration-800
          ${showChatBot ? " bottom-[365px] bg-red-400 hover:bg-red-500 rounded-full " : "bottom-20 bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full"}
        `}
      >
        {showChatBot ? <X className="size-4 " /> : <Bot className="size-5" />}
      </Button>
    </>
  );
}
