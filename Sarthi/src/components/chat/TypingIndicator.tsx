export function TypingIndicator() {
  return (
    <div className="fade-in flex justify-start">
      <div className="sarthi-bubble-assistant rounded-3xl rounded-bl-lg px-5 py-4 shadow-sm">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-2.5 w-2.5 rounded-full bg-primary/60 animate-typing-dot"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
