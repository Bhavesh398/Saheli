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
import { Navigation, DesktopNav } from "@/components/Navigation";

const MentorChatPage = () => {
  const { messages, isLoading, sendMessage } = useSarthiChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="min-h-screen bg-background sarthi-page font-body">
      <DesktopNav />

      {/* Main Sarthi Container */}
      {/* Adjusted height to account for DesktopNav (16) and avoid double scrollbars */}
      <div className="relative flex flex-col h-[calc(100vh)] md:h-[calc(100vh)] pt-16 sarthi-gradient overflow-hidden fade-in">

        {/* Background Effects */}
        <WomenSilhouettes />
        <EmpowermentQuotes />
        <GlitterEffect />
        <FloatingOrbs />
        <CursorGlow />

        {/* Ambient light */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, hsl(var(--sarthi-rose) / 0.08) 0%, transparent 50%)",
          }}
        />

        <SarthiHeader />

        <div
          ref={scrollRef}
          className="relative flex-1 overflow-y-auto px-4 py-6 md:px-8 scroll-smooth"
        >
          <div className="mx-auto max-w-2xl space-y-4 pb-20 md:pb-0">
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

        <div className="relative mx-auto w-full max-w-2xl pb-20 md:pb-4">
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default MentorChatPage;
