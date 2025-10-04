"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const featuredCampaigns = [
  {
    title: "Nedbank Cup",
    description: "South Africa's premier club soccer knockout tournament featuring 'Gwijo Avenue music' as part of the event's celebration.",
    logo: "/nedbank-cup-logo.png",
    stats: [
      { label: "TikTok Views", value: "87.3K" },
      { label: "TikTok Likes", value: "3.7K" }
    ],
    timeline: "2022: Radio Advert • 2023/24: TV, radio and online licensing + Launch Performance • 2024/25: License renewal"
  },
  {
    title: "Chicken Licken - Gwijo Formation",
    description: "A campaign combining soccer, music, and Chicken Licken's brand. Gwijo Avenue created the theme song for TV, radio and online.",
    logo: "/chicken-licken-logo.png",
    stats: [
      { label: "First TikTok", value: "72.1K views" },
      { label: "Second TikTok", value: "66.4K views" }
    ],
    timeline: ""
  },
  {
    title: "KFC x Kolisi Foundation",
    description: "Collaboration creating musical experiences that support community development and social impact initiatives.",
    logo: "/kfc-kolisi-foundation-logo.png",
    stats: [
      { label: "Social Reach", value: "150K+" },
      { label: "Engagement", value: "12.5K" }
    ],
    timeline: "2023: National Campaign • Community Outreach Programs"
  },
  {
    title: "Toyota South Africa",
    description: "Brand partnership featuring Gwijo Avenue's authentic sounds in national automotive marketing campaigns.",
    logo: "/toyota-logo.png",
    stats: [
      { label: "Campaign Views", value: "250K+" },
      { label: "Brand Lift", value: "+18%" }
    ],
    timeline: "2024: National TV Campaign • Digital Integration"
  }
]

export function WorkSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePosition({ x, y })
    setHoveredCard(index)
  }

  return (
    <section id="work" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#83a3ff] via-[#fca6f3] to-[#fba647] bg-clip-text text-transparent">
            Featured Campaigns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Trusted by leading brands to deliver authentic South African musical experiences that resonate with
            audiences worldwide.
          </p>
        </div>

        {/* Featured Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredCampaigns.map((campaign, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-white border-2 border-gray-100 transition-all duration-500 relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null)
                setMousePosition({ x: 0, y: 0 })
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={{
                transform: hoveredCard === index 
                  ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease'
              }}
            >
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, #8aeaff 0%, #83a3ff 33.33%, #fca6f3 66.67%, #fba647 100%)',
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                }}
              />

              <div className="relative z-10">
                {/* Logo Section */}
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, #8aeaff20, #83a3ff20, #fca6f320, #fba64720)'
                    }}
                  />
                  <img
                    src={campaign.logo || "/placeholder.svg"}
                    alt={`${campaign.title} logo`}
                    className="max-w-full max-h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="p-6 bg-white/90 backdrop-blur-sm">
                  <h4 
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{
                      color: hoveredCard === index ? '#1e40af' : '#1f2937'
                    }}
                  >
                    {campaign.title}
                  </h4>
                  <p 
                    className="mb-4 transition-colors duration-300"
                    style={{
                      color: hoveredCard === index ? '#4b5563' : '#6b7280'
                    }}
                  >
                    {campaign.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    {campaign.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex justify-between">
                        <span 
                          className="font-semibold transition-colors duration-300"
                          style={{
                            color: hoveredCard === index ? '#374151' : '#6b7280'
                          }}
                        >
                          {stat.label}:
                        </span>
                        <span 
                          className="font-bold transition-colors duration-300"
                          style={{
                            color: hoveredCard === index ? '#83a3ff' : '#1f2937'
                          }}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {campaign.timeline && (
                    <div 
                      className="text-xs mt-3 p-2 rounded bg-gray-50 transition-colors duration-300"
                      style={{
                        backgroundColor: hoveredCard === index ? '#f8fafc' : '#f9fafb',
                        color: hoveredCard === index ? '#4b5563' : '#6b7280'
                      }}
                    >
                      {campaign.timeline}
                    </div>
                  )}

                  {/* Hover Indicator */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                    style={{
                      width: hoveredCard === index ? '100%' : '0%',
                      background: 'linear-gradient(90deg, #8aeaff, #83a3ff, #fca6f3, #fba647)'
                    }}
                  />
                </CardContent>
              </div>

              {/* Floating Elements on Hover */}
              {hoveredCard === index && (
                <>
                  <div 
                    className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-70 animate-pulse"
                    style={{
                      background: 'linear-gradient(45deg, #8aeaff, #83a3ff)',
                      animationDelay: '0s'
                    }}
                  />
                  <div 
                    className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-60 animate-pulse"
                    style={{
                      background: 'linear-gradient(45deg, #fca6f3, #fba647)',
                      animationDelay: '0.5s'
                    }}
                  />
                </>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-2xl border-2 border-gray-100 relative overflow-hidden group cursor-pointer">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background: 'linear-gradient(180deg, #8aeaff 0%, #83a3ff 33.33%, #fca6f3 66.67%, #fba647 100%)',
              }}
            />
            <span className="text-xl relative z-10 transition-colors duration-300 group-hover:text-white text-gray-700">
              Want to create something amazing together?
            </span>
            <button 
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10"
              style={{
                background: 'linear-gradient(180deg, #8aeaff 0%, #83a3ff 33.33%, #fca6f3 66.67%, #fba647 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1) contrast(1)'
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}