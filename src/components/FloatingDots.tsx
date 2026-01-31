const FloatingDots = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Left side dots */}
      <div className="absolute left-[5%] top-[20%] flex flex-col items-center gap-8">
        <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
        <div className="w-3 h-3 rounded-full border border-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Right side dots */}
      <div className="absolute right-[8%] top-[40%] flex flex-col items-center gap-6">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="w-4 h-4 rounded-full border border-primary/20 animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* Bottom left dots */}
      <div className="absolute left-[12%] bottom-[25%] flex flex-col items-center gap-5">
        <div className="w-2.5 h-2.5 rounded-full border border-primary/25 animate-float" style={{ animationDelay: '0.8s' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Bottom right dots */}
      <div className="absolute right-[15%] bottom-[30%] flex flex-col items-center gap-7">
        <div className="w-2 h-2 rounded-full bg-primary/35 animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="w-3.5 h-3.5 rounded-full border border-primary/20 animate-float" style={{ animationDelay: '1.4s' }} />
      </div>

      {/* Center scattered dots */}
      <div className="absolute left-[30%] top-[60%]">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute right-[35%] top-[15%]">
        <div className="w-2 h-2 rounded-full border border-primary/25 animate-float" style={{ animationDelay: '0.9s' }} />
      </div>
    </div>
  );
};

export default FloatingDots;
