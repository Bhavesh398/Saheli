import { Sparkles, Heart, Cloud, Moon, MessageCircle, Leaf } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MoodPromptsProps {
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

interface MoodOption {
  icon: LucideIcon;
  label: string;
  prompt: string;
}

const moodOptions: MoodOption[] = [
  { icon: Heart, label: "I'm feeling anxious", prompt: "I'm feeling really anxious right now and could use some support." },
  { icon: Cloud, label: "I need to vent", prompt: "I just need someone to listen. Can I share what's on my mind?" },
  { icon: Moon, label: "I can't sleep", prompt: "I'm having trouble sleeping because my mind won't stop racing." },
  { icon: MessageCircle, label: "I'm feeling lonely", prompt: "I'm feeling really lonely today and could use some company." },
  { icon: Leaf, label: "Help me relax", prompt: "I'm stressed and need help calming down. Can you guide me?" },
  { icon: Sparkles, label: "I need encouragement", prompt: "I'm going through a tough time and could use some words of encouragement." },
];

export function MoodPrompts({ onSelect, disabled }: MoodPromptsProps) {
  return (
    <div className="space-y-4 mt-8">
      <p className="text-center text-muted-foreground text-sm">
        Not sure what to say? Try one of these:
      </p>
      
      <div className="flex flex-wrap justify-center gap-2.5 max-w-lg mx-auto">
        {moodOptions.map((mood, index) => (
          <button
            key={mood.label}
            onClick={() => onSelect(mood.prompt)}
            disabled={disabled}
            className="mood-button flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up hover:scale-105 hover:-translate-y-1 transition-all duration-200"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <mood.icon className="h-4 w-4 text-primary animate-wiggle" style={{ animationDelay: `${index * 200}ms` }} />
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
