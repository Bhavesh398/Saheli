import React, { useState } from 'react'
import { MessageCircle, X, Heart, Shield, Sparkles } from 'lucide-react'
import { NinjaButton } from './ui/ninja-button'
import { NinjaCard, NinjaCardContent, NinjaCardHeader, NinjaCardTitle } from './ui/ninja-card'

const EmotionalAI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Kira, your emotional support ninja. I'm here to help you stay safe and confident online. How are you feeling today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand how you're feeling. Remember, you're stronger than any cyber threat! 💪",
        "That sounds challenging. Would you like me to help you report this or connect you with a mentor?",
        "You're taking the right steps by talking about this. Your safety matters! 🛡️",
        "I'm here to support you. Have you tried using our threat detection tools?",
        "You're not alone in this. Our community of cyber ninjas has your back! ⭐"
      ]

      const botResponse = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Floating AI Button */}
      <div className={`fixed bottom-20 left-6 z-50 transition-all duration-300 ${isOpen ? 'translate-y-2' : ''}`}>
        <NinjaButton
          variant="ninja"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-glow animate-float"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </NinjaButton>
      </div>

      {/* AI Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-36 left-6 z-40 w-80 max-h-96 animate-scale-in">
          <NinjaCard className="h-full">
            <NinjaCardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-gradient flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <NinjaCardTitle className="text-lg">Kira AI</NinjaCardTitle>
                  <p className="text-xs text-muted-foreground">Your Emotional Support Ninja</p>
                </div>
              </div>
            </NinjaCardHeader>
            
            <NinjaCardContent className="space-y-4">
              {/* Messages */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-primary-gradient text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Share your feelings..."
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <NinjaButton
                  variant="ninja"
                  size="sm"
                  onClick={sendMessage}
                  className="px-3"
                >
                  <Heart className="w-4 h-4" />
                </NinjaButton>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setInputValue("I need help with online harassment")}
                  className="text-xs px-2 py-1 bg-danger/20 text-danger rounded-full hover:bg-danger/30 transition-colors"
                >
                  🆘 Report Harassment
                </button>
                <button
                  onClick={() => setInputValue("I'm feeling anxious about online safety")}
                  className="text-xs px-2 py-1 bg-warning/20 text-warning rounded-full hover:bg-warning/30 transition-colors"
                >
                  😰 Feeling Anxious
                </button>
                <button
                  onClick={() => setInputValue("I want to learn more about staying safe")}
                  className="text-xs px-2 py-1 bg-safe/20 text-safe rounded-full hover:bg-safe/30 transition-colors"
                >
                  📚 Learn Safety
                </button>
              </div>
            </NinjaCardContent>
          </NinjaCard>
        </div>
      )}
    </>
  )
}

export default EmotionalAI