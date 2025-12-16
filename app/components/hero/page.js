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
          
            <defs>
              {/* Frosted glass filter */}
              
                
              <filter id="frosted">
                <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
              </filter>
            </defs>
            
         
        </div>

        {/* Single Liquid Glass Orb */}
        {!orb.exploding && (
          <div
            className="absolute z-20 grid place-items-center outline-0"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              transform: 'translate(-50%, -10%)',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '12px solid transparent',
              boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12)',
              backdropFilter: 'url(#frosted)',
              WebkitBackdropFilter: 'url(#frosted)',
              transition: 'left 0.03s linear, top 0.03s linear'
            }}
          >

          </div>
        )}



        {/*https://youtube.com/shorts/NBj4XzO3R_Q?si=_-39in8g6qk2jldL*/}

        {/* Desktop Titles */}
        <h1
          className="hero-title-2 text-white z-30 absolute top-[52vh] fade-in text-6xl sm:text-8xl md:text-[70px] lg:text-[100px] text-center leading-none"
        >
          &
        </h1>

        <h6 className="z-20 text-black absolute fade-in lg-block xl:top-[42vh] xl:left-[55vw]">overs</h6>
        <h6 className="z-20 text-black absolute xl:top-[18vh] xl:left-40">professional</h6>
        <h6 className="z-20 text-black absolute xl:bottom-[30vh] xl:right-50">flawless</h6>

        <div className="absolute z-10 bg-black w-[200px] h-[150px] lg:w-[650px] lg:h-[150px] top-[40vh] xl:top-[32vh] left-20 xl:left-40 text-center"
        >
          <h2 className="tracking-wide hero-title-1 text-yellow-300 fade-in hidden lg:block text-4xl xl:text-[150px]"
          >VOICE</h2>
        </div>

        <div className="absolute z-10 bg-black w-[200px] h-[150px] lg:w-[600px] lg:h-[150px] top-[60vh] xl:top-[67vh] right-20 xl:right-50 text-center"         

        >
          <h2 className="hero-title-1 tracking-wide text-yellow-300 fade-in hidden lg:block text-4xl xl:text-[150px]" >
            CODE</h2>
        </div>

        {/* Mobile Labels */}
        <div className="lg:hidden absolute w-full h-full flex flex-col justify-center items-center gap-[200px] px-8">
          <h2
            className="mobile-hero fade-in text-7xl sm:text-3xl font-bold tracking-widest"
          >
            VOICE
          </h2>

          <h2
            className="mobile-hero fade-in text-7xl sm:text-3xl font-bold tracking-widest"
          >
            CODE
          </h2>
        </div>

        <a
          href="#about"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-black" size={32} />
        </a>


      </section>
    </>
  );
}