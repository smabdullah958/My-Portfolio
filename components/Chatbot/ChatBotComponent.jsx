"use client";

import { Bot } from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatWindow() {
  return (
    <Card
      className="
      fixed
      bottom-24
      right-6
      z-50
      bg-zinc-100
      border-zinc-800
      shadow-2xl
      flex
      flex-col
      h-72
      w-60
    "
    >
      <CardHeader className="flex-row items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>

          <div>
            <h2 className="font-semibold">AI Assistant</h2>
            <p className="text-xs text-muted-foreground">Ask me anything</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-4 py-4">
          {/* Messages go here */}
        </ScrollArea>
      </CardContent>

      <CardFooter className="gap-2 border-t border-zinc-800">
        <Input placeholder="Type a message..." />

        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
