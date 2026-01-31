import { AnimatedHeart } from "./AnimatedHeart";
import { MoodPrompts } from "./MoodPrompts";

interface WelcomeSectionProps {
    onSelectPrompt: (prompt: string) => void;
    disabled?: boolean;
}

export function WelcomeSection({ onSelectPrompt, disabled }: WelcomeSectionProps) {
    return (
        <div className="fade-in flex flex-col items-center justify-center py-12 md:py-20 text-center">
            <div className="animate-scale-in mb-8">
                <AnimatedHeart size="lg" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                    Hello, friend
                </span>{" "}
                <span className="inline-block animate-bounce-gentle">🌸</span>
            </h2>

            <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed px-4 animate-slide-up animation-delay-200">
                I'm{" "}
                <span className="text-primary font-semibold animate-glow">
                    Sarthi
                </span>
                , your compassionate companion. I'm here to listen, support, and help you through whatever you're feeling.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground/70 animate-slide-up animation-delay-400">
                <div className="h-2 w-2 rounded-full bg-primary/80 animate-pulse" />
                <span>Always here for you</span>
            </div>

            <div className="animate-slide-up animation-delay-300">
                <MoodPrompts onSelect={onSelectPrompt} disabled={disabled} />
            </div>
        </div>
    );
}
