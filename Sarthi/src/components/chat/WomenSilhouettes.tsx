import { useEffect, useState } from "react";

export function WomenSilhouettes() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position from the main scroll container
      const scrollContainer = document.querySelector('[class*="overflow-y-auto"]');
      if (scrollContainer) {
        setScrollY(scrollContainer.scrollTop);
      }
    };

    const scrollContainer = document.querySelector('[class*="overflow-y-auto"]');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Different parallax speeds for depth effect
  const layer1 = scrollY * 0.03;
  const layer2 = scrollY * 0.05;
  const layer3 = scrollY * 0.02;
  const layer4 = scrollY * 0.04;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-[0.12]">
      {/* Left group - women reaching up together */}
      <svg
        className="absolute left-0 bottom-0 h-[70%] w-auto animate-breathing transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${-layer1}px)` }}
        viewBox="0 0 300 400"
        fill="currentColor"
      >
        {/* Woman 1 - reaching up */}
        <path
          className="text-primary"
          d="M60 400 L60 280 Q60 260 70 250 L70 200 Q70 180 65 170 Q55 160 55 140 Q55 110 75 100 Q95 90 95 120 Q95 145 85 155 Q80 165 80 180 L80 195 L90 180 L110 140 L120 145 L95 195 L95 250 Q105 260 105 280 L105 400 Z"
        />
        {/* Woman 2 - arms linked */}
        <path
          className="text-sarthi-rose"
          d="M120 400 L120 300 Q120 280 130 270 L130 220 Q130 200 125 190 Q115 180 115 160 Q115 130 135 120 Q155 110 155 140 Q155 165 145 175 Q140 185 140 200 L140 215 L160 190 L175 200 L150 235 L150 270 Q160 280 160 300 L160 400 Z"
        />
        {/* Woman 3 - supportive stance */}
        <path
          className="text-primary/80"
          d="M30 400 L30 320 Q30 300 40 290 L40 240 Q40 220 35 210 Q25 200 25 180 Q25 150 45 140 Q65 130 65 160 Q65 185 55 195 Q50 205 50 220 L50 235 L50 290 Q60 300 60 320 L60 400 Z"
        />
        {/* Woman 4 - dancing */}
        <path
          className="text-sarthi-lavender"
          d="M180 400 L175 320 Q175 300 185 290 L180 240 Q180 220 175 210 Q165 200 165 180 Q165 150 185 140 Q205 130 205 160 Q205 185 195 195 Q190 205 192 220 L195 235 L210 210 L220 220 L200 255 L205 290 Q215 300 210 320 L215 400 Z"
        />
      </svg>

      {/* Center group - circle of support */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[55%] w-auto animate-float-slow transition-transform duration-300 ease-out"
        style={{ transform: `translate(-50%, calc(-50% + ${layer2}px))` }}
        viewBox="0 0 400 300"
        fill="currentColor"
      >
        {/* Woman reaching toward center */}
        <path
          className="text-sarthi-lavender"
          d="M100 250 L100 180 Q100 160 110 150 L110 110 Q110 90 105 80 Q95 70 95 50 Q95 20 115 10 Q135 0 135 30 Q135 55 125 65 Q120 75 120 90 L120 105 L145 80 L155 90 L125 130 L125 150 Q135 160 135 180 L135 250 Z"
        />
        {/* Woman with open arms */}
        <path
          className="text-primary/60"
          d="M200 280 L200 200 Q200 180 210 170 L210 130 Q210 110 205 100 Q195 90 195 70 Q195 40 215 30 Q235 20 235 50 Q235 75 225 85 Q220 95 220 110 L220 125 L180 100 L175 115 L215 145 L260 115 L265 130 L225 155 L225 170 Q235 180 235 200 L235 280 Z"
        />
        {/* Woman reaching toward center */}
        <path
          className="text-sarthi-rose/70"
          d="M300 250 L300 180 Q300 160 290 150 L290 110 Q290 90 295 80 Q305 70 305 50 Q305 20 285 10 Q265 0 265 30 Q265 55 275 65 Q280 75 280 90 L280 105 L255 80 L245 90 L275 130 L275 150 Q265 160 265 180 L265 250 Z"
        />
        {/* Additional woman - embracing */}
        <path
          className="text-primary/40"
          d="M150 280 L150 220 Q150 200 160 190 L160 150 Q160 130 155 120 Q145 110 145 90 Q145 60 165 50 Q185 40 185 70 Q185 95 175 105 Q170 115 170 130 L170 145 L170 190 Q180 200 180 220 L180 280 Z"
        />
      </svg>

      {/* Right group - rising together */}
      <svg
        className="absolute right-0 bottom-0 h-[65%] w-auto animate-breathing animation-delay-400 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${-layer3}px)` }}
        viewBox="0 0 320 380"
        fill="currentColor"
      >
        {/* Woman 1 - celebrating */}
        <path
          className="text-primary/70"
          d="M220 380 L220 280 Q220 260 210 250 L210 200 Q210 180 215 170 Q225 160 225 140 Q225 110 205 100 Q185 90 185 120 Q185 145 195 155 Q200 165 200 180 L200 195 L180 160 L170 170 L195 215 L195 250 Q185 260 185 280 L185 380 Z"
        />
        {/* Woman 2 - arms raised high */}
        <path
          className="text-sarthi-rose/80"
          d="M160 380 L160 300 Q160 280 170 270 L170 220 Q170 200 165 190 Q155 180 155 160 Q155 130 175 120 Q195 110 195 140 Q195 165 185 175 Q180 185 180 200 L180 210 L200 150 L210 160 L185 230 L160 155 L150 165 L178 235 L178 270 Q188 280 188 300 L188 380 Z"
        />
        {/* Woman 3 */}
        <path
          className="text-primary/50"
          d="M250 380 L250 310 Q250 290 240 280 L240 240 Q240 220 245 210 Q255 200 255 180 Q255 150 235 140 Q215 130 215 160 Q215 185 225 195 Q230 205 230 220 L230 235 L230 280 Q220 290 220 310 L220 380 Z"
        />
        {/* Woman 4 - new addition */}
        <path
          className="text-sarthi-lavender/60"
          d="M280 380 L280 330 Q280 310 270 300 L270 260 Q270 240 275 230 Q285 220 285 200 Q285 170 265 160 Q245 150 245 180 Q245 205 255 215 Q260 225 260 240 L260 255 L260 300 Q250 310 250 330 L250 380 Z"
        />
        {/* Woman 5 - holding hands */}
        <path
          className="text-primary/30"
          d="M120 380 L120 320 Q120 300 130 290 L130 250 Q130 230 125 220 Q115 210 115 190 Q115 160 135 150 Q155 140 155 170 Q155 195 145 205 Q140 215 140 230 L140 245 L140 290 Q150 300 150 320 L150 380 Z"
        />
      </svg>

      {/* Top left decorative - hands reaching */}
      <svg
        className="absolute top-10 left-1/4 h-28 w-auto opacity-70 animate-wiggle transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${layer4}px)` }}
        viewBox="0 0 100 60"
        fill="currentColor"
      >
        <path
          className="text-sarthi-lavender"
          d="M10 50 Q20 30 40 25 L45 10 L50 25 L55 5 L60 25 L65 10 L70 25 Q90 30 100 50 Q80 45 50 40 Q20 45 10 50 Z"
        />
      </svg>

      <svg
        className="absolute top-20 right-1/4 h-24 w-auto opacity-60 animate-wiggle animation-delay-200 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${layer2 * 0.5}px)` }}
        viewBox="0 0 100 60"
        fill="currentColor"
      >
        <path
          className="text-primary/60"
          d="M10 50 Q20 30 40 25 L45 10 L50 25 L55 5 L60 25 L65 10 L70 25 Q90 30 100 50 Q80 45 50 40 Q20 45 10 50 Z"
        />
      </svg>

      {/* Additional floating elements - hearts/unity symbols */}
      <svg
        className="absolute top-1/3 left-16 h-16 w-auto opacity-50 animate-float-orb transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${-layer3 * 0.8}px)` }}
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path
          className="text-sarthi-rose/50"
          d="M25 45 L10 30 Q0 20 10 10 Q20 0 25 10 Q30 0 40 10 Q50 20 40 30 Z"
        />
      </svg>

      <svg
        className="absolute bottom-1/3 right-20 h-14 w-auto opacity-40 animate-float-orb animation-delay-300 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${layer1 * 0.6}px)` }}
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path
          className="text-primary/40"
          d="M25 45 L10 30 Q0 20 10 10 Q20 0 25 10 Q30 0 40 10 Q50 20 40 30 Z"
        />
      </svg>

      {/* Bottom decorative - linked figures */}
      <svg
        className="absolute bottom-0 left-1/3 h-32 w-auto opacity-60 animate-breathing animation-delay-200 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${-layer4 * 0.5}px)` }}
        viewBox="0 0 200 100"
        fill="currentColor"
      >
        {/* Three women walking together */}
        <path
          className="text-primary/50"
          d="M40 100 L40 70 Q40 60 45 55 L45 40 Q45 30 42 25 Q35 20 35 10 Q35 -5 50 -5 Q65 -5 65 10 Q65 20 58 25 Q55 30 55 40 L55 55 Q60 60 60 70 L60 100 Z"
        />
        <path
          className="text-sarthi-rose/60"
          d="M90 100 L90 65 Q90 55 95 50 L95 35 Q95 25 92 20 Q85 15 85 5 Q85 -10 100 -10 Q115 -10 115 5 Q115 15 108 20 Q105 25 105 35 L105 50 Q110 55 110 65 L110 100 Z"
        />
        <path
          className="text-sarthi-lavender/70"
          d="M140 100 L140 70 Q140 60 145 55 L145 40 Q145 30 142 25 Q135 20 135 10 Q135 -5 150 -5 Q165 -5 165 10 Q165 20 158 25 Q155 30 155 40 L155 55 Q160 60 160 70 L160 100 Z"
        />
        {/* Linking arms */}
        <path
          className="text-primary/30"
          d="M60 50 Q75 45 90 50 M110 50 Q125 45 140 50"
        />
      </svg>
    </div>
  );
}
