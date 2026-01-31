import {
  Heart, Shield, Lock, Phone, MapPin, Eye, Siren, Users,
  Search, PlayCircle, Menu, User, Settings, ArrowRight,
  MessageCircle, Zap, Radio, Globe, Briefcase, UserPlus,
  AlertCircle, Scale, Gavel, X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DesktopNav, Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";


const SafetyTipsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { toast } = useToast();

  const handleShareLocation = () => {
    toast({
      title: "Live Location Shared",
      description: "Your live location has been sent to your trusted contacts.",
      className: "bg-green-600 border-none text-white",
    });
  };

  const EmergencyContent = () => (
    <div className="grid gap-4 py-4">
      {/* Cyber Crime */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-4">
          <div className="bg-red-500/20 p-3 rounded-full">
            <Lock className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="font-semibold text-white">Cyber Crime Helpline</p>
            <p className="text-xs text-gray-400">National Cyber Crime Reporting</p>
          </div>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => window.open('tel:1930')}>
          1930
        </Button>
      </div>
      {/* Women Helpline */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-4">
          <div className="bg-pink-500/20 p-3 rounded-full">
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <p className="font-semibold text-white">Women's Helpline</p>
            <p className="text-xs text-gray-400">Domestic Abuse & Safety</p>
          </div>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white" onClick={() => window.open('tel:1091')}>
          1091
        </Button>
      </div>
      {/* Police Emergency */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500/20 p-3 rounded-full">
            <Siren className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="font-semibold text-white">Police Emergency</p>
            <p className="text-xs text-gray-400">Immediate Assistance</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open('tel:112')}>
          112
        </Button>
      </div>
      <div className="text-center mt-2">
        <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:underline">
          Visit National Cyber Crime Reporting Portal
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f111a] text-white font-sans selection:bg-purple-500/30">
      <DesktopNav />

      {/* Top Header Area */}
      <header className="pt-20 md:pt-24 px-6 md:px-12 flex flex-col md:flex-row justify-between items-end md:items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
            <div className="absolute inset-0 blur-lg bg-pink-500/50" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Safety Tips
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-400">
          <Heart className="w-5 h-5" />
          <span className="text-lg">Out & About</span>
        </div>
      </header>

      <div className="px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-8 pb-24">

        {/* Main Content Area (3 Cols) */}
        <div className="lg:col-span-3 space-y-8">

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {["All", "Digital", "Travel", "Physical", "Category", "Legal"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? "bg-purple-600 text-white shadow-glow"
                  : "bg-[#1e202e] text-gray-400 hover:bg-[#2a2d3e]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Emergency Contacts - Orange Card */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 relative overflow-hidden group col-span-1 md:col-span-1 h-48 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all">
                  <div className="absolute top-0 right-0 p-4 opacity-50">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Emergency Contacts</h3>
                    <p className="text-orange-100 text-xs mt-1">Trust Your Inner Voice</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="h-2 w-24 bg-white/20 rounded-full" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-[#1a1c2e] border-white/10 text-white sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <Shield className="w-6 h-6 text-purple-500" />
                    Emergency Contacts
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Direct official helplines for immediate assistance.
                  </DialogDescription>
                </DialogHeader>
                <EmergencyContent />
              </DialogContent>
            </Dialog>

            {/* Self-Defense Basics - Dark Card */}
            <div className="bg-[#1e202e] rounded-3xl p-6 col-span-1 md:col-span-1 border border-white/5 relative overflow-hidden h-48">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-200">Self-Defense Basics</h3>
                <div className="w-8 h-5 bg-gray-700 rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1552072092-801b9f3f4d6d?w=200&h=200&fit=crop" alt="Self Defense" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <PlayCircle className="w-8 h-8 text-white relative z-10" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Basic maneuvers</p>
                  <p className="text-xs text-gray-500">Refresher</p>
                </div>
              </div>
            </div>

            {/* Situation Awareness - Dark Card */}
            <div className="bg-[#1e202e] rounded-3xl p-6 col-span-1 md:col-span-1 border border-white/5 h-48 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-200">Situation Awareness</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-300 font-medium">Safe Zones</p>
                    <p className="text-xs text-gray-500">Urban - Unknown</p>
                  </div>
                  <div className="w-10 h-6 bg-purple-600 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-300">Alerts</p>
                  <p className="text-[10px] text-gray-600 bg-gray-800 px-2 py-1 rounded">Public Transport</p>
                </div>
              </div>
            </div>

            {/* Personal Security Protocols - Wide Dark Card */}
            <div className="bg-[#1e202e] rounded-3xl p-6 col-span-1 md:col-span-2 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-semibold text-gray-200 mb-4">Personal Security Protocols</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Emergency Contacts</p>
                    <div className="flex -space-x-2 mt-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs">M</div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs">D</div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">+3</div>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/5 hover:bg-white/10">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Share Live Location - Map Card */}
            <div className="bg-[#2a2d3e] rounded-3xl p-6 col-span-1 md:col-span-1 border border-white/5 relative overflow-hidden cursor-pointer hover:bg-[#32364a] transition-colors" onClick={handleShareLocation}>
              <div className="absolute inset-0 opacity-30">
                {/* Fake Map Background */}
                <div className="w-full h-full bg-[radial-gradient(#4a4e69_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              <h3 className="relative z-10 font-semibold text-gray-200 mb-2">Share Live Location</h3>
              <div className="relative z-10 flex items-center justify-center py-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-4 border-purple-500/30 flex items-center justify-center animate-pulse">
                    <div className="w-14 h-14 rounded-full border-4 border-purple-500 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white fill-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3 bg-[#1e202e] p-3 rounded-xl border border-white/5">
                <div className="p-2 bg-purple-500/20 rounded-full">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Trust Your Gut</p>
                  <p className="text-xs text-gray-500">Alert Sent</p>
                </div>
              </div>
            </div>

            {/* Public Transport Safety - Blue Card */}
            <div className="bg-blue-600 rounded-3xl p-6 col-span-1 md:col-span-1 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -right-4 -top-4 bg-white/10 w-24 h-24 rounded-full blur-2xl" />
              <Globe className="w-8 h-8 text-white mb-4 relative z-10" />
              <h3 className="font-bold text-white relative z-10">Public Transport Safety</h3>
              <p className="text-blue-100 text-xs mt-2 relative z-10 leading-relaxed">
                Stay alert and keep belongings close. Avoid empty carriages.
              </p>
            </div>

            {/* Workplace Harassment - Purple Card */}
            <div className="bg-purple-600 rounded-3xl p-6 col-span-1 md:col-span-1 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <Briefcase className="w-8 h-8 text-white mb-4 relative z-10" />
              <h3 className="font-bold text-white relative z-10">Workplace Harassment</h3>
              <p className="text-purple-100 text-xs mt-2 relative z-10 leading-relaxed">
                Know your rights under the POSH Act. Speak up and report.
              </p>
            </div>

            {/* Community Watch - Green Card */}
            <div className="bg-emerald-500 rounded-3xl p-6 col-span-1 md:col-span-1 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <Users className="w-8 h-8 text-white mb-4 relative z-10" />
              <h3 className="font-bold text-white relative z-10">Community Watch</h3>
              <p className="text-emerald-100 text-xs mt-2 relative z-10 leading-relaxed">
                Join local safety groups. Strength in numbers.
              </p>
              <Heart className="absolute bottom-4 right-4 w-4 h-4 text-white/50" />
            </div>

            {/* Online Privacy - Blue Card */}
            <div className="bg-[#3b82f6] rounded-3xl p-6 col-span-1 md:col-span-1 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <Lock className="w-8 h-8 text-white mb-4 relative z-10" />
              <h3 className="font-bold text-white relative z-10">Online Privacy</h3>
              <p className="text-blue-100 text-xs mt-2 relative z-10 leading-relaxed">
                Secure your digital footprint. Use 2FA everywhere.
              </p>
            </div>

            {/* Bystander Stories - Pink Card */}
            <div className="bg-[#a855f7] rounded-3xl p-6 col-span-1 md:col-span-2 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 flex items-center justify-between">
              <div>
                <MessageCircle className="w-8 h-8 text-white mb-4 relative z-10" />
                <h3 className="font-bold text-white relative z-10">Bystander Stories</h3>
                <p className="text-purple-100 text-xs mt-2 relative z-10 leading-relaxed max-w-xs">
                  "I intervened when I saw harassment on the bus. Here's what happened..."
                </p>
              </div>
              <div className="hidden md:block bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-xs font-bold text-white mb-1">Read More</p>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>

          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          {/* Feel Quality Widget */}
          <div className="bg-gray-200 rounded-3xl p-4 flex items-center justify-between text-black">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Feel Safety</p>
                <p className="text-xs text-gray-500">Boost fast</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1e202e] rounded-3xl p-6 border border-white/5 h-full">
            <h3 className="text-gray-400 text-sm font-medium mb-6">Quick Resources</h3>

            <div className="space-y-4">
              {[
                { icon: UserPlus, label: "Find a Therapist", color: "text-purple-400", bg: "bg-purple-400/10" },
                { icon: Scale, label: "Legal Aid", color: "text-blue-400", bg: "bg-blue-400/10" },
                { icon: User, label: "Self-Defense Classes", color: "text-pink-400", bg: "bg-pink-400/10" },
                { icon: Gavel, label: "Legal Adhoc", color: "text-indigo-400", bg: "bg-indigo-400/10" }, // Gavel might not be in lucide set above?
                { icon: Zap, label: "Quick Exit", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#2a2d3e] transition-colors cursor-pointer group">
                  <div className={`p-2 rounded-xl ${item.bg} group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Navigation />

      {/* Floating Action Button (Dialog) */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-50 animate-bounce-slow cursor-pointer">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#0f111a] group-hover:scale-110 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Ask for</span>
                <span className="text-sm font-black">Help</span>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-[#1a1c2e] border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-500" />
              Emergency Contacts
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Direct official helplines for immediate assistance.
            </DialogDescription>
          </DialogHeader>
          <EmergencyContent />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SafetyTipsPage;
