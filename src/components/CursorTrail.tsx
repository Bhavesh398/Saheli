import { useEffect, useState } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev.slice(-12), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (trails.length === 0) return;

    const timer = setTimeout(() => {
      setTrails((prev) => prev.slice(1));
    }, 80);

    return () => clearTimeout(timer);
  }, [trails]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trails.map((trail, index) => {
        const opacity = (index + 1) / trails.length;
        const scale = 0.3 + (index / trails.length) * 0.7;
        
        return (
          <div
            key={trail.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: trail.x,
              top: trail.y,
              width: 8,
              height: 8,
              opacity: opacity * 0.6,
              transform: `translate(-50%, -50%) scale(${scale})`,
              boxShadow: `0 0 ${4 + index}px hsl(270 70% 60% / ${opacity * 0.5})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
