import { useMemo } from "react";

interface Glitter {
    id: number;
    left: string;
    top: string;
    size: number;
    delay: number;
    duration: number;
}

interface FallingPetal {
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: number;
    drift: number;
}

export function GlitterEffect() {
    // Generate random glitters
    const glitters = useMemo<Glitter[]>(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 5 + 3,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
        }));
    }, []);

    // Generate more falling petals - increased count and visibility
    const petals = useMemo<FallingPetal[]>(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 20,
            duration: Math.random() * 12 + 12,
            size: Math.random() * 10 + 8,
            drift: Math.random() * 100 - 50,
        }));
    }, []);

    // Soft floating circles
    const floatingCircles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 8 + 4,
            delay: Math.random() * 10,
            duration: Math.random() * 8 + 10,
        }));
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {/* Glitter sparkles */}
            {glitters.map((glitter) => (
                <div
                    key={glitter.id}
                    className="absolute animate-glitter"
                    style={{
                        left: glitter.left,
                        top: glitter.top,
                        width: glitter.size,
                        height: glitter.size,
                        animationDelay: `${glitter.delay}s`,
                        animationDuration: `${glitter.duration}s`,
                    }}
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-primary/50 w-full h-full"
                    >
                        <path d="M10 0 L11 8 L20 10 L11 12 L10 20 L9 12 L0 10 L9 8 Z" />
                    </svg>
                </div>
            ))}

            {/* Soft falling petals - more visible */}
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute -top-8 animate-falling-petal-soft"
                    style={{
                        left: petal.left,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                        width: petal.size,
                        height: petal.size,
                        ["--drift" as string]: `${petal.drift}px`,
                    }}
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-sarthi-rose/30 w-full h-full drop-shadow-sm"
                    >
                        <ellipse cx="10" cy="10" rx="9" ry="5" />
                    </svg>
                </div>
            ))}

            {/* Additional falling sparkle dots */}
            {Array.from({ length: 25 }, (_, i) => (
                <div
                    key={`fall-dot-${i}`}
                    className="absolute -top-4 animate-falling-dot"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 15}s`,
                        animationDuration: `${Math.random() * 15 + 18}s`,
                    }}
                >
                    <div
                        className="rounded-full bg-primary/25"
                        style={{
                            width: Math.random() * 5 + 3,
                            height: Math.random() * 5 + 3,
                            boxShadow: "0 0 6px 2px hsl(350 50% 70% / 0.3)",
                        }}
                    />
                </div>
            ))}

            {/* Soft floating circles */}
            {floatingCircles.map((circle) => (
                <div
                    key={`circle-${circle.id}`}
                    className="absolute rounded-full bg-primary/15 animate-float-gentle"
                    style={{
                        left: circle.left,
                        top: circle.top,
                        width: circle.size,
                        height: circle.size,
                        animationDelay: `${circle.delay}s`,
                        animationDuration: `${circle.duration}s`,
                        boxShadow: "0 0 8px 3px hsl(350 45% 65% / 0.2)",
                    }}
                />
            ))}

            {/* Larger soft blobs drifting */}
            {Array.from({ length: 8 }, (_, i) => (
                <div
                    key={`blob-${i}`}
                    className="absolute rounded-full animate-drift-slow"
                    style={{
                        left: `${10 + (i * 12)}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        width: Math.random() * 30 + 20,
                        height: Math.random() * 30 + 20,
                        background: `radial-gradient(circle, hsl(350 40% 80% / 0.15) 0%, transparent 70%)`,
                        animationDelay: `${i * 2}s`,
                        animationDuration: `${20 + i * 3}s`,
                    }}
                />
            ))}
        </div>
    );
}
