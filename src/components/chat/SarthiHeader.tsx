import { Heart } from "lucide-react";

export function SarthiHeader() {
    return (
        <header className="relative flex items-center gap-4 p-4 md:p-6 border-b border-border bg-card/60 backdrop-blur-md fade-in">
            {/* Animated background gradient */}
            <div
                className="absolute inset-0 opacity-30 animate-gradient-shift"
                style={{
                    background: "linear-gradient(90deg, hsl(var(--sarthi-rose-light)) 0%, transparent 50%, hsl(var(--sarthi-lavender)) 100%)",
                    backgroundSize: "200% 100%",
                }}
            />

            <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary/10 sarthi-glow breathing hover:scale-110 transition-transform duration-300">
                <div className="animate-heartbeat">
                    <Heart className="h-6 w-6 md:h-7 md:w-7 text-primary fill-primary/30" />
                </div>

                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping-slow" />
            </div>

            <div className="relative">
                <h1 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Sarthi
                </h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    Your compassionate companion
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80 animate-pulse" />
                </p>
            </div>
        </header>
    );
}
