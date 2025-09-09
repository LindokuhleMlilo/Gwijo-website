import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export function MusicSection() {
  const streamingPlatforms = [
    { name: "Spotify", icon: "🎵", url: "#" },
    { name: "Apple Music", icon: "🍎", url: "#" },
    { name: "YouTube Music", icon: "▶️", url: "#" },
    { name: "Deezer", icon: "🎶", url: "#" },
  ]

  return (
    <section id="music" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Our Music</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experience the authentic sounds of South Africa through our debut EP and signature performances.
          </p>
        </div>

        {/* Featured EP */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden border-secondary/20">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/images/gwijo-ep-cover.jpg"
                  alt="Ishhhhoooo Mntwanam, Vol. 1 EP Cover"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold mb-4">Ishhhhoooo Mntwanam, Vol. 1</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our debut EP, released in June 2025, captures the essence of our journey from Alexandra to the world
                  stage. Each track tells a story of heritage, hope, and harmony.
                </p>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-fit">
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Streaming Platforms */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-bold mb-8">Available on All Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {streamingPlatforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className="h-16 flex flex-col items-center justify-center hover:border-secondary hover:text-secondary bg-transparent"
                asChild
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl mb-1">{platform.icon}</span>
                  <span className="text-sm">{platform.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Tracks */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Popular Tracks</h3>
          <div className="space-y-4">
            {[
              { title: "Ishooo Mntwanam", duration: "3:45", plays: "2.1M" },
              { title: "Alexandra Dreams", duration: "4:12", plays: "1.8M" },
              { title: "Harmony of Heritage", duration: "3:58", plays: "1.5M" },
              { title: "Voices United", duration: "4:23", plays: "1.2M" },
            ].map((track, index) => (
              <Card key={track.title} className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{track.title}</h4>
                      <p className="text-sm text-muted-foreground">{track.plays} plays</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">{track.duration}</span>
                    <Button size="sm" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
