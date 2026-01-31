import { useState, KeyboardEvent } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [input, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSend = () => {
        if (input.trim() && !disabled) {
            onSend(input.trim());
            setInput("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="relative flex items-end gap-3 p-4 bg-card/80 backdrop-blur-md border-t border-border fade-in">
            {/* Animated border glow when focused */}
            <div
                className={cn(
                    "absolute inset-x-0 top-0 h-px transition-all duration-300",
                    isFocused ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                )}
                style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
                }}
            />

            <div className={cn("relative flex-1 transition-transform duration-200", isFocused && "scale-[1.01]")}>
                <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Share what's on your mind..."
                    disabled={disabled}
                    className="min-h-[52px] max-h-[120px] resize-none rounded-2xl border-border bg-background/60 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary/30 focus-visible:ring-offset-0 transition-shadow duration-300"
                    rows={1}
                />

                {/* Floating helper text */}
                <div
                    className={cn(
                        "absolute -top-6 left-4 text-xs text-muted-foreground/50 flex items-center gap-1 transition-opacity duration-200",
                        isFocused ? "opacity-100" : "opacity-0"
                    )}
                >
                    <Sparkles className="h-3 w-3" />
                    <span>Sarthi is listening...</span>
                </div>
            </div>

            <Button
                onClick={handleSend}
                disabled={!input.trim() || disabled}
                size="icon"
                className="h-[52px] w-[52px] shrink-0 rounded-2xl bg-primary hover:bg-primary/90 transition-all duration-200 disabled:opacity-40 relative overflow-hidden hover:scale-105 active:scale-95"
            >
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000",
                        input.trim() ? "animate-shimmer" : ""
                    )}
                />
                <Send className="h-5 w-5 relative z-10" />
            </Button>
        </div>
    );
}

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
