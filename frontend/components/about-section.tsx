"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Music, X } from "lucide-react"
import { useState, useEffect } from "react"

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/images/gwijo-performance-stage.jpg",
      alt: "Gwijo Avenue performing on stage",
    },
    {
      src: "/images/gwijo-traditional-performance.jpg", 
      alt: "Group performing in traditional kente cloth",
    },
    {
      src: "/images/gwijo-bw-performance.jpg",
      alt: "Black and white performance photo",
    },
    {
      src: "/images/gwijo-white-polos.jpg",
      alt: "Group in white polo shirts performing",
    }
  ]

  const openImageModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage !== null) {
        closeImageModal()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedImage])

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F4EDE4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: '#1A1A1A' }}>
            Our Story
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed" style={{ color: '#1A1A1A' }}>
            Founded in 2020 in the heart of Alexandra Township, Gwijo Avenue has grown from local performers to
            international ambassadors of South African a cappella music.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Stacked Images with Modal */}
          <div className="relative h-[500px]">
            {/* Regular Stacked Images */}
            {selectedImage === null && images.map((image, index) => (
              <div
                key={index}
                className={`absolute transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                  index === 0 ? 'top-0 left-0 w-4/5 z-30 hover:rotate-2' :
                  index === 1 ? 'top-20 right-0 w-4/5 z-20 hover:-rotate-1' :
                  index === 2 ? 'bottom-20 left-4 w-4/5 z-10 hover:rotate-1' :
                  'bottom-0 right-8 w-4/5 z-0 hover:-rotate-2'
                }`}
                onClick={() => openImageModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl border-4"
                  style={{ borderColor: '#F4EDE4' }}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}

            {/* Expanded Image Modal within the same container */}
            {selectedImage !== null && (
              <div className="absolute inset-0 z-40 bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: '#D14900',
                    color: '#FFFFFF'
                  }}
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Expanded Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: '#D14900',
                      color: '#FFFFFF'
                    }}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: '#D14900',
                      color: '#FFFFFF'
                    }}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm"
                       style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#FFFFFF' }}>
                    {selectedImage + 1} / {images.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
                Ishooo <span style={{ color: '#D14900' }}>Mntwanam</span>
              </h3>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  With 17 talented members, Gwijo Avenue creates unique harmonies that blend traditional South African
                  sounds with contemporary a cappella techniques. Our signature phrase "Ishooo Mntwanam" has become
                  synonymous with our energetic performances and cultural pride.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
                  From the streets of Alexandra to stages across Australia, Kenya, the United States, and the United
                  Kingdom, we carry the spirit of South Africa wherever we perform, sharing our heritage through the
                  universal language of music.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card 
                className="border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                style={{ 
                  backgroundColor: '#F4EDE4',
                  borderColor: '#006C67',
                  transform: hoveredCard === 0 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, #D14900 0%, #FFD166 100%)`,
                    transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Users 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 0 ? '#FFFFFF' : '#D14900'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 0 ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    17
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 0 ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    Talented Members
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                style={{ 
                  backgroundColor: '#F4EDE4',
                  borderColor: '#006C67',
                  transform: hoveredCard === 1 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, #006C67 0%, #D14900 100%)`,
                    transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Globe 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 1 ? '#FFFFFF' : '#006C67'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 1 ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    4+
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 1 ? '#FFFFFF' : '#1A1A1A'
                    }}
                  >
                    Countries
                  </p>
                </CardContent>
              </Card>

              <Card 
                className="border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer"
                style={{ 
                  backgroundColor: '#F4EDE4',
                  borderColor: '#006C67',
                  transform: hoveredCard === 2 ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, #FFD166 0%, #D14900 100%)`,
                    transform: hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <CardContent className="p-6 text-center relative z-10">
                  <Music 
                    className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" 
                    style={{
                      color: hoveredCard === 2 ? '#1A1A1A' : '#FFD166'
                    }}
                  />
                  <h4 
                    className="text-2xl font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: hoveredCard === 2 ? '#1A1A1A' : '#1A1A1A'
                    }}
                  >
                    2020
                  </h4>
                  <p 
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: hoveredCard === 2 ? '#1A1A1A' : '#1A1A1A'
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
          <div 
            className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-2xl border relative overflow-hidden group cursor-pointer backdrop-blur-sm"
            style={{ 
              backgroundColor: '#F4EDE4',
              borderColor: '#006C67'
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, #D14900 0%, #FFD166 100%)`,
              }}
            />
            <span 
              className="text-xl relative z-10 duration-300 group-hover:text-white"
              style={{ color: '#1A1A1A' }}
            >
              Ready to experience authentic South African music?
            </span>
            <button 
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10"
              style={{
                backgroundColor: '#D14900',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B34100'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D14900'
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