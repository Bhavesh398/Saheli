import { useEffect, useRef } from "react";
import { SarthiHeader } from "@/components/chat/SarthiHeader";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { WelcomeSection } from "@/components/chat/WelcomeSection";
import { FloatingOrbs } from "@/components/chat/FloatingOrbs";
import { WomenSilhouettes } from "@/components/chat/WomenSilhouettes";
import { EmpowermentQuotes } from "@/components/chat/EmpowermentQuotes";
import { GlitterEffect } from "@/components/chat/GlitterEffect";
import { CursorGlow } from "@/components/chat/CursorGlow";
import { useSarthiChat } from "@/hooks/useSarthiChat";

const Index = () => {
  const { messages, isLoading, sendMessage } = useSarthiChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex h-screen flex-col sarthi-gradient overflow-hidden fade-in">
      {/* Women silhouettes - upliftment theme */}
      <WomenSilhouettes />

      {/* Empowerment quotes */}
      <EmpowermentQuotes />

      {/* Glitter and falling petals effect */}
      <GlitterEffect />

      {/* Floating orbs background */}
      <FloatingOrbs />

      {/* Cursor glow trail effect */}
      <CursorGlow />

      {/* Ambient light effect */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(var(--sarthi-rose) / 0.08) 0%, transparent 50%)",
        }}
      />

      <SarthiHeader />

      <div
        ref={scrollRef}
        className="relative flex-1 overflow-y-auto px-4 py-6 md:px-8"
      >
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.length === 0 ? (
            <WelcomeSection onSelectPrompt={sendMessage} disabled={isLoading} />
          ) : (
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <ChatMessage key={i} role={msg.role} content={msg.content} />
              ))}
            </div>
          )}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <TypingIndicator />
          )}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-2xl">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;
