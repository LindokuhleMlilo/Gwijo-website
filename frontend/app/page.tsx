import { Navigation } from "@/components/navigation"
// import { BannerSection } from "@/components/banner-section"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { AchievementsSection } from "@/components/achievements-section"
import { MusicSection } from "@/components/music-section"
import { SocialSection } from "@/components/social-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16"> 
      <Navigation />
      {/* <BannerSection /> */}
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <AchievementsSection />
      <MusicSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

