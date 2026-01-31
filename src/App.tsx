import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FloatingDots from "./components/FloatingDots";
import CursorTrail from "./components/CursorTrail";
import Index from "./pages/Index";
import ReportPage from "./pages/ReportPage";
import RightsPage from "./pages/RightsPage";
import CyberSafetyPage from "./pages/CyberSafetyPage";
import MentorChatPage from "./pages/MentorChatPage";
import DirectoryPage from "./pages/DirectoryPage";
import EmergencyPage from "./pages/EmergencyPage";
import SafetyTipsPage from "./pages/SafetyTipsPage";
import NotFound from "./pages/NotFound";
import DojoLanding from "./pages/DojoLanding";
import DojoLogin from "./pages/DojoLogin";
import DojoDashboard from "./pages/DojoDashboard";

import { EmergencyRecorder } from "./components/EmergencyRecorder";
import { EmergencyContactSetup } from "./components/EmergencyContactSetup";

const queryClient = new QueryClient();

const App = () => {
  const [showContactSetup, setShowContactSetup] = useState(false);

  useEffect(() => {
    const contactData = localStorage.getItem('emergencyContact');
    const setupComplete = localStorage.getItem('emergencySetupComplete');

    if (!contactData && !setupComplete) {
      setShowContactSetup(true);
    }
  }, []);

  const handleContactSetupComplete = (contact: { name: string; phone: string }) => {
    if (contact.phone) {
      console.log('Emergency contact saved:', contact);
    }
    localStorage.setItem('emergencySetupComplete', 'true');
    setShowContactSetup(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showContactSetup && <EmergencyContactSetup onComplete={handleContactSetupComplete} />}
        <EmergencyRecorder />
        <Toaster />
        <Sonner />
        <FloatingDots />
        <CursorTrail />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/rights" element={<RightsPage />} />
            <Route path="/cyber" element={<CyberSafetyPage />} />
            <Route path="/mentor" element={<MentorChatPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/safety-tips" element={<SafetyTipsPage />} />
            <Route path="/dojo" element={<DojoLanding />} />
            <Route path="/dojo/login" element={<DojoLogin />} />
            <Route path="/dojo/dashboard" element={<DojoDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
