import { Shield, FileText, Lock, MessageCircle, Map, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickActionCard } from "@/components/QuickActionCard";
import { Navigation, DesktopNav } from "@/components/Navigation";

import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-particles.jpg";

const Index = () => {
  const stats = [
    { value: "500+", label: "Women Empowered" },
    { value: "24/7", label: "Support Available" },
    { value: "100%", label: "Confidential" },
    { value: "50+", label: "Partner NGOs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DesktopNav />

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image - positioned to left */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Digital safety guardian"
            className="w-full h-full object-cover"
            style={{ objectPosition: '25% center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content - Right aligned */}
        <div className="relative z-10 w-full h-full flex items-center justify-end">
          <div className="w-full md:w-[40%] pr-8 md:pr-16 lg:pr-24 pl-6 pt-20 md:pt-0">
            <div className="flex flex-col items-end text-right">
              <div className="inline-flex items-center gap-2 border border-border/50 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  Your Digital Safety Companion
                </span>
              </div>

              <div className="opacity-0 animate-fade-in mb-8" style={{ animationDelay: "100ms" }}>
                <h1 
                  className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1]"
                  style={{
                    textShadow: '0 0 20px hsl(270 70% 60% / 0.5), 0 0 40px hsl(270 70% 60% / 0.3), 0 0 60px hsl(270 70% 60% / 0.2)'
                  }}
                >
                  Saheli
                </h1>
                
                {/* Divider line between text and reflection */}
                <div className="w-full h-[1px] my-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                
                <div 
                  className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground/20" 
                  style={{ 
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(0.5px)'
                  }}
                >Saheli</div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Empowering women through digital safety, legal awareness, and AI-powered mentorship. Your confidential guide.
              </p>

              <div className="flex flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Link to="/report">
                  <Button size="xl" variant="outline" className="group border-foreground/30 hover:bg-foreground hover:text-background">
                    Report Incident
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/emergency">
                  <Button size="xl" variant="destructive" className="shadow-glow">
                    Emergency Help
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Saheli</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
              <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
              <a href="#" className="hover:text-foreground transition-smooth">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-semibold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
              How Can We <span className="italic text-gradient">Help?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose what you need assistance with. All services are free and confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickActionCard
              title="Know Your Rights"
              description="Learn about POSH Act, workplace safety, and labor laws"
              icon={FileText}
              to="/rights"
              gradient="trust"
              delay={0}
            />
            <QuickActionCard
              title="Cyber Safety"
              description="Protect yourself from online scams and digital threats"
              icon={Lock}
              to="/cyber"
              gradient="hero"
              delay={100}
            />
            <QuickActionCard
              title="AI Mentor Chat"
              description="Get guidance from our AI safety companion"
              icon={MessageCircle}
              to="/mentor"
              gradient="warm"
              delay={200}
            />
            <QuickActionCard
              title="Report Incident"
              description="Confidentially report harassment or safety concerns"
              icon={Shield}
              to="/report"
              gradient="trust"
              delay={300}
            />
            <QuickActionCard
              title="Find Help"
              description="Connect with NGOs and legal aid near you"
              icon={Map}
              to="/directory"
              gradient="warm"
              delay={400}
            />
            <QuickActionCard
              title="Safety Tips"
              description="Practical tips for physical and digital safety"
              icon={Heart}
              to="/safety-tips"
              gradient="hero"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-8 opacity-70" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Your Safety, Your <span className="italic">Privacy</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            All information shared is encrypted and confidential. We're here to empower you with knowledge and connect you with support.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {["100% Confidential", "No Data Stored", "Free Support"].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-card/50"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Index;
