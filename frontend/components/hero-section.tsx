import { Button } from "@/components/ui/button"
import { Play, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center 
                 bg-gradient-to-b from-[#8aeaff] via-[#83a3ff] via-33% 
                 via-[#fca6f3] via-66% to-[#fba647] text-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-balance">
          Gwijo Avenue
        </h1>
        <p className="text-lg md:text-xl font-serif mb-3">
          The Voice of Ama-Gwijo
        </p>
        <p className="text-base md:text-lg mb-6 text-balance max-w-2xl mx-auto">
          From Alexandra to the World – Celebrating South Africa's Rich Heritage
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-black/80 font-semibold px-8"
          >
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
