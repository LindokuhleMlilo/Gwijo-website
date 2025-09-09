import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Music } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Founded in 2020 in the heart of Alexandra Township, Gwijo Avenue has grown from local performers to
            international ambassadors of South African a cappella music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">Ishooo Mntwanam</h3>
            <p className="text-lg mb-6 leading-relaxed">
              With 17 talented members, Gwijo Avenue creates unique harmonies that blend traditional South African
              sounds with contemporary a cappella techniques. Our signature phrase "Ishooo Mntwanam" has become
              synonymous with our energetic performances and cultural pride.
            </p>
            <p className="text-lg leading-relaxed">
              From the streets of Alexandra to stages across Australia, Kenya, the United States, and the United
              Kingdom, we carry the spirit of South Africa wherever we perform, sharing our heritage through the
              universal language of music.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">17 Members</h4>
                <p className="text-muted-foreground">Talented voices united in harmony</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Global Reach</h4>
                <p className="text-muted-foreground">Performances across 4+ countries</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Since 2020</h4>
                <p className="text-muted-foreground">Years of musical excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/images/gwijo-performance-stage.jpg"
            alt="Gwijo Avenue performing on stage"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gwijo-traditional-performance.jpg"
            alt="Group performing in traditional kente cloth"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gwijo-bw-performance.jpg"
            alt="Black and white performance photo"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/images/gwijo-white-polos.jpg"
            alt="Group in white polo shirts performing"
            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
