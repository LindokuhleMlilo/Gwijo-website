"use client"

import { Card, CardContent } from "@/components/ui/card"

export function WorkSection() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Featured Campaigns</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Trusted by leading brands to deliver authentic South African musical experiences that resonate with
            audiences worldwide.
          </p>
        </div>

        {/* Featured Work */}
        <div className="mt-20">
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