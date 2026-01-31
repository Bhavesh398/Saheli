import { Scale, BookOpen, Shield, Users, FileText, ChevronRight, PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Navigation, DesktopNav } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { ReelsViewer } from "@/components/ReelsViewer";

import womensRightsBg from "@/assets/womens-rights.png";

const RightsPage = () => {
  const [showReels, setShowReels] = useState(false);
  const rights = [
    {
      title: "POSH Act 2013",
      description: "Prevention of Sexual Harassment at Workplace Act protects you from harassment at work.",
      icon: Shield,
      gradient: "gradient-hero",
      details: [
        "Defines sexual harassment clearly to cover physical, verbal, and non-verbal unwelcome conduct.",
        "Mandates an Internal Complaints Committee (ICC) in every office with 10 or more employees.",
        "Ensures a time-bound inquiry process (completion within 90 days) and strict confidentiality.",
        "Protects women in both organized and unorganized sectors.",
      ],
    },
    {
      title: "Equal Remuneration Act",
      description: "Right to equal pay for equal work regardless of gender.",
      icon: Scale,
      gradient: "gradient-trust",
      details: [
        "Prohibits discrimination in payment of wages between men and women for the same work.",
        "Ensures no discrimination in recruitment, promotion, training, or transfer.",
        "Applies to all establishments and employments.",
        "Mechanism for hearing and deciding complaints regarding contravention of the Act.",
      ],
    },
    {
      title: "Maternity Benefit Act",
      description: "26 weeks of paid maternity leave and other benefits.",
      icon: Users,
      gradient: "gradient-warm",
      details: [
        "Provides 26 weeks of paid maternity leave for the first two children.",
        "Mandates creche facilities in establishments with 50 or more employees.",
        "Allows work from home options if the nature of work permits.",
        "Protects against dismissal during maternity leave.",
      ],
    },
    {
      title: "Domestic Violence Act",
      description: "Protection against domestic violence and right to residence.",
      icon: Shield,
      gradient: "gradient-hero",
      details: [
        "Covers physical, verbal, emotional, economic, and sexual abuse.",
        "Recognizes the right of a woman to reside in the shared household.",
        "Empowers Protection Officers to assist victims and file reports.",
        "Provides for temporary custody of children and compensation orders.",
      ],
    },
    {
      title: "Right to Education",
      description: "Free and compulsory education for all children including girls.",
      icon: BookOpen,
      gradient: "gradient-trust",
      details: [
        "Guarantees free and compulsory education to all children aged 6 to 14 years.",
        "Prohibits physical punishment and mental harassment.",
        "Mandates 25% reservation for disadvantaged groups in private unaided schools.",
        "Ensures no child is denied admission for lack of age proof.",
      ],
    },
    {
      title: "Property Rights",
      description: "Equal rights to ancestral and matrimonial property.",
      icon: FileText,
      gradient: "gradient-warm",
      details: [
        "Grants daughters equal rights in ancestral property (Hindu Succession Amendment Act).",
        "Ensures absolute ownership of 'Streedhan' (gifts received during marriage).",
        "Right to reside in the matrimonial home even if not an owner.",
        "Equal share in the husband's self-acquired property if he dies without a will.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />

      <section className="pt-24 w-full bg-background">
        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative group">
          <img
            src={womensRightsBg}
            alt="Women's Rights are Human Rights"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Bottom fade - Reduced height to show more image, but kept smooth */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

          {/* Softer side fades */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/20 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/20 to-transparent" />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Know Your Rights
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Understanding your legal rights empowers you to protect yourself and seek justice.
            Click on any right to learn more.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 -mt-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="grid gap-4">
            {rights.map((right, index) => {
              const Icon = right.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-white/10 bg-[#1a1a2e] overflow-hidden animate-fade-in shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors group">
                    <div className="flex items-center gap-5 text-left w-full">
                      <div className="p-3.5 rounded-2xl bg-[#2a2a3e] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-white mb-1.5 font-serif tracking-tight">{right.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4 line-clamp-2">
                          {right.description}
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[#2a2a3e] flex items-center justify-center shrink-0 group-hover:bg-[#3a3a4e] transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-black/20 px-6 py-5 border-t border-white/5">
                    <div className="pl-4 border-l-2 border-purple-500/50 ml-2 space-y-4">
                      <p className="font-medium text-purple-200">Key Provisions:</p>
                      <ul className="space-y-3">
                        {right.details.map((point, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-8 mb-8 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="container mx-auto max-w-md">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-primary via-sarthi-rose to-sarthi-lavender">
            <button
              onClick={() => setShowReels(true)}
              className="w-full bg-card hover:bg-card/90 text-foreground p-6 rounded-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-sarthi-rose bg-clip-text text-transparent">
                    Click to Learn More
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Watch short videos to understand your rights better
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <ReelsViewer open={showReels} onClose={() => setShowReels(false)} />

      <Navigation />
    </div>
  );
};

export default RightsPage;
