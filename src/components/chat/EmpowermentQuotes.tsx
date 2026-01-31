import { useEffect, useState } from "react";

const quotes = [
    "She believed she could, so she did.",
    "Women supporting women.",
    "Empowered women empower women.",
    "Together we rise.",
    "Your voice matters.",
    "Strong women lift each other up.",
    "You are enough, just as you are.",
    "Behind every successful woman is herself.",
    "Women are the real architects of society.",
    "The future is female.",
    "Well-behaved women seldom make history.",
    "A woman is the full circle.",
];

export function EmpowermentQuotes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % quotes.length);
                setIsVisible(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden">
            {/* Top left quote */}
            <div
                className={`absolute top-24 left-8 max-w-[200px] text-sm font-display text-primary/20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
            >
                "{quotes[currentIndex]}"
            </div>

            {/* Top right quote */}
            <div
                className={`absolute top-32 right-8 max-w-[180px] text-right text-xs font-display text-sarthi-rose/15 transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
            >
                "{quotes[(currentIndex + 3) % quotes.length]}"
            </div>

            {/* Bottom left quote */}
            <div
                className={`absolute bottom-32 left-12 max-w-[160px] text-xs font-display text-primary/15 transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
            >
                "{quotes[(currentIndex + 6) % quotes.length]}"
            </div>

            {/* Bottom right quote */}
            <div
                className={`absolute bottom-24 right-12 max-w-[200px] text-right text-sm font-display text-sarthi-rose/20 transition-all duration-500 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
            >
                "{quotes[(currentIndex + 9) % quotes.length]}"
            </div>

            {/* Center subtle quote */}
            <div
                className={`absolute top-1/3 left-1/2 -translate-x-1/2 max-w-[250px] text-center text-lg font-display text-primary/10 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                "{quotes[(currentIndex + 1) % quotes.length]}"
            </div>
        </div>
    );
}
