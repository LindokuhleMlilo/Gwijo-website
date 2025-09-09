"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const collaborations = [
  { name: "Chicken Licken", logo: "/chicken-licken-logo.png" },
  { name: "Nedbank Cup", logo: "/nedbank-cup-logo.png" },
  { name: "KFC x Kolisi Foundation", logo: "/kfc-kolisi-foundation-logo.png" },
  { name: "SuperSport Schools", logo: "/supersport-schools-logo.png" },
  { name: "Toyota", logo: "/toyota-logo.png" },
  { name: "Dove", logo: "/dove-logo.png" },
  { name: "MTN", logo: "/generic-telecom-logo.png" },
  { name: "Google SA", logo: "/google-south-africa-logo.png" },
]

export function WorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Brand Collaborations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Trusted by leading brands to deliver authentic South African musical experiences that resonate with
            audiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {collaborations.map((brand, index) => (
            <Card
              key={brand.name}
              className={`border-2 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "border-secondary shadow-lg scale-105"
                  : "border-border hover:border-secondary/50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Work */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Featured Campaigns</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src="/images/gwijo-white-polos.jpg"
                  alt="Nedbank Cup Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Nedbank Cup</h4>
                <p className="text-muted-foreground mb-4">
                  South Africa's premier club soccer knockout tournament featuring "Gwijo Avenue music" as part of the
                  event's celebration.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">TikTok Views:</span>
                    <span>87.3K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">TikTok Likes:</span>
                    <span>3.7K</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    2022: Radio Advert • 2023/24: TV, radio and online licensing + Launch Performance • 2024/25: License
                    renewal
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src="/images/gwijo-traditional-performance.jpg"
                  alt="Chicken Licken Gwijo Formation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Chicken Licken - Gwijo Formation</h4>
                <p className="text-muted-foreground mb-4">
                  A campaign combining soccer, music, and Chicken Licken's brand. Gwijo Avenue created the theme song
                  for TV, radio and online.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">First TikTok:</span>
                    <span>72.1K views</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Second TikTok:</span>
                    <span>66.4K views</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
