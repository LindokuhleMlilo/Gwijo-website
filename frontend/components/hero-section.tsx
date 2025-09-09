import { Button } from "@/components/ui/button"
import { Play, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gwijo-performance-stage.jpg"
          alt="Gwijo Avenue performing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Gwijo Avenue</h1>
        <p className="text-xl md:text-2xl font-serif mb-4 text-secondary">The Voice of Ama-Gwijo</p>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto">
          From Alexandra to the World – Celebrating South Africa's Rich Heritage
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
