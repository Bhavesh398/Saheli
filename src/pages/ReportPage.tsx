import { Shield, AlertTriangle, FileText, Lock, MapPin, Send, Camera, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForensicAnalysisSection } from "@/components/ForensicAnalysisSection";
import { Navigation, DesktopNav } from "@/components/Navigation";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, MicOff } from "lucide-react";

const ReportPage = () => {
  const [incidentType, setIncidentType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState("Anonymous");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const handleMicClick = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in this browser.",
        variant: "destructive"
      });
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      toast({ title: "Listening...", description: "Speak now to describe the incident." });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setDescription(prev => prev + (prev ? " " : "") + transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      setIsListening(false);
      toast({ title: "Error", description: "Could not recognize speech.", variant: "destructive" });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const startCamera = async () => {
    setShowCamera(true);
    // Delay slightly to ensure dialog is mounted
    setTimeout(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        toast({ title: "Camera Error", description: "Could not access camera.", variant: "destructive" });
        setShowCamera(false);
      }
    }, 100);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 300, 200);
        const dataUrl = canvasRef.current.toDataURL('image/png');
        setCapturedImage(dataUrl);
        stopCamera();
        setShowCamera(false);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const incidentTypes = [
    { id: "harassment", label: "Workplace Harassment", icon: AlertTriangle, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { id: "cyber", label: "Cyber Bullying", icon: Shield, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { id: "safety", label: "Physical Safety", icon: Lock, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
    { id: "other", label: "Other Concern", icon: FileText, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  ];

  const generatePDF = (reportId: string) => {
    const doc = new jsPDF();
    const dateObj = new Date();
    const dateStr = dateObj.toLocaleDateString();
    const timeStr = dateObj.toLocaleTimeString();

    // -- Fonts & Styling --
    doc.setFont("times", "bold");

    // -- Header --
    doc.setFontSize(10);
    doc.text("FORM - I", 180, 15, { align: "right" });
    doc.setFontSize(16);
    doc.text("FIRST INFORMATION REPORT", 105, 20, { align: "center" });
    doc.setFontSize(11);
    doc.text("(Under Section 154 Cr.P.C.)", 105, 26, { align: "center" });

    doc.setLineWidth(0.5);
    doc.line(10, 30, 200, 30);

    // -- Section 1: Official Data --
    doc.setFont("times", "normal");
    doc.setFontSize(11);

    doc.text(`1. District: Virtual Cyber Cell`, 15, 40);
    doc.text(`P.S.: Nari Suraksha Portal`, 90, 40);
    doc.text(`Year: ${dateObj.getFullYear()}`, 160, 40);

    doc.text(`2. FIR No.: ${reportId}`, 15, 50);
    doc.text(`Date: ${dateStr}`, 90, 50);
    doc.text(`Time: ${timeStr}`, 160, 50);

    doc.line(10, 55, 200, 55);

    // -- Section 2: Acts & Sections --
    doc.setFont("times", "bold");
    doc.text("3. Acts & Sections:", 15, 65);
    doc.setFont("times", "normal");

    // Dynamic mapping of incident to legal sections
    let sections = "Information Technology Act, 2000";
    if (incidentType === 'harassment') sections = "POSH Act 2013 / IPC Sec 354 (Assault to women)";
    if (incidentType === 'cyber') sections = "IT Act Sec 66E (Privacy) / Sec 67 (Obscenity)";
    if (incidentType === 'safety') sections = "IPC Sec 509 (Insult to modesty) / Sec 354D (Stalking)";
    if (incidentType === 'other') sections = "General Diary Entry (GD) / As Applicable";

    const typeLabel = incidentTypes.find(t => t.id === incidentType)?.label || "Reported Incident";
    doc.text(`   (i) Nature of Offence: ${typeLabel}`, 15, 73);
    doc.text(`   (ii) Applicable Acts: ${sections}`, 15, 80);

    doc.line(10, 87, 200, 87);

    // -- Section 3: Occurrence --
    doc.setFont("times", "bold");
    doc.text("4. Occurrence of Offence:", 15, 97);
    doc.setFont("times", "normal");
    doc.text(`   (a) Place of Occurrence: ${location || "Not Provided"}`, 15, 105);
    doc.text(`   (b) Date Reported: ${dateStr}`, 110, 105);
    doc.text(`   (c) Time Reported: ${timeStr}`, 110, 112);

    doc.line(10, 118, 200, 118);

    // -- Section 4: Complainant --
    doc.setFont("times", "bold");
    doc.text("5. Complainant Informant:", 15, 128);
    doc.setFont("times", "normal");
    doc.text(`   (a) Name/Identity: ${privacy === 'Anonymous' ? 'Protected Identity (Anonymous)' : 'User Provided Info'}`, 15, 136);
    doc.text(`   (b) Note: Identity withheld for safety under victim protection protocols.`, 15, 143);

    doc.line(10, 148, 200, 148);

    // -- Section 5: Description --
    doc.setFont("times", "bold");
    doc.text("6. FIR Contents / Description of Incident:", 15, 158);
    doc.setFont("times", "normal");

    // Use doc.splitTextToSize to wrap text
    const splitDesc = doc.splitTextToSize(description || "No detailed description provided.", 180);
    // Add text starting at y=166
    doc.text(splitDesc, 15, 166);

    // Calculate new yPos based on description length 
    let yPos = 166 + (splitDesc.length * 6) + 10;

    // -- Section 6: Action Taken --
    doc.setLineWidth(0.5);
    doc.line(10, yPos, 200, yPos);
    yPos += 10;

    doc.setFont("times", "bold");
    doc.text("7. Action Taken:", 15, yPos);
    doc.setFont("times", "normal");
    yPos += 7;
    doc.text("Since the above information reveals commission of offence(s) u/s as mentioned at Item No. 3,", 15, yPos);
    yPos += 6;
    doc.text("the case has been registered and the investigation is taken up.", 15, yPos);
    yPos += 6;
    doc.text("FIR is securely digitally recorded on the Nari Suraksha Blockchain Ledger.", 15, yPos);

    // -- Footer & Stamp --
    yPos += 25;

    // Digital Stamp Simulation
    doc.setDrawColor(200, 0, 0); // Red
    doc.setLineWidth(1);
    doc.circle(170, yPos, 18);
    doc.setTextColor(200, 0, 0);
    doc.setFontSize(8);
    doc.text("NARI SURAKSHA", 170, yPos - 12, { align: "center", angle: 30 });
    doc.text("DIGITAL", 170, yPos - 2, { align: "center" });
    doc.text("VERIFIED", 170, yPos + 4, { align: "center" });
    doc.text("OFFICIAL", 170, yPos + 10, { align: "center" });

    // Signature Line
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text("Signature / Digital Thumb of Officer-in-Charge", 130, yPos + 30);
    doc.text(`Name: AI Nodal Officer`, 130, yPos + 36);
    doc.text(`Rank: Senior Cyber Inspector`, 130, yPos + 42);

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text("This is a computer generated document and does not require physical signature.", 105, 285, { align: "center" });

    doc.save(`Official_FIR_${reportId}.pdf`);
  };

  const handleSubmit = () => {
    if (!incidentType) {
      toast({
        title: "Missing Information",
        description: "Please select an incident type.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      const reportId = "ENC-" + Math.floor(Math.random() * 100000);

      toast({
        title: "Report Submitted Securely",
        description: `Your report ID is #${reportId}. Generating PDF copy...`,
        className: "bg-green-600 border-none text-white",
      });

      generatePDF(reportId);

      // Reset form (optional)
      // setIncidentType("");
      // setDescription("");
      // setLocation("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f111a] text-white font-sans selection:bg-purple-500/30 pb-20 md:pb-8">
      <DesktopNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -z-10" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 mb-6 shadow-glow animate-fade-in">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400 mb-6 animate-slide-up">
            Secure Reporting Portal
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Submit incidents confidentially. Your safety and privacy are our top priority.
            Calls are encrypted and reports are anonymous by default.
          </p>
        </div>
      </section>

      <section className="px-4 -mt-4 relative z-20">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-[#1e202e]/80 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden rounded-3xl animate-scale-in">
            {/* Progress/Decorative Line */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

            <div className="p-6 md:p-8 space-y-8">

              {/* Incident Type Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-medium text-white flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">1</span>
                  Select Incident Type
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {incidentTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = incidentType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setIncidentType(type.id)}
                        className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 text-left flex items-start gap-4 ${isSelected
                          ? `border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]`
                          : "border-white/5 hover:border-white/20 hover:bg-white/5"
                          }`}
                      >
                        <div className={`p-3 rounded-xl ${isSelected ? "bg-purple-500 text-white" : `${type.bg} ${type.color}`} transition-colors`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className={`block font-semibold text-sm ${isSelected ? "text-white" : "text-gray-300"}`}>
                            {type.label}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">Click to select</span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Location
                  </Label>
                  <Input
                    placeholder="Where did it happen?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-purple-500/20 rounded-xl h-12"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                    Privacy Level
                  </Label>
                  <div className="flex bg-black/20 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setPrivacy("Anonymous")}
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${privacy === "Anonymous" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-white"}`}
                    >
                      Anonymous
                    </button>
                    <button
                      onClick={() => setPrivacy("Named")}
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-colors ${privacy === "Named" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-white"}`}
                    >
                      Named
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <Label className="text-lg font-medium text-white flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">2</span>
                  Details
                </Label>
                <div className="relative">
                  <Textarea
                    placeholder="Describe the incident deeply. Trust us, we are here to listen..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[160px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-purple-500/20 rounded-xl resize-none p-4"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={handleMicClick}
                      className={`h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 ${isListening ? 'text-red-500 animate-pulse bg-red-500/10' : 'text-gray-400'}`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={startCamera}
                      className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {capturedImage && (
                  <div className="relative inline-block mt-2">
                    <img src={capturedImage} alt="Captured" className="h-20 w-auto rounded-lg border border-white/20" />
                    <button
                      onClick={() => setCapturedImage(null)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"
                    >
                      <Loader2 className="w-3 h-3 rotate-45" />
                    </button>
                    {/* Using Loader2 as X icon rotated for speed, or just import X */}
                  </div>
                )}
              </div>

              {/* Evidence Upload Section (Wrapped Component) */}
              <div className="space-y-3">
                <Label className="text-lg font-medium text-white flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">3</span>
                  Evidence Analysis
                </Label>
                <div className="bg-black/20 rounded-xl border border-white/10 overflow-hidden">
                  <ForensicAnalysisSection />
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-4">
                <Button
                  size="xl"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-16 text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-900/20 rounded-2xl transition-all hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Encrypting & Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Secure Report
                    </div>
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" />
                  256-bit End-to-End Encryption Enabled
                </p>
              </div>

            </div>
          </Card>
        </div>
      </section>

      <Navigation />

      {/* Camera Dialog */}
      <Dialog open={showCamera} onOpenChange={(open) => {
        if (!open) stopCamera();
        setShowCamera(open);
      }}>
        <DialogContent className="bg-[#1a1c2e] border-white/10 text-white sm:max-w-md">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-bold">Take Photo</h3>
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black">
              <video ref={videoRef} autoPlay playsInline className="w-[300px] h-[200px] object-cover" />
              <canvas ref={canvasRef} width="300" height="200" className="hidden" />
            </div>
            <div className="flex gap-4">
              <Button onClick={capturePhoto} className="bg-purple-600 hover:bg-purple-700">Capture</Button>
              <Button variant="outline" onClick={() => setShowCamera(false)} className="border-white/10 hover:bg-white/5">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportPage;
