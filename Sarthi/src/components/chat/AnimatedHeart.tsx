import { Heart } from "lucide-react";

interface AnimatedHeartProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { container: "h-12 w-12", icon: "h-6 w-6" },
  md: { container: "h-20 w-20 md:h-24 md:w-24", icon: "h-10 w-10 md:h-12 md:w-12" },
  lg: { container: "h-28 w-28 md:h-32 md:w-32", icon: "h-14 w-14 md:h-16 md:w-16" },
};

export function AnimatedHeart({ size = "md", className = "" }: AnimatedHeartProps) {
  const sizes = sizeMap[size];

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow rings */}
      <div 
        className={`absolute inset-0 ${sizes.container} rounded-3xl animate-pulse-glow`}
        style={{
          background: "radial-gradient(circle, hsl(var(--sarthi-rose) / 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Main heart container */}
      <div
        className={`relative flex ${sizes.container} items-center justify-center rounded-3xl bg-primary/10 sarthi-glow breathing`}
      >
        <div className="animate-heartbeat">
          <Heart className={`${sizes.icon} text-primary fill-primary/30`} />
        </div>
      </div>

      {/* Floating particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/40 animate-float-particle"
          style={{
            left: "50%",
            top: "50%",
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
