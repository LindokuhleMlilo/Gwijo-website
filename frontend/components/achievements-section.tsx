"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Eye, Users, Play, Star, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function AchievementsSection() {
  const [counts, setCounts] = useState({
    tiktokViews: 0,
    youtubeViews: 0,
    tiktokFollowers: 0,
    youtubeFollowers: 0,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const finalCounts = {
    tiktokViews: 50000000, // 50M+ views
    youtubeViews: 10000000, // 10M+ views
    tiktokFollowers: 1600000, // 1.6M followers
    youtubeFollowers: 245000, // 245K followers
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        tiktokViews: Math.floor(finalCounts.tiktokViews * progress),
        youtubeViews: Math.floor(finalCounts.youtubeViews * progress),
        tiktokFollowers: Math.floor(finalCounts.tiktokFollowers * progress),
        youtubeFollowers: Math.floor(finalCounts.youtubeFollowers * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const moveX = (clientX - window.innerWidth / 2) / 25
    const moveY = (clientY - window.innerHeight / 2) / 25
    setMousePosition({ x: moveX, y: moveY })
  }

  const handleCardMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15
    setHoveredCard(index)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  const awards = [
    {
      icon: Trophy,
      title: "Loeries Silver",
      description: "Excellence in Creative Communication",
      color: "#ffffff"
    },
    {
      icon: Award,
      title: "Loeries Bronze",
      description: "Outstanding Creative Achievement",
      color: "#d1d5db"
    },
    {
      icon: Star,
      title: "Craft Certificate",
      description: "Recognition of Artistic Excellence",
      color: "#9ca3af"
    }
  ]

  const stats = [
    {
      icon: Eye,
      value: counts.tiktokViews,
      label: "TikTok Views",
      color: "#ffffff"
    },
    {
      icon: Play,
      value: counts.youtubeViews,
      label: "YouTube Views",
      color: "#d1d5db"
    },
    {
      icon: Users,
      value: counts.tiktokFollowers,
      label: "TikTok Followers",
      color: "#9ca3af"
    },
    {
      icon: Users,
      value: counts.youtubeFollowers,
      label: "YouTube Subscribers",
      color: "#6b7280"
    }
  ]

  return (
    <section 
      id="awards" 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our dedication to excellence has been recognized by industry leaders and millions of fans worldwide.
          </p>
        </div>

        {/* Awards with 3D Effects */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="text-center border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleCardMouseMove(e, index)}
              style={{
                transform: hoveredCard === index 
                  ? `perspective(1000px) rotateY(${mousePosition.x / 2}deg) rotateX(${-mousePosition.y / 2}deg) translateY(-10px) scale3d(1.05, 1.05, 1.05)`
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale3d(1, 1, 1)',
                boxShadow: hoveredCard === index 
                  ? '0 25px 50px -12px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  : '0 4px 6px -1px rgba(255, 255, 255, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.03)'
              }}
            >
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(107, 114, 128, 0.1) 70%)`,
                }}
              />

              <CardContent className="p-8 relative z-10">
                <div 
                  className="h-16 w-16 mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{
                    color: award.color
                  }}
                >
                  <award.icon className="h-full w-full" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {award.title}
                </h3>
                <p className="text-muted-foreground">
                  {award.description}
                </p>

                {/* Floating Particles */}
                {hoveredCard === index && (
                  <>
                    <div 
                      className="absolute top-2 right-2 w-2 h-2 rounded-full animate-bounce"
                      style={{ backgroundColor: award.color, animationDelay: '0s' }}
                    />
                    <div 
                      className="absolute bottom-2 left-2 w-1 h-1 rounded-full animate-bounce"
                      style={{ backgroundColor: award.color, animationDelay: '0.3s' }}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics - No Cards, Big Gradient Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer transition-all duration-500"
              onMouseEnter={() => setHoveredCard(index + 10)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index + 10 ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              {/* Icon */}
              <div 
                className="h-16 w-16 mx-auto mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                style={{
                  color: hoveredCard === index + 10 ? stat.color : 'hsl(var(--muted-foreground))'
                }}
              >
                <stat.icon className="h-full w-full" />
              </div>

              {/* Big Gradient Number */}
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 transition-all duration-500"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #9ca3af 50%, #4b5563 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: hoveredCard === index + 10 ? '0 0 30px rgba(255, 255, 255, 0.3)' : 'none',
                  transform: hoveredCard === index + 10 ? 'translateY(-5px)' : 'translateY(0)'
                }}
              >
                {formatNumber(stat.value)}+
              </div>

              {/* Label */}
              <p className="text-lg font-semibold text-muted-foreground">
                {stat.label}
              </p>

              {/* Animated Underline */}
              <div 
                className="h-0.5 mt-4 mx-auto transition-all duration-500 rounded-full"
                style={{
                  width: hoveredCard === index + 10 ? '80px' : '40px',
                  background: `linear-gradient(90deg, ${stat.color}, ${stats[(index + 1) % stats.length].color})`,
                  opacity: hoveredCard === index + 10 ? 1 : 0.5
                }}
              />
            </div>
          ))}
        </div>

        {/* Floating CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <p className="text-lg text-foreground mb-4 md:mb-0 md:mr-6">
              Join millions of fans worldwide
            </p>
            <button 
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(45deg, #ffffff, #9ca3af, #4b5563)',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              Follow Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}