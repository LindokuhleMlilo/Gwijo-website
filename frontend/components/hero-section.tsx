"use client";

import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

// 🎵 Animated Music Notes Background
function MusicNotesBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional subtle parallax movement for depth
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden pointer-events-none music-bg"
    >
      {/* Animated music notes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute music-note"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            fontSize: `${Math.random() * 20 + 20}px`,
            color: "#D14900",
            opacity: 0.6,
          }}
        >
          ♪
        </div>
      ))}

      {/* 3D floating geometric elements */}
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "#D14900"
                  : i % 3 === 1
                  ? "#006C67"
                  : "#FFD166",
              opacity: 0.08,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 25 + 15}s`,
              borderRadius: i % 2 === 0 ? "50%" : "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 📸 Floating Group Photo with Mouse-Reactive 3D Effect
function FloatingImage3D() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) / width;
      const y = (e.clientY - (top + height / 2)) / height;

      const rotateY = x * 20; // horizontal tilt
      const rotateX = -y * 20; // vertical tilt
      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setRotation({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (imageRef.current) {
      imageRef.current.addEventListener("mouseenter", handleMouseEnter);
      imageRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (imageRef.current) {
        imageRef.current.removeEventListener("mouseenter", handleMouseEnter);
        imageRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const translateZ = isHovering ? 30 : 0;
  const scale = isHovering ? 1.05 : 1;

  return (
    <div className="relative w-full max-w-2xl lg:max-w-4xl flex justify-center items-center">
      <div
        ref={imageRef}
        className="relative w-full h-auto cursor-pointer transition-transform duration-200 ease-out"
        style={{
          transform: `
            perspective(1000px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            translateZ(${translateZ}px)
            scale(${scale})
          `,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/group photo.png"
          alt="Ubuntu Gwijo Dance Group"
          className="w-full h-auto rounded-2xl object-cover relative z-10"
          style={{
            filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
          }}
        />
      </div>
    </div>
  );
}

// 🌟 Hero Section
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 md:px-8 lg:px-16 xl:px-24 py-12 lg:py-0 overflow-hidden bg-[#F4EDE4]"
    >
      {/* 3D Animated Background */}
      <MusicNotesBackground />

      {/* Left Side - Group Photo */}
      <div className="relative z-10 w-full lg:w-[55%] flex justify-center mb-12 lg:mb-0 order-1 lg:order-1">
        <FloatingImage3D />
      </div>

     {/* Right Side - Text Content - Simplified Version */}
<div className="relative z-10 w-full lg:w-[45%] text-center lg:text-right order-2 lg:order-2">
  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 tracking-tight leading-tight">
    <span className="block text-[#1A1A1A] typing-text" style={{ animation: 'typing 0.5s steps(30, end) forwards, blink-caret 0.75s step-end infinite' }}>Gwijo</span>
    <span className="block mt-1 lg:mt-2 text-[#D14900] typing-text" style={{ animation: 'typing 0.5s steps(30, end) 0.6s forwards, blink-caret 0.75s step-end infinite' }}>Avenue</span>
  </h1>

  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-6 lg:mb-8 tracking-wide leading-relaxed text-[#1A1A1A]">
    <span className="typing-desc" style={{ animation: 'typing 1.5s steps(50, end) 1.2s forwards' }}>
      The Voice of Ama-Gwijo<br />
      From Alexandra to the World<br />
      Celebrating South Africa's Rich Heritage
    </span>
  </p>

  <div className="w-20 lg:w-24 h-1 mx-auto lg:ml-auto lg:mr-0 mb-6 lg:mb-8 bg-[#006C67]"></div>

  <Button
    size="lg"
    className="text-base md:text-lg lg:text-xl font-bold px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 hover:scale-105 transition-transform duration-200 shadow-lg"
    style={{
      backgroundColor: "#D14900",
      color: "#FFFFFF",
    }}
  >
    Book Us
  </Button>

  <style jsx>{`
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from, to {
        border-color: transparent;
      }
      50% {
        border-color: #D14900;
      }
    }

    .typing-text {
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      width: 0;
      border-right: 3px solid;
    }

    .typing-desc {
      overflow: hidden;
      white-space: nowrap;
      width: 0;
      display: inline-block;
    }

    /* Disable animations on mobile for better performance */
    @media (max-width: 1024px) {
      .typing-text,
      .typing-desc {
        white-space: normal;
        overflow: visible;
        width: auto;
        animation: none;
        border-right: none;
      }
    }
  `}</style>

</div>
      {/* Decorative bottom corners */}
      <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 flex items-center space-x-2 text-[#006C67]">
        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-current"></div>
        <div className="w-8 lg:w-12 h-1 bg-current"></div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 flex items-center space-x-2 text-[#006C67]">
        <div className="w-8 lg:w-12 h-1 bg-current"></div>
        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-current"></div>
      </div>
    </section>
  );
}
