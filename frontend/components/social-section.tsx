"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

const socialPlatforms = [
  {
    name: "TikTok",
    followers: "1.6M",
    icon: "📱",
    color: "text-pink-500",
    url: "#",
    description: "Viral performances and behind-the-scenes content",
  },
  {
    name: "YouTube",
    followers: "245K",
    icon: "▶️",
    color: "text-red-500",
    url: "#",
    description: "Full performances and music videos",
  },
  {
    name: "Instagram",
    followers: "180K",
    icon: "📷",
    color: "text-purple-500",
    url: "#",
    description: "Daily updates and photo galleries",
  },
  {
    name: "Facebook",
    followers: "95K",
    icon: "👥",
    color: "text-blue-500",
    url: "#",
    description: "Community updates and event announcements",
  },
]

export function SocialSection() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Follow Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay connected with Gwijo Avenue across all social media platforms for the latest updates, performances, and
            behind-the-scenes content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform) => (
            <Card
              key={platform.name}
              className={`transition-all duration-300 cursor-pointer hover:scale-105 ${
                hoveredPlatform === platform.name
                  ? "border-secondary shadow-lg"
                  : "border-border hover:border-secondary/50"
              }`}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <div className={`text-2xl font-bold mb-2 ${platform.color}`}>{platform.followers}</div>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary bg-transparent"
                  asChild
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Follow
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Latest from Social Media</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img src="/gwijo-avenue-tiktok-video-thumbnail.png" alt="Latest TikTok" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-pink-500">TikTok</span>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <p className="text-sm mt-2">Behind the scenes of our latest recording session! 🎵</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img src="/gwijo-avenue-youtube-video-thumbnail.png" alt="Latest YouTube" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-500">YouTube</span>
                  <span className="text-sm text-muted-foreground">1 week ago</span>
                </div>
                <p className="text-sm mt-2">New music video: "Harmony of Heritage" is now live!</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Latest Instagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-purple-500">Instagram</span>
                  <span className="text-sm text-muted-foreground">3 days ago</span>
                </div>
                <p className="text-sm mt-2">Rehearsing for our upcoming international tour! ✈️</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
