import { useEffect, useState, useCallback } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorGlow() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setIsVisible(true);
    const newPoint: TrailPoint = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now() + Math.random(),
    };

    setTrail((prev) => [...prev.slice(-15), newPoint]);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setTrail([]);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Clean up old trail points
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrail((prev) => prev.slice(-12));
    }, 50);

    return () => clearInterval(cleanup);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main cursor glow */}
      {trail.length > 0 && (
        <div
          className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
          style={{
            left: trail[trail.length - 1]?.x,
            top: trail[trail.length - 1]?.y,
            background: "radial-gradient(circle, hsl(350 50% 70% / 0.6) 0%, hsl(350 45% 65% / 0.3) 40%, transparent 70%)",
            boxShadow: "0 0 20px 8px hsl(350 50% 70% / 0.3)",
          }}
        />
      )}

      {/* Trail points */}
      {trail.map((point, index) => {
        const opacity = (index / trail.length) * 0.6;
        const size = 4 + (index / trail.length) * 12;
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              background: `radial-gradient(circle, hsl(350 55% 75% / ${opacity}) 0%, hsl(350 45% 65% / ${opacity * 0.5}) 50%, transparent 100%)`,
              boxShadow: `0 0 ${size}px ${size / 3}px hsl(350 50% 70% / ${opacity * 0.4})`,
            }}
          />
        );
      })}

      {/* Sparkle particles around cursor */}
      {trail.length > 0 && (
        <>
          {[...Array(5)].map((_, i) => {
            const angle = (i / 5) * Math.PI * 2 + Date.now() / 1000;
            const radius = 20 + Math.sin(Date.now() / 500 + i) * 10;
            const x = trail[trail.length - 1]?.x + Math.cos(angle) * radius;
            const y = trail[trail.length - 1]?.y + Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: x,
                  top: y,
                }}
              >
                <svg viewBox="0 0 20 20" className="w-full h-full text-primary/60">
                  <path fill="currentColor" d="M10 0 L11 8 L20 10 L11 12 L10 20 L9 12 L0 10 L9 8 Z" />
                </svg>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
