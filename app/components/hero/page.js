"use client";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Hero() {
  
  const heroRef = useRef(null);

  // Hero parallax effect
    useEffect(() => {
      const handleScroll = () => {
        if (heroRef.current) {
          const scrolled = window.scrollY;
          const heroImg = heroRef.current.querySelector(".hero-img");
          const heroTitle1 = heroRef.current.querySelector(".hero-title-1");
          const heroTitle2 = heroRef.current.querySelector(".hero-title-2");
  
          if (heroImg)
            heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
          if (heroTitle1)
            heroTitle1.style.transform = `translateY(${scrolled * 0.2}px)`;
          if (heroTitle2)
            heroTitle2.style.transform = `translateY(${scrolled * 0.25}px)`;
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
        <div
          className="bg-black/90 absolute inset-0 bg-cover bg-center opacity-100"
          
        />

     
{/*https://youtube.com/shorts/NBj4XzO3R_Q?si=_-39in8g6qk2jldL*/}
        <div className="relative w-full px-4 md:px-0 z-30">
          <h1
            className="hero-title-1 fade-in text-6xl sm:text-8xl md:text-[150px] lg:text-[200px] text-center leading-none"
            style={{
              textShadow:
                "3px 3px 0 #d97706, -1px -1px 0 #d97706, 1px -1px 0 #d97706, -1px 1px 0 #d97706",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            Eugene
          </h1>
          <h1
            className="hero-title-2 fade-in text-6xl sm:text-8xl md:text-[150px] lg:text-[200px] text-center  leading-none mt-2"
            style={{
              textShadow:
                "3px 3px 0 #d97706, -1px -1px 0 #d97706, 1px -1px 0 #d97706, -1px 1px 0 #d97706",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            Westley
          </h1>
        </div>

        <h2
          className="code fade-in hidden lg:block text-4xl xl:text-5xl absolute z-10 top-32 xl:top-40 right-20 xl:right-40 tracking-widest"
          style={{            
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.8s ease-out 0.4s",
          }}
        >
         
        </h2>
        <h2
          className="voice fade-in hidden lg:block text-4xl xl:text-5xl absolute z-10 top-32 xl:top-40 left-20 xl:left-40 tracking-widest"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.8s ease-out 0.4s",
          }}
        >
          
        </h2>

        

        {/* Mobile Labels */}
        <div className="lg:hidden absolute bottom-20 w-full flex justify-around px-8">
          <h2
            className="fade-in text-2xl sm:text-3xl text-amber-900 font-bold tracking-widest"
            style={{
              letterSpacing: "0.15em",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            VOICE
            <br />
            ARTIST
          </h2>
          <h2
            className="fade-in text-2xl sm:text-3xl text-amber-900 font-bold tracking-widest"
            style={{
              letterSpacing: "0.15em",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            WEB
            <br />
            DESIGNER
          </h2>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-amber-900" size={32} />
        </a>
      </section>
      </>
    );
}