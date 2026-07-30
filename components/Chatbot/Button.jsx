"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Bot } from "lucide-react";
import ChatWindow from "@/components/Chatbot/ChatBotComponent";

const ChatBot = () => {
  let [ShowChatBot, SetShowChatbot] = useState(false);

  return (
    <div>
      <Button
        className="fixed text-end bottom-20 text-blue-500 right-5  z-50 px-4 py-3"
        variant="default"
        onClick={() => SetShowChatbot(true)}
      >
        <Bot className="size-6" />
        {ShowChatBot && <ChatWindow />}
      </Button>
    </div>
  );
};

export default ChatBot;
