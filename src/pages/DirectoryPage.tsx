import { Navigation, DesktopNav } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, AlertTriangle, MapPin, Globe, ExternalLink, BookOpen } from "lucide-react";

const DirectoryPage = () => {
  const organizations = [
    {
      name: "National Commission for Women",
      type: "Government",
      description: "Statutory body for women's rights",
      phone: "7827-170-170",
      location: "New Delhi",
    },
    {
      name: "One Stop Centre",
      type: "Support Center",
      description: "Integrated support for women affected by violence",
      phone: "181",
      location: "Multiple locations",
    },
    {
      name: "Legal Aid Services",
      type: "Legal",
      description: "Free legal assistance for women",
      phone: "15100",
      location: "All Districts",
    },
    {
      name: "Sakhi One Stop",
      type: "NGO",
      description: "Shelter, counseling, and legal aid",
      phone: "1800-011-011", // Placeholder
      location: "Multiple States",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f111a] text-white relative pb-20 md:pb-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/help-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative z-10">
        <DesktopNav />

        <div className="pt-20 md:pt-24 px-4 py-8">
          <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
              <p className="text-muted-foreground text-lg">
                Emergency contacts, support services, and reporting portals
              </p>
            </div>

            {/* Emergency Numbers Section */}
            <Card className="p-6 md:p-8 mb-6 gradient-card shadow-strong animate-slide-up border-2 border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-destructive">
                <Phone className="w-6 h-6" />
                Emergency Helplines
              </h2>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                  <a href="tel:112">
                    <div className="text-left w-full">
                      <div className="text-2xl font-bold mb-1">112</div>
                      <div className="text-sm opacity-90">National Emergency (Police, Fire, Ambulance)</div>
                    </div>
                  </a>
                </Button>

                <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                  <a href="tel:1091">
                    <div className="text-left w-full">
                      <div className="text-2xl font-bold mb-1">1091</div>
                      <div className="text-sm opacity-90">Women's Helpline</div>
                    </div>
                  </a>
                </Button>

                <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                  <a href="tel:181">
                    <div className="text-left w-full">
                      <div className="text-2xl font-bold mb-1">181</div>
                      <div className="text-sm opacity-90">Women in Distress (Domestic Violence)</div>
                    </div>
                  </a>
                </Button>

                <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                  <a href="tel:1930">
                    <div className="text-left w-full">
                      <div className="text-2xl font-bold mb-1">1930</div>
                      <div className="text-sm opacity-90">Cyber Crime Helpline</div>
                    </div>
                  </a>
                </Button>
              </div>
            </Card>

            {/* Online Reporting */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  Online Crime Reporting
                </h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start h-auto py-4">
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                      <div className="text-left flex-1">
                        <div className="font-bold mb-1">Cyber Crime Portal</div>
                        <div className="text-sm text-muted-foreground">Report cyber stalking, fraud & harassment</div>
                      </div>
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="w-full justify-start h-auto py-4">
                    <a href="https://www.shebox.nic.in" target="_blank" rel="noopener noreferrer">
                      <div className="text-left flex-1">
                        <div className="font-bold mb-1">SHe-Box Portal</div>
                        <div className="text-sm text-muted-foreground">Workplace sexual harassment complaints</div>
                      </div>
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-secondary" />
                  State Helplines
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Delhi</span>
                    <a href="tel:181" className="text-primary hover:underline font-bold">181</a>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Maharashtra</span>
                    <a href="tel:103" className="text-primary hover:underline font-bold">103 / 1091</a>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Karnataka</span>
                    <a href="tel:1091" className="text-primary hover:underline font-bold">1091</a>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Tamil Nadu</span>
                    <a href="tel:1091" className="text-primary hover:underline font-bold">1091</a>
                  </div>
                  <div className="mt-2 text-xs text-center text-muted-foreground">
                    Most states support <span className="font-bold">112</span> and <span className="font-bold">181</span>.
                  </div>
                </div>
              </Card>
            </div>

            {/* Support Organizations Directory */}
            <Card className="p-6 gradient-card shadow-soft animate-slide-up mb-6" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Support Organizations Directory
              </h3>
              <div className="grid gap-4">
                {organizations.map((org, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="mb-3 md:mb-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg">{org.name}</h4>
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-secondary/20 text-secondary-foreground">
                          {org.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{org.description}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {org.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a href={`tel:${org.phone}`}>
                          <Phone className="w-3 h-3 mr-2" />
                          {org.phone}
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Safety Tips Summary */}
            <Card className="p-6 gradient-card shadow-soft animate-slide-up bg-primary/5 border-primary/10" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Quick Safety Protocol
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-background/60">
                  <div className="font-bold mb-1 text-primary">1. Secure Location</div>
                  <p className="text-muted-foreground">Move to a crowded public area or a police station immediately.</p>
                </div>
                <div className="p-3 rounded-lg bg-background/60">
                  <div className="font-bold mb-1 text-primary">2. Contact Help</div>
                  <p className="text-muted-foreground">Dial 112 immediately. Share your live location with trusted contacts.</p>
                </div>
                <div className="p-3 rounded-lg bg-background/60">
                  <div className="font-bold mb-1 text-primary">3. Document</div>
                  <p className="text-muted-foreground">If safe, record audio/video. Do not delete any threatening messages.</p>
                </div>
              </div>
            </Card>

            {/* Disclaimer */}
            <div className="mt-6 flex gap-2 justify-center text-xs text-muted-foreground opacity-60">
              <AlertTriangle className="w-3 h-3 mt-0.5" />
              <p>Emergency numbers are for real situations. Misuse is a punishable offense.</p>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
};

export default DirectoryPage;
