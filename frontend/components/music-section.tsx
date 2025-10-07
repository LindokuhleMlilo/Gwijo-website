"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Music2, Headphones, Radio, Disc3 } from "lucide-react"
import { useState, useEffect } from "react"

export function MusicSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const streamingPlatforms = [
    { name: "Spotify", icon: "🎵", url: "#", color: "#1DB954" },
    { name: "Apple Music", icon: "🍎", url: "#", color: "#FA243C" },
    { name: "YouTube Music", icon: "▶️", url: "#", color: "#FF0000" },
    { name: "Deezer", icon: "🎶", url: "#", color: "#FEAA2D" },
  ]

  const popularTracks = [
    { title: "Ishooo Mntwanam", duration: "3:45", plays: "2.1M" },
    { title: "Alexandra Dreams", duration: "4:12", plays: "1.8M" },
    { title: "Harmony of Heritage", duration: "3:58", plays: "1.5M" },
    { title: "Voices United", duration: "4:23", plays: "1.2M" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) / 50
      const moveY = (e.clientY - window.innerHeight / 2) / 50
      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCardMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setHoveredCard(index)
  }

  return (
    <section 
      id="music" 
      className="py-20 relative overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Our Music
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experience the authentic sounds of South Africa through our debut EP and signature performances.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Popular Tracks */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">Popular Tracks</h3>
            <div className="space-y-4">
              {popularTracks.map((track, index) => (
                <Card 
                  key={track.title}
                  className="hover:bg-card/80 backdrop-blur-sm transition-all duration-500 border border-border relative overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index + 300)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleCardMouseMove(e, index + 300)}
                  style={{
                    transform: hoveredCard === index + 300 
                      ? `perspective(1000px) rotateY(${mousePosition.x / 5}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`
                      : 'perspective(1000px) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
                    boxShadow: hoveredCard === index + 300 
                      ? '0 20px 40px -10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)'
                      : '0 4px 6px -1px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 group-hover:scale-110 shadow-lg"
                        style={{
                          background: 'linear-gradient(45deg, #000000, #6b7280, #ffffff)',
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground group-hover:text-white transition-colors duration-300">
                          {track.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{track.plays} plays</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-medium text-muted-foreground">{track.duration}</span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="rounded-full w-12 h-12 bg-muted hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-110"
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>

                  {/* Progress Bar Effect */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white to-gray-400 transition-all duration-1000"
                    style={{
                      width: hoveredCard === index + 300 ? '100%' : '0%',
                      opacity: hoveredCard === index + 300 ? 1 : 0
                    }}
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Ishooo Mntwanam EP */}
          <div>
            <Card 
              className="overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(100)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleCardMouseMove(e, 100)}
              style={{
                transform: hoveredCard === 100 
                  ? `perspective(1000px) rotateY(${mousePosition.x / 3}deg) rotateX(${-mousePosition.y / 3}deg) scale3d(1.03, 1.03, 1.03)`
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                boxShadow: hoveredCard === 100 
                  ? '0 25px 50px -12px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.1)'
                  : '0 8px 25px -5px rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold mb-4 text-foreground group-hover:text-white transition-colors duration-300">
                    Ishhhhoooo Mntwanam, Vol. 1
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our debut EP, released in June 2025, captures the essence of our journey from Alexandra to the world
                    stage. Each track tells a story of heritage, hope, and harmony.
                  </p>
                </div>

                {/* Album Cover with Enhanced 3D */}
                <div className="relative mb-8 group">
                  <div 
                    className="relative transition-all duration-700 mx-auto max-w-sm"
                    style={{
                      transform: hoveredCard === 100 
                        ? `rotateY(${mousePosition.x / 2}deg) rotateX(${-mousePosition.y / 2}deg) scale3d(1.05, 1.05, 1.05)`
                        : 'rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img
                      src="/images/gwijo-ep-cover.jpg"
                      alt="Ishhhhoooo Mntwanam, Vol. 1 EP Cover"
                      className="w-full rounded-2xl shadow-2xl border-4 border-background"
                    />
                    {/* 3D Shadow Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-background/95 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-6"
                  style={{
                    background: 'linear-gradient(45deg, #000000, #6b7280, #ffffff)',
                    color: '#000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(1)'
                  }}
                >
                  <Play className="mr-3 h-6 w-6" />
                  Listen to EP
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Available on All Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {streamingPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index + 200)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index + 200 ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white to-gray-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  style={{ transform: 'scale(1.1)' }}
                />
                <Button
                  variant="outline"
                  className="h-24 w-full flex flex-col items-center justify-center relative bg-card/50 backdrop-blur-sm border border-border hover:border-transparent transition-all duration-300"
                  asChild
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-125">
                      {platform.icon}
                    </span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-black transition-colors duration-300">
                      {platform.name}
                    </span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}