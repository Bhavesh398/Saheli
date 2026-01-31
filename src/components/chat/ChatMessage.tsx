import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
    const isUser = role === "user";

    return (
        <div
            className={cn(
                "fade-in flex w-full",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[85%] md:max-w-[70%] rounded-3xl px-5 py-3.5 hover:scale-[1.01] transition-transform duration-200",
                    isUser
                        ? "sarthi-bubble-user text-primary-foreground rounded-br-lg"
                        : "sarthi-bubble-assistant text-card-foreground rounded-bl-lg shadow-sm"
                )}
            >
                {isUser ? (
                    <p className="text-sm md:text-base leading-relaxed">{content}</p>
                ) : (
                    <div className="prose prose-sm md:prose-base prose-stone dark:prose-invert max-w-none">
                        <ReactMarkdown
                            components={{
                                p: ({ children }) => (
                                    <p className="leading-relaxed mb-2 last:mb-0">{children}</p>
                                ),
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
}
