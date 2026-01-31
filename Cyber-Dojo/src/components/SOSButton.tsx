import React, { useState } from 'react'
import { Shield, AlertTriangle, Phone, MessageSquare, Users } from 'lucide-react'
import { NinjaButton } from './ui/ninja-button'
import { NinjaCard, NinjaCardContent, NinjaCardHeader, NinjaCardTitle, NinjaCardDescription } from './ui/ninja-card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

const SOSButton = () => {
  const [isEmergency, setIsEmergency] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleEmergencyClick = () => {
    setIsEmergency(true)
    // Simulate emergency alert
    setTimeout(() => {
      setIsEmergency(false)
    }, 3000)
  }

  const mentors = [
    {
      id: 1,
      name: "Priya Sensei",
      rank: "Cyber Security Sensei",
      specialization: "Harassment & Bullying",
      availability: "Online",
      responseTime: "< 2 min",
      rating: 4.9
    },
    {
      id: 2,
      name: "Aarti Samurai",
      rank: "Digital Safety Samurai",
      specialization: "Scam Detection",
      availability: "Online",
      responseTime: "< 5 min",
      rating: 4.8
    },
    {
      id: 3,
      name: "Shreya Ninja",
      rank: "Privacy Protection Ninja",
      specialization: "Identity Theft",
      availability: "Busy",
      responseTime: "< 10 min",
      rating: 4.7
    }
  ]

  return (
    <>
      {/* Main SOS Button */}
      <Dialog>
        <DialogTrigger asChild>
          <NinjaButton
            variant="sos"
            size="xl"
            className="w-16 h-16 rounded-full"
          >
            <Shield className="w-8 h-8" />
          </NinjaButton>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[500px] bg-card border border-border">
          <DialogHeader>
            <DialogTitle className="font-orbitron text-2xl text-center text-ninja-glow">
              🛡️ Guardian Shield Activated
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 p-4">
            {/* Emergency Options */}
            <div className="grid grid-cols-1 gap-4">
              <NinjaCard className="cursor-pointer hover:scale-105 transition-transform" onClick={() => setSelectedOption('anonymous')}>
                <NinjaCardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Anonymous Help</h3>
                      <p className="text-sm text-muted-foreground">Get help while staying completely anonymous</p>
                    </div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>

              <NinjaCard className="cursor-pointer hover:scale-105 transition-transform" onClick={() => setSelectedOption('mentor')}>
                <NinjaCardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-secondary-gradient flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Connect to Sensei</h3>
                      <p className="text-sm text-muted-foreground">Get guidance from verified mentors</p>
                    </div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>

              <NinjaCard className="cursor-pointer hover:scale-105 transition-transform bg-danger/10 border-danger/30" onClick={handleEmergencyClick}>
                <NinjaCardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-danger flex items-center justify-center animate-pulse">
                      <AlertTriangle className="w-6 h-6 text-danger-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-danger">Emergency Alert</h3>
                      <p className="text-sm text-muted-foreground">Immediate help needed - alert authorities</p>
                    </div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>
            </div>

            {/* Available Mentors */}
            {selectedOption === 'mentor' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="font-orbitron text-lg text-ninja-glow">Available Senseis</h3>
                {mentors.map((mentor) => (
                  <NinjaCard key={mentor.id} className="cursor-pointer hover:scale-102 transition-transform">
                    <NinjaCardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center">
                            <span className="text-sm font-bold text-primary-foreground">
                              {mentor.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                            <p className="text-xs text-muted-foreground">{mentor.rank}</p>
                            <p className="text-xs text-primary">{mentor.specialization}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            mentor.availability === 'Online' ? 'bg-safe/20 text-safe' : 'bg-warning/20 text-warning'
                          }`}>
                            {mentor.availability}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{mentor.responseTime}</p>
                          <p className="text-xs text-primary">⭐ {mentor.rating}</p>
                        </div>
                      </div>
                      <NinjaButton variant="ninja" size="sm" className="w-full mt-3">
                        Connect Now
                      </NinjaButton>
                    </NinjaCardContent>
                  </NinjaCard>
                ))}
              </div>
            )}

            {/* Anonymous Help */}
            {selectedOption === 'anonymous' && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="font-orbitron text-lg text-ninja-glow">Anonymous Support</h3>
                <NinjaCard>
                  <NinjaCardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Your identity will be completely protected. Describe your situation and we'll connect you with the right help.
                    </p>
                    <textarea
                      placeholder="Describe your situation (no personal details needed)..."
                      className="w-full h-24 p-3 bg-input border border-border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <NinjaButton variant="ninja" className="w-full mt-3">
                      Send Anonymous Request
                    </NinjaButton>
                  </NinjaCardContent>
                </NinjaCard>
              </div>
            )}

            {/* Emergency Confirmation */}
            {isEmergency && (
              <div className="fixed inset-0 bg-danger/90 flex items-center justify-center z-50 animate-fade-in">
                <NinjaCard className="border-danger bg-card">
                  <NinjaCardContent className="p-6 text-center">
                    <AlertTriangle className="w-16 h-16 text-danger mx-auto mb-4 animate-pulse" />
                    <h3 className="font-orbitron text-xl text-danger mb-2">Emergency Alert Sent!</h3>
                    <p className="text-sm text-muted-foreground">
                      Your alert has been sent to authorities and emergency contacts.
                      Help is on the way.
                    </p>
                  </NinjaCardContent>
                </NinjaCard>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SOSButton