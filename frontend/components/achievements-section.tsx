"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Eye, Users, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function AchievementsSection() {
  const [counts, setCounts] = useState({
    tiktokViews: 0,
    youtubeViews: 0,
    tiktokFollowers: 0,
    youtubeFollowers: 0,
  })

  const finalCounts = {
    tiktokViews: 50000000, // 50M+ views
    youtubeViews: 10000000, // 10M+ views
    tiktokFollowers: 1600000, // 1.6M followers
    youtubeFollowers: 245000, // 245K followers
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        tiktokViews: Math.floor(finalCounts.tiktokViews * progress),
        youtubeViews: Math.floor(finalCounts.youtubeViews * progress),
        tiktokFollowers: Math.floor(finalCounts.tiktokFollowers * progress),
        youtubeFollowers: Math.floor(finalCounts.youtubeFollowers * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Awards & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our dedication to excellence has been recognized by industry leaders and millions of fans worldwide.
          </p>
        </div>

        {/* Awards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardContent className="p-8">
              <Trophy className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Loeries Silver</h3>
              <p className="text-muted-foreground">Excellence in Creative Communication</p>
            </CardContent>
          </Card>

          <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardContent className="p-8">
              <Trophy className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Loeries Bronze</h3>
              <p className="text-muted-foreground">Outstanding Creative Achievement</p>
            </CardContent>
          </Card>

          <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardContent className="p-8">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Craft Certificate</h3>
              <p className="text-muted-foreground">Recognition of Artistic Excellence</p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{formatNumber(counts.tiktokViews)}+</div>
              <p className="text-muted-foreground">TikTok Views</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Play className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{formatNumber(counts.youtubeViews)}+</div>
              <p className="text-muted-foreground">YouTube Views</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{formatNumber(counts.tiktokFollowers)}</div>
              <p className="text-muted-foreground">TikTok Followers</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{formatNumber(counts.youtubeFollowers)}</div>
              <p className="text-muted-foreground">YouTube Subscribers</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
