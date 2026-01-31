import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  gradient?: "hero" | "warm" | "trust";
  delay?: number;
}

export const QuickActionCard = ({
  title,
  description,
  icon: Icon,
  to,
  gradient = "trust",
  delay = 0
}: QuickActionCardProps) => {
  const gradientClass = {
    hero: "gradient-hero",
    warm: "gradient-warm",
    trust: "gradient-trust"
  }[gradient];

  const glowColor = {
    hero: "hsl(270 70% 60% / 0.4)",
    warm: "hsl(355 70% 55% / 0.4)",
    trust: "hsl(280 80% 65% / 0.4)"
  }[gradient];

  return (
    <Link
      to={to}
      className="group block opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "relative p-6 h-full rounded-2xl border border-border/30",
        "bg-gradient-to-br from-card/80 via-card/50 to-transparent backdrop-blur-md",
        "hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden",
        "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-1"
      )}>
        {/* Animated border gradient with intense glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-primary via-primary/80 to-primary blur-md animate-pulse-subtle" />
        </div>
        
        {/* Multiple layered glow effects */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-all duration-500">
          <div 
            className="absolute -inset-8 blur-3xl" 
            style={{ background: `radial-gradient(circle at center, ${glowColor}, transparent 60%)` }}
          />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div 
            className="absolute -inset-12 blur-[60px] opacity-50" 
            style={{ background: `radial-gradient(circle at center, hsl(270 70% 60% / 0.6), transparent 50%)` }}
          />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden rounded-2xl">
          <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out]" />
        </div>
        
        <div className="relative flex flex-col items-start gap-4 h-full">
          {/* Icon with intense purple glow */}
          <div className={cn(
            "p-3 rounded-xl transition-all duration-500",
            "group-hover:scale-110",
            gradientClass
          )}
          style={{
            boxShadow: `0 0 20px hsl(270 70% 60% / 0.4), 0 0 40px hsl(270 70% 60% / 0.2)`,
          }}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: `0 0 30px hsl(270 70% 60% / 0.8), 0 0 60px hsl(270 70% 60% / 0.5), 0 0 90px hsl(270 70% 60% / 0.3)`,
              }}
            />
            <Icon className="w-5 h-5 text-primary-foreground relative z-10" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-all duration-300">
            <span className="relative">
              Learn more
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
