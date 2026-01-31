import { Navigation, DesktopNav } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, AlertTriangle, MapPin, Globe, ExternalLink } from "lucide-react";

const EmergencyPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <DesktopNav />

      <div className="pt-20 md:pt-24 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-destructive/10 mb-4">
              <AlertTriangle className="w-10 h-10 text-destructive" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Help</h1>
            <p className="text-muted-foreground text-lg">
              Quick access to immediate support and emergency services
            </p>
          </div>

          {/* National Emergency Numbers */}
          <Card className="p-6 md:p-8 mb-6 gradient-card shadow-strong animate-slide-up border-2 border-destructive/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Phone className="w-6 h-6 text-destructive" />
              National Emergency Helplines
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                <a href="tel:112">
                  <div className="text-left w-full">
                    <div className="text-2xl font-bold mb-1">112</div>
                    <div className="text-sm opacity-90">Emergency (Police, Ambulance, Fire)</div>
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
                <a href="tel:1930">
                  <div className="text-left w-full">
                    <div className="text-2xl font-bold mb-1">1930</div>
                    <div className="text-sm opacity-90">Cyber Crime Helpline</div>
                  </div>
                </a>
              </Button>

              <Button asChild size="lg" variant="destructive" className="h-auto py-4">
                <a href="tel:181">
                  <div className="text-left w-full">
                    <div className="text-2xl font-bold mb-1">181</div>
                    <div className="text-sm opacity-90">Women in Distress</div>
                  </div>
                </a>
              </Button>
            </div>
          </Card>

          {/* Online Reporting */}
          <Card className="p-6 mb-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              Online Crime Reporting
            </h3>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start h-auto py-4">
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                  <div className="text-left flex-1">
                    <div className="font-bold mb-1">Cyber Crime Portal</div>
                    <div className="text-sm text-muted-foreground">Report online harassment, fraud, and cyber crimes</div>
                  </div>
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full justify-start h-auto py-4">
                <a href="https://www.shebox.nic.in" target="_blank" rel="noopener noreferrer">
                  <div className="text-left flex-1">
                    <div className="font-bold mb-1">SHe-Box Portal</div>
                    <div className="text-sm text-muted-foreground">Sexual harassment complaint at workplace</div>
                  </div>
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </Card>

          {/* State-wise Women's Helplines */}
          <Card className="p-6 mb-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-secondary" />
              State Women's Helplines
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">Delhi</span>
                <Button asChild size="sm" variant="outline">
                  <a href="tel:1091">1091 / 181</a>
                </Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">Maharashtra</span>
                <Button asChild size="sm" variant="outline">
                  <a href="tel:1091">1091 / 103</a>
                </Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">Karnataka</span>
                <Button asChild size="sm" variant="outline">
                  <a href="tel:1091">1091 / 181</a>
                </Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-medium">Tamil Nadu</span>
                <Button asChild size="sm" variant="outline">
                  <a href="tel:1091">1091 / 181</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                For other states, dial 181 (national women's helpline)
              </p>
            </div>
          </Card>

          {/* Safety Tips */}
          <Card className="p-6 gradient-card shadow-soft animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-success" />
              In an Emergency
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-success font-bold">1.</span>
                <span>Move to a safe location if possible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success font-bold">2.</span>
                <span>Call emergency services immediately (112 or 1091)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success font-bold">3.</span>
                <span>Share your location with trusted contacts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success font-bold">4.</span>
                <span>If possible, record evidence (photos, videos, messages)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success font-bold">5.</span>
                <span>Don't hesitate to make noise and draw attention</span>
              </li>
            </ul>
          </Card>

          {/* Disclaimer */}
          <Card className="mt-6 p-4 border-secondary bg-secondary/5 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium mb-1">Important Note</p>
                <p className="text-sm text-muted-foreground">
                  This app is for demonstration purposes. The emergency numbers shown are real
                  Indian helplines. In a real emergency, please contact local authorities immediately.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default EmergencyPage;
