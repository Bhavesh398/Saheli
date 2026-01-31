import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Shield, Zap, Users, Mail, Lock } from 'lucide-react'
import { NinjaButton } from '@/components/ui/ninja-button'
import { NinjaCard, NinjaCardContent, NinjaCardHeader, NinjaCardTitle } from '@/components/ui/ninja-card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import cyberNinjaHero from '@/assets/cyber-ninja-hero.jpg'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    ninjaName: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to Supabase authentication
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-glow rounded-full animate-particle-float opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Hero Image */}
        <div className="hidden lg:block relative">
          <div className="relative animate-ninja-entrance">
            <img 
              src={cyberNinjaHero}
              alt="CyberDojo Ninja"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-glow animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
          </div>
          
          {/* Floating Feature Icons */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center animate-glow">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute bottom-4 left-4 w-10 h-10 bg-secondary-gradient rounded-full flex items-center justify-center animate-float">
            <Zap className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="absolute top-1/2 -left-6 w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center animate-glow">
            <Users className="w-4 h-4 text-primary-foreground" />
          </div>

          {/* Welcome Text */}
          <div className="mt-8 text-center space-y-4">
            <h1 className="text-4xl font-orbitron font-bold text-ninja-glow">
              Welcome to the Dojo
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the art of cyber safety with AI-powered training and expert mentorship
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <NinjaCard className="animate-scale-in">
            <NinjaCardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center animate-glow">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <NinjaCardTitle className="text-2xl font-orbitron text-ninja-glow">
                {isLogin ? 'Enter the Dojo' : 'Join the Dojo'}
              </NinjaCardTitle>
              <p className="text-muted-foreground mt-2">
                {isLogin 
                  ? 'Welcome back, ninja. Ready to continue your training?' 
                  : 'Begin your journey to become a cyber safety master'
                }
              </p>
            </NinjaCardHeader>

            <NinjaCardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="ninjaName" className="text-sm font-medium">
                      Choose Your Ninja Name
                    </Label>
                    <Input
                      id="ninjaName"
                      name="ninjaName"
                      type="text"
                      placeholder="CyberNinja2024"
                      value={formData.ninjaName}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ninja@cyberdojo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-input border-border focus:border-primary pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="bg-input border-border focus:border-primary pl-10"
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-border" />
                      <span>Remember me</span>
                    </label>
                    <button 
                      type="button"
                      className="text-sm text-primary hover:text-primary-glow transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Link to="/dashboard">
                  <NinjaButton 
                    type="submit" 
                    variant="ninja" 
                    size="lg" 
                    className="w-full"
                  >
                    {isLogin ? 'Enter Dojo' : 'Begin Training'}
                  </NinjaButton>
                </Link>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isLogin 
                      ? "New to CyberDojo? Create account" 
                      : "Already have an account? Sign in"
                    }
                  </button>
                </div>

                {/* Social Login */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <NinjaButton variant="outline" size="sm" className="w-full">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </NinjaButton>
                  <NinjaButton variant="outline" size="sm" className="w-full">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Twitter
                  </NinjaButton>
                </div>
              </form>
            </NinjaCardContent>
          </NinjaCard>

          {/* Back to Landing */}
          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to CyberDojo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login