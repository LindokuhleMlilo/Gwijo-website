"use client"

import { useEffect, useRef } from "react"

export function WorkSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Music notes with colors from the palette
    const musicNotes = [
      { symbol: "♩", color: "#D14900" }, // Primary - burnt orange
      { symbol: "♪", color: "#006C67" }, // Secondary - deep teal
      { symbol: "♫", color: "#FFD166" }, // Accent - golden yellow
      { symbol: "♬", color: "#1A1A1A" }, // Text - rich black
      // { symbol: "🎵", color: "#D14900" }, // Primary
      // { symbol: "🎶", color: "#006C67" }, // Secondary
      // { symbol: "🎼", color: "#FFD166" }, // Accent
      // { symbol: "🎹", color: "#1A1A1A" }, // Text
      // { symbol: "🎺", color: "#D14900" }, // Primary
      // { symbol: "🎸", color: "#006C67" }, // Secondary
      // { symbol: "🥁", color: "#FFD166" }, // Accent
      // { symbol: "🎤", color: "#1A1A1A" }  // Text
    ];

    // Create particles with more variety
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      note: { symbol: string; color: string }
      opacity: number
      rotation: number
      rotationSpeed: number
      floatSpeed: number
    }> = []

    // Create more particles for a richer animation
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 25 + 15,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        note: musicNotes[Math.floor(Math.random() * musicNotes.length)],
        opacity: Math.random() * 0.4 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        floatSpeed: Math.random() * 0.02 + 0.01
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background overlay
      ctx.fillStyle = 'rgba(244, 237, 228, 0.3)' // #F4EDE4 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Add floating motion
        particle.y += Math.sin(Date.now() * particle.floatSpeed) * 0.3
        
        // Rotate particles
        particle.rotation += particle.rotationSpeed
        
        // Reset if off screen
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.y > canvas.height + 50) particle.y = -50
        if (particle.y < -50) particle.y = canvas.height + 50

        // Draw music note with rotation
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation * Math.PI / 180)
        ctx.globalAlpha = particle.opacity
        ctx.font = `bold ${particle.size}px Arial, sans-serif`
        ctx.fillStyle = particle.note.color
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(particle.note.symbol, 0, 0)
        
        // Add glow effect for some notes
        if (particle.note.color === '#FFD166') {
          ctx.shadowColor = particle.note.color
          ctx.shadowBlur = 10
          ctx.fillText(particle.note.symbol, 0, 0)
        }
        
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section id="work" className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F4EDE4' }}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Background GIF */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply z-0"
        style={{
          backgroundImage: "url('3841255123-preview-unscreen.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance" style={{ color: '#1A1A1A' }}>
            Our Musical
            <span 
              className="block mt-2 bg-gradient-to-r from-[#D14900] via-[#006C67] to-[#FFD166] bg-clip-text text-transparent"
            >
              Journey
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#006C67' }}>
            Creating authentic South African musical experiences that resonate with audiences worldwide through rhythm, culture, and innovation.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Campaigns" },
              { number: "2M+", label: "Reach" },
              { number: "100+", label: "Songs" },
              { number: "15+", label: "Brands" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderColor: '#006C67'
                }}
              >
                <div 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: '#D14900' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm font-semibold"
                  style={{ color: '#1A1A1A' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="px-12 py-4 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{
                  backgroundColor: '#D14900',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD166'
                  e.currentTarget.style.color = '#1A1A1A'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#D14900'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
              >
                <span className="relative z-10">View Our Work</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'
                  }}
                />
              </button>

              <button 
                className="px-12 py-4 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 border-2 backdrop-blur-sm"
                style={{
                  borderColor: '#006C67',
                  color: '#006C67',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#006C67'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
                  e.currentTarget.style.color = '#006C67'
                }}
              >
                Listen Now
              </button>
            </div>

            {/* Additional Info */}
            <div 
              className="max-w-md mx-auto p-6 rounded-2xl backdrop-blur-sm border mt-8"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderColor: '#FFD166'
              }}
            >
              <p className="text-sm" style={{ color: '#1A1A1A' }}>
                <strong style={{ color: '#D14900' }}>Featured in:</strong> Nedbank Cup, Chicken Licken, KFC, Toyota South Africa, and more...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl z-20 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12"
        style={{
          backgroundColor: '#FFD166',
          color: '#1A1A1A'
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </section>
  )
}