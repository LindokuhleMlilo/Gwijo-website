"use client";

import { useState, useEffect } from "react";

const collaborations = [
  { name: "Chicken Licken", logo: "/chicken-licken-logo.png" },
  { name: "Nedbank Cup", logo: "/nedbank-cup-logo.png" },
  { name: "KFC x Kolisi Foundation", logo: "/kfc-kolisi-foundation-logo.png" },
  { name: "SuperSport Schools", logo: "/supersport-schools-logo.png" },
  { name: "Toyota", logo: "/toyota-logo.png" },
  { name: "Dove", logo: "/dove-logo.png" },
  { name: "MTN", logo: "/generic-telecom-logo.png" },
  { name: "Google SA", logo: "/google-south-africa-logo.png" },
];

function GradientBars() {
  const [scrollY, setScrollY] = useState(0);
  const numBars = 25;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="barTrack flex h-full w-[2000px]">
        {Array.from({ length: numBars }).map((_, i) => {
          const centerIndex = (numBars - 1) / 2;
          const distanceFromCenter = Math.abs(i - centerIndex);

          // Create triangle effect
          const offset = (1 - distanceFromCenter / centerIndex) * scrollY * 0.3; // adjust multiplier

          return (
            <div
              key={i}
              className="bar w-20 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 transition-transform duration-150"
              style={{ transform: `translateY(${offset}px)` }}
            />
          );
        })}
      </div>
    </div>
  );
}

function ScrollingBrands() {
  return (
    <div className="w-full overflow-hidden space-y-8">
      {/* Top row - moves left to right */}
      <div className="scrolling-brands-container relative py-4">
        {/* Gradient fade effects on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="scrolling-brands flex animate-scroll-left-to-right">
          {[...collaborations, ...collaborations].map((brand, index) => (
            <div
              key={`top-${brand.name}-${index}`}
              className="brand-item flex-shrink-0 mx-8 w-40 h-20 flex items-center justify-center"
            >
              <div className="transition-all duration-300 cursor-pointer p-4 rounded-lg hover:scale-110">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - moves right to left */}
      <div className="scrolling-brands-container relative py-4">
        {/* Gradient fade effects on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="scrolling-brands flex animate-scroll-right-to-left">
          {[...collaborations, ...collaborations].map((brand, index) => (
            <div
              key={`bottom-${brand.name}-${index}`}
              className="brand-item flex-shrink-0 mx-8 w-40 h-20 flex items-center justify-center"
            >
              <div className="transition-all duration-300 cursor-pointer p-4 rounded-lg hover:scale-110">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden py-16"
    >
      {/* Gradient bars */}
      <GradientBars />

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 mb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Brand Collaborations
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Trusted by leading brands to deliver authentic South African musical experiences that resonate with
            audiences worldwide.
          </p>
        </div>
      </div>

      {/* Scrolling Brands */}
      <ScrollingBrands />

      
    </section>
  );
}