import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Brain, Award, Eye, Lock, Globe, ArrowRight } from 'lucide-react'
import { NinjaButton } from '@/components/ui/ninja-button'
import { NinjaCard, NinjaCardContent, NinjaCardDescription, NinjaCardHeader, NinjaCardTitle } from '@/components/ui/ninja-card'
import { ProgressBar } from '@/components/ui/progress-bar'
import EmotionalAI from '@/components/EmotionalAI'
import SOSButton from '@/components/SOSButton'
import cyberNinjaHero from '@/assets/cyber-ninja-hero.jpg'
import cyberDojoBg from '@/assets/cyber-dojo-bg.jpg'
import senseiMentor from '@/assets/sensei-mentor.jpg'

const Landing = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Threat Detector",
      description: "Real-time protection against phishing, scams, and cyber attacks",
      color: "text-warning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Anonymous SOS",
      description: "Instant help from verified mentors while staying anonymous",
      color: "text-danger"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Gamified Learning",
      description: "Master cyber safety through interactive ninja training",
      color: "text-primary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Safe Community",
      description: "Connect with mentors and peers in a secure environment",
      color: "text-secondary"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Digital Guardian",
      description: "AI-powered protection against harassment and threats",
      color: "text-safe"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Identity Vault", 
      description: "Secure storage and monitoring of your digital identity",
      color: "text-primary-glow"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Ninjas Protected", color: "text-primary" },
    { number: "50+", label: "Sensei Mentors", color: "text-secondary" },
    { number: "99.9%", label: "Threat Detection", color: "text-safe" },
    { number: "24/7", label: "AI Guardian", color: "text-warning" }
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <img 
          src={cyberDojoBg} 
          alt="Cyber Dojo Background" 
          className="w-full h-full object-cover animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-glow rounded-full animate-particle-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-primary animate-glow" />
                <span className="text-2xl font-orbitron font-bold text-ninja-glow">CyberDojo</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <NinjaButton variant="outline" size="sm">Login</NinjaButton>
                </Link>
                <Link to="/login">
                  <NinjaButton variant="ninja" size="sm">Join Dojo</NinjaButton>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-orbitron font-bold text-ninja-glow leading-tight">
                    Master Your
                    <span className="block bg-hero-gradient bg-clip-text text-transparent">
                      Cyber Safety
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-xl">
                    Train like a ninja, protect like a sensei. Join the ultimate cyber safety dojo 
                    where AI meets martial arts philosophy.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login">
                    <NinjaButton variant="hero" size="xl" className="w-full sm:w-auto">
                      Start Training
                    </NinjaButton>
                  </Link>
                  <NinjaButton variant="outline" size="xl" className="w-full sm:w-auto">
                    Watch Demo
                  </NinjaButton>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`text-2xl font-orbitron font-bold ${stat.color}`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div className="relative animate-ninja-entrance">
                <div className="relative">
                  <img 
                    src={cyberNinjaHero}
                    alt="Cyber Ninja Guardian"
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-glow animate-float"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center animate-glow">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary-gradient rounded-full flex items-center justify-center animate-float">
                  <Zap className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            {/* Left Sidebar - Sections */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  <h2 className="text-3xl font-orbitron font-bold text-ninja-glow">
                    Your Arsenal
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold text-primary mb-2">AI Protection</h3>
                      <p className="text-sm text-muted-foreground">Advanced threat detection and prevention</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold text-secondary mb-2">Mentor Network</h3>
                      <p className="text-sm text-muted-foreground">Connect with certified security experts</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold text-safe mb-2">Safe Spaces</h3>
                      <p className="text-sm text-muted-foreground">Verified community and support groups</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content - Features Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <NinjaCard 
                      key={index} 
                      className="group cursor-pointer animate-scale-in hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <NinjaCardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                          {feature.icon}
                        </div>
                        <NinjaCardTitle className="text-xl">{feature.title}</NinjaCardTitle>
                      </NinjaCardHeader>
                      <NinjaCardContent>
                        <NinjaCardDescription>{feature.description}</NinjaCardDescription>
                      </NinjaCardContent>
                    </NinjaCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ninja Progression Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-card/50 to-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-orbitron font-bold text-ninja-glow mb-4">
                Master Your Digital Safety
              </h2>
              <p className="text-xl text-muted-foreground">
                Progress through ranks as you build your cyber safety skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ninja Level */}
              <NinjaCard className="text-center">
                <NinjaCardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥷</span>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-ninja-glow mb-2">Ninja</h3>
                  <p className="text-muted-foreground mb-4">Learn the basics of digital safety and threat recognition</p>
                  <ProgressBar value={30} showLabel label="Safety Skills" />
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div>✓ Phishing Detection</div>
                    <div>✓ Password Security</div>
                    <div>✓ Basic Privacy Settings</div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>

              {/* Samurai Level */}
              <NinjaCard className="text-center border-primary/50">
                <NinjaCardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚔️</span>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-ninja-glow mb-2">Samurai</h3>
                  <p className="text-muted-foreground mb-4">Advanced protection and community leadership skills</p>
                  <ProgressBar value={70} showLabel label="Safety Skills" variant="ninja" />
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div>✓ Advanced Threat Analysis</div>
                    <div>✓ Digital Forensics</div>
                    <div>✓ Community Moderation</div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>

              {/* Sensei Level */}
              <NinjaCard className="text-center border-secondary/50">
                <NinjaCardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-secondary-gradient flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-ninja-glow mb-2">Sensei</h3>
                  <p className="text-muted-foreground mb-4">Mentor others and lead the cyber safety community</p>
                  <ProgressBar value={100} showLabel label="Safety Skills" variant="sensei" />
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div>✓ Mentor Certification</div>
                    <div>✓ Crisis Response</div>
                    <div>✓ Platform Leadership</div>
                  </div>
                </NinjaCardContent>
              </NinjaCard>
            </div>
          </div>
        </section>

        {/* Sensei Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={senseiMentor}
                  alt="Sensei Mentor"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-glow"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-orbitron font-bold text-ninja-glow">
                  Learn from the Masters
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our certified Sensei mentors are here to guide you through every challenge. 
                  From white belt to master ninja, you'll never fight alone.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span>Verified experts with real-world experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary-gradient rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span>24/7 availability across all time zones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span>Anonymous support when you need it most</span>
                  </div>
                </div>

                <NinjaButton variant="ninja" size="lg">
                  Meet Your Sensei
                </NinjaButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-ninja-glow">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of digital ninjas who have mastered the art of cyber safety. 
                Your training starts now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <NinjaButton variant="hero" size="xl" className="w-full sm:w-auto">
                    Enter the Dojo
                  </NinjaButton>
                </Link>
                <NinjaButton variant="outline" size="xl" className="w-full sm:w-auto">
                  Learn More
                </NinjaButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Components */}
      <EmotionalAI />
      <SOSButton />
    </div>
  )
}

export default Landing