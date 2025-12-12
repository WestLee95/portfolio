"use client";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {

  const heroRef = useRef(null);
  const [orb, setOrb] = useState({ 
    x: 50, 
    y: 50, 
    vx: 1.5, 
    vy: 1.2, 
    collisions: 0, 
    exploding: false 
  });

  // Hero parallax effect
  useEffect(() => {

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const heroImg = heroRef.current.querySelector(".hero-img");
        const heroTitle1 = heroRef.current.querySelector(".hero-title-1");
        const heroTitle2 = heroRef.current.querySelector(".hero-title-2");
        const mobileHero = heroRef.current.querySelector(".mobile-hero");

        if (heroImg)
          heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (heroTitle1) {
          const fade = 1 - scrolled * 0.002;
          mobileHero.style.opacity = Math.max(fade, 0);
        }
         if (heroTitle2) {
          const fade = 1 - scrolled * 0.002;
          mobileHero.style.opacity = Math.max(fade, 0);
        }
        if (mobileHero) {
          const fade = 1 - scrolled * 0.002;
          mobileHero.style.opacity = Math.max(fade, 0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  
  }, []);


  return (
    <>
      
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen w-full flex justify-center items-center overflow-hidden"
      >
        {/* SVG Pattern Background with Frosted Filter */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Frosted glass filter */}
              <filter id="frosted">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
              </filter>
              
              {/* Grid pattern */}
              <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.75)" />
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#000000" />
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Single Liquid Glass Orb */}
        {!orb.exploding && (
          <div 
            className="absolute z-20 grid place-items-center cursor-pointer outline-0"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              transform: 'translate(-50%, -50%)',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '2px solid transparent',
              boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12)',
              backdropFilter: 'url(#frosted)',
              WebkitBackdropFilter: 'url(#frosted)',
              transition: 'left 0.03s linear, top 0.03s linear'
            }}
          >
          
          </div>
        )}

      

        {/*https://youtube.com/shorts/NBj4XzO3R_Q?si=_-39in8g6qk2jldL*/}
        <div className="relative w-full px-4 md:px-0 z-30">
          <h1
            className="hero-title-1 text-white fade-in text-6xl sm:text-8xl md:text-[70px] lg:text-[100px] text-center leading-none"
          >
            &
          </h1>

        </div>

        <h2
          className="hero-title-2 fade-in hidden lg:block text-4xl xl:text-[150px]  absolute z-10 top-[45vh] xl:top-[55vh] right-20 xl:right-40 tracking-widest"

        >
          CODE
        </h2>
        <h2
          className="hero-title-2 fade-in hidden lg:block text-4xl xl:text-[150px] absolute z-10 top-[60vh] xl:top-40 left-20 xl:left-40 tracking-widest"

        >
          VOICE
        </h2>



        {/* Mobile Labels */}
        <div className="lg:hidden absolute bottom-55 w-full flex flex-col justify-center items-center gap-[100px] px-8">
          <h2
            className="mobile-hero fade-in text-5xl sm:text-3xl font-bold tracking-widest"
          >
            VOICE
          </h2>

          <h2
            className="mobile-hero fade-in text-5xl sm:text-3xl font-bold tracking-widest"
          >
            CODE
          </h2>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-white" size={32} />
        </a>

       
      </section>
    </>
  );
}