"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Music } from "lucide-react"
import { useState } from "react"

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Founded in 2020 in the heart of Alexandra Township, Gwijo Avenue has grown from local performers to
            international ambassadors of South African a cappella music.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Stacked Images */}
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-4/5 z-30 transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
              <img
                src="/images/gwijo-performance-stage.jpg"
                alt="Gwijo Avenue performing on stage"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-background"
              />
            </div>
            <div className="absolute top-20 right-0 w-4/5 z-20 transform hover:scale-105 transition-transform duration-500 hover:-rotate-1">
              <img
                src="/images/gwijo-traditional-performance.jpg"
                alt="Group performing in traditional kente cloth"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-background"
              />
            </div>
            <div className="absolute bottom-20 left-4 w-4/5 z-10 transform hover:scale-105 transition-transform duration-500 hover:rotate-1">
              <img
                src="/images/gwijo-bw-performance.jpg"
                alt="Black and white performance photo"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-background"
              />
            </div>
            <div className="absolute bottom-0 right-8 w-4/5 z-0 transform hover:scale-105 transition-transform duration-500 hover:-rotate-2">
              <img
                src="/images/gwijo-white-polos.jpg"
                alt="Group in white polo shirts performing"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4 border-background"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ishooo <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Mntwanam</span>
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With 17 talented members, Gwijo Avenue creates unique harmonies that blend traditional South African
                  sounds with contemporary a cappella techniques. Our signature phrase "Ishooo Mntwanam" has become
                  synonymous with our energetic performances and cultural pride.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the streets of Alexandra to stages across Australia, Kenya, the United States, and the United
                  Kingdom, we carry the spirit of South Africa wherever we perform, sharing our heritage through the
                  universal language of music.
                </p>
              </div>
            </div>

            {/* Stats Cards with Gradient Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card 
                className="bg-card border border-border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 0 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: 'linear-gradient(180deg, #000000 0%, #6b7280 50%, #ffffff 100%)',
                    transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Users 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 0 ? '#000000' : '#ffffff'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 0 ? '#000000' : 'hsl(var(--foreground))'
                    }}
                  >
                    17
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 0 ? '#000000' : 'hsl(var(--muted-foreground))'
                    }}
                  >
                    Talented Members
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="bg-card border border-border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 1 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: 'linear-gradient(180deg, #000000 0%, #6b7280 50%, #ffffff 100%)',
                    transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Globe 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 1 ? '#000000' : '#d1d5db'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 1 ? '#000000' : 'hsl(var(--foreground))'
                    }}
                  >
                    4+
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 1 ? '#000000' : 'hsl(var(--muted-foreground))'
                    }}
                  >
                    Countries
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="bg-card border border-border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === 2 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: 'linear-gradient(180deg, #000000 0%, #6b7280 50%, #ffffff 100%)',
                    transform: hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Music 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 2 ? '#000000' : '#9ca3af'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 2 ? '#000000' : 'hsl(var(--foreground))'
                    }}
                  >
                    2020
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 2 ? '#000000' : 'hsl(var(--muted-foreground))'
                    }}
                  >
                    Founded
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-2xl border border-border relative overflow-hidden group cursor-pointer bg-card/50 backdrop-blur-sm">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background: 'linear-gradient(180deg, #000000 0%, #6b7280 50%, #ffffff 100%)',
              }}
            />
            <span className="text-xl relative z-10 duration-300 group-hover:text-black text-muted-foreground">
              Ready to experience authentic South African music?
            </span>
            <button 
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10"
              style={{
                background: 'linear-gradient(180deg, #000000 0%, #6b7280 50%, #ffffff 100%)',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              Book Performance
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}