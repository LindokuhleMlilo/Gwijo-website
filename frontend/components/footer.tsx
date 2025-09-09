import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { name: "TikTok", url: "#", icon: "📱" },
    { name: "YouTube", url: "#", icon: "▶️" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "Facebook", url: "#", icon: "👥" },
    { name: "Spotify", url: "#", icon: "🎵" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-secondary">Gwijo Avenue</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              From Alexandra to the World – Celebrating South Africa's Rich Heritage through the universal language of a
              cappella music.
            </p>
            <p className="text-sm text-primary-foreground/60">
              "Ishooo Mntwanam" - Our signature sound, our cultural pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Work", "Music", "Awards", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary bg-transparent"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center py-3"
                  >
                    <span className="text-lg mb-1">{social.icon}</span>
                    <span className="text-xs">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3">Contact</h5>
              <p className="text-sm text-primary-foreground/80">
                bookings@gwijoavenue.co.za
                <br />
                +27 11 123 4567
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Gwijo Avenue. All rights reserved. | Proudly South African 🇿🇦
          </p>
        </div>
      </div>
    </footer>
  )
}
