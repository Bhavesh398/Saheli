import React, { useState } from 'react'
import { Shield, Brain, Users, Award, TrendingUp, AlertTriangle, CheckCircle, Clock, Star } from 'lucide-react'
import { NinjaCard, NinjaCardContent, NinjaCardHeader, NinjaCardTitle, NinjaCardDescription } from '../components/ui/ninja-card'
import { NinjaButton } from '../components/ui/ninja-button'
import { ProgressBar } from '../components/ui/progress-bar'
import EmotionalAI from '../components/EmotionalAI'
import SOSButton from '../components/SOSButton'

const Dashboard = () => {
  const [userLevel] = useState('Samurai') // This would come from user data
  const [safetyScore] = useState(87)
  const [currentXP] = useState(2750)
  const [nextLevelXP] = useState(3000)

  const recentThreats = [
    { id: 1, type: 'Phishing Email', severity: 'High', blocked: true, time: '2 hours ago' },
    { id: 2, type: 'Suspicious Link', severity: 'Medium', blocked: true, time: '1 day ago' },
    { id: 3, type: 'Malware Attempt', severity: 'High', blocked: true, time: '2 days ago' },
  ]

  const learningModules = [
    { 
      id: 1, 
      title: 'Advanced Phishing Detection', 
      progress: 75, 
      xp: 250,
      difficulty: 'Intermediate',
      estimatedTime: '15 min'
    },
    { 
      id: 2, 
      title: 'Digital Privacy Mastery', 
      progress: 40, 
      xp: 300,
      difficulty: 'Advanced', 
      estimatedTime: '20 min'
    },
    { 
      id: 3, 
      title: 'Social Engineering Defense', 
      progress: 0, 
      xp: 200,
      difficulty: 'Beginner',
      estimatedTime: '10 min'
    },
  ]

  const leaderboard = [
    { rank: 1, name: 'Priya S.', level: 'Sensei', xp: 15420, avatar: '👑' },
    { rank: 2, name: 'Aarti M.', level: 'Sensei', xp: 14890, avatar: '🥈' },
    { rank: 3, name: 'Shreya R.', level: 'Samurai', xp: 12340, avatar: '🥉' },
    { rank: 4, name: 'You', level: 'Samurai', xp: 2750, avatar: '⚔️' },
    { rank: 5, name: 'Neha K.', level: 'Ninja', xp: 2100, avatar: '🥷' },
  ]

  const achievements = [
    { title: 'First Steps', description: 'Completed your first safety module', unlocked: true, icon: '🎯' },
    { title: 'Threat Hunter', description: 'Detected 10 threats successfully', unlocked: true, icon: '🕵️' },
    { title: 'Community Helper', description: 'Helped 5 fellow ninjas', unlocked: false, icon: '🤝' },
    { title: 'Safety Expert', description: 'Maintain 90%+ safety score for 30 days', unlocked: false, icon: '🛡️' },
  ]

  return (
    <div className="min-h-screen bg-ninja-gradient p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-orbitron text-4xl font-bold text-ninja-glow">
              Welcome back, Cyber {userLevel}! ⚔️
            </h1>
            <p className="text-muted-foreground mt-2">
              Continue your journey to digital mastery
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="font-orbitron text-2xl font-bold text-primary">{safetyScore}%</div>
              <div className="text-sm text-muted-foreground">Safety Score</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center">
              <span className="text-2xl">⚔️</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <NinjaCard>
            <NinjaCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Threats Blocked</p>
                  <p className="font-orbitron text-2xl font-bold text-safe">47</p>
                </div>
                <Shield className="w-8 h-8 text-safe" />
              </div>
            </NinjaCardContent>
          </NinjaCard>

          <NinjaCard>
            <NinjaCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Learning Streak</p>
                  <p className="font-orbitron text-2xl font-bold text-warning">12 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
            </NinjaCardContent>
          </NinjaCard>

          <NinjaCard>
            <NinjaCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Community Rank</p>
                  <p className="font-orbitron text-2xl font-bold text-secondary">#4</p>
                </div>
                <Award className="w-8 h-8 text-secondary" />
              </div>
            </NinjaCardContent>
          </NinjaCard>

          <NinjaCard>
            <NinjaCardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">People Helped</p>
                  <p className="font-orbitron text-2xl font-bold text-primary">8</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </NinjaCardContent>
          </NinjaCard>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Level Progress */}
          <NinjaCard>
            <NinjaCardHeader>
              <NinjaCardTitle>Your Progress to Sensei</NinjaCardTitle>
              <NinjaCardDescription>
                Keep learning to unlock new abilities and mentor privileges
              </NinjaCardDescription>
            </NinjaCardHeader>
            <NinjaCardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚔️</span>
                  <div>
                    <p className="font-semibold text-foreground">Cyber Samurai</p>
                    <p className="text-sm text-muted-foreground">Current Level</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-orbitron text-lg font-bold text-primary">{currentXP} XP</p>
                  <p className="text-sm text-muted-foreground">{nextLevelXP - currentXP} to next level</p>
                </div>
              </div>
              <ProgressBar 
                value={currentXP} 
                max={nextLevelXP} 
                showLabel 
                label="Experience Points"
                variant="ninja"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>🥷 Ninja</span>
                <span>⚔️ Samurai</span>
                <span>🎖️ Sensei</span>
              </div>
            </NinjaCardContent>
          </NinjaCard>

          {/* Recent Threats */}
          <NinjaCard>
            <NinjaCardHeader>
              <NinjaCardTitle>Recent Threat Activity</NinjaCardTitle>
              <NinjaCardDescription>
                AI-powered protection working around the clock
              </NinjaCardDescription>
            </NinjaCardHeader>
            <NinjaCardContent className="space-y-3">
              {recentThreats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      threat.severity === 'High' ? 'bg-danger' : 'bg-warning'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{threat.type}</p>
                      <p className="text-sm text-muted-foreground">{threat.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-safe" />
                    <span className="text-sm text-safe">Blocked</span>
                  </div>
                </div>
              ))}
              <NinjaButton variant="outline" className="w-full mt-4">
                View All Threats
              </NinjaButton>
            </NinjaCardContent>
          </NinjaCard>
        </div>

        {/* Learning & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Modules */}
          <div className="lg:col-span-2">
            <NinjaCard>
              <NinjaCardHeader>
                <NinjaCardTitle>Continue Learning</NinjaCardTitle>
                <NinjaCardDescription>
                  Master new skills and earn XP to advance your rank
                </NinjaCardDescription>
              </NinjaCardHeader>
              <NinjaCardContent className="space-y-4">
                {learningModules.map((module) => (
                  <div key={module.id} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{module.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.estimatedTime}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            +{module.xp} XP
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            module.difficulty === 'Beginner' ? 'bg-safe/20 text-safe' :
                            module.difficulty === 'Intermediate' ? 'bg-warning/20 text-warning' :
                            'bg-danger/20 text-danger'
                          }`}>
                            {module.difficulty}
                          </span>
                        </div>
                      </div>
                      <NinjaButton variant="ninja" size="sm">
                        {module.progress > 0 ? 'Continue' : 'Start'}
                      </NinjaButton>
                    </div>
                    <ProgressBar 
                      value={module.progress} 
                      showLabel 
                      label="Progress"
                      variant="ninja"
                    />
                  </div>
                ))}
              </NinjaCardContent>
            </NinjaCard>
          </div>

          {/* Leaderboard */}
          <NinjaCard>
            <NinjaCardHeader>
              <NinjaCardTitle>Dojo Leaderboard</NinjaCardTitle>
              <NinjaCardDescription>
                Top cyber ninjas this month
              </NinjaCardDescription>
            </NinjaCardHeader>
            <NinjaCardContent className="space-y-3">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.name === 'You' ? 'bg-primary/20 border border-primary/30' : 'bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{user.avatar}</span>
                    <div>
                      <p className={`font-medium ${user.name === 'You' ? 'text-primary' : 'text-foreground'}`}>
                        {user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{user.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-orbitron font-bold text-foreground">#{user.rank}</p>
                    <p className="text-sm text-muted-foreground">{user.xp.toLocaleString()} XP</p>
                  </div>
                </div>
              ))}
            </NinjaCardContent>
          </NinjaCard>
        </div>

        {/* Achievements */}
        <NinjaCard>
          <NinjaCardHeader>
            <NinjaCardTitle>Your Achievements</NinjaCardTitle>
            <NinjaCardDescription>
              Unlock badges and recognition for your cyber safety milestones
            </NinjaCardDescription>
          </NinjaCardHeader>
          <NinjaCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border text-center transition-all ${
                    achievement.unlocked 
                      ? 'bg-primary/10 border-primary/30 hover:scale-105' 
                      : 'bg-muted/30 border-muted opacity-60'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        Unlocked!
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </NinjaCardContent>
        </NinjaCard>
      </div>

      {/* Floating Components */}
      <EmotionalAI />
      <SOSButton />
    </div>
  )
}

export default Dashboard