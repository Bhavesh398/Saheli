const orbs = [
  { size: 120, x: "10%", y: "20%", delay: "0s" },
  { size: 80, x: "80%", y: "15%", delay: "1s" },
  { size: 60, x: "70%", y: "70%", delay: "2s" },
  { size: 100, x: "15%", y: "75%", delay: "0.5s" },
  { size: 40, x: "50%", y: "10%", delay: "1.5s" },
  { size: 50, x: "90%", y: "50%", delay: "2.5s" },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-float-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at 30% 30%, hsl(var(--sarthi-rose) / 0.15), hsl(var(--sarthi-lavender) / 0.08))`,
            boxShadow: `0 0 ${orb.size / 2}px hsl(var(--sarthi-glow) / 0.2)`,
            filter: "blur(1px)",
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
