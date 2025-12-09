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
          className="bg-black/96 absolute inset-0 bg-cover bg-center opacity-100"

        />


        {/*https://youtube.com/shorts/NBj4XzO3R_Q?si=_-39in8g6qk2jldL*/}
        <div className="relative w-full px-4 md:px-0 z-30">
          <h1
            className="hero-title-1 text-white fade-in text-6xl sm:text-8xl md:text-[70px] lg:text-[100px] text-center leading-none"
          >
            &
          </h1>

        </div>

        <h2
          className="hero-title-2 fade-in hidden lg:block text-4xl xl:text-[150px]  absolute z-10 top-[40vh] xl:top-[55vh] right-20 xl:right-40 tracking-widest"
         
        >
          CODE
        </h2>
        <h2
          className="hero-title-2 fade-in hidden lg:block text-4xl xl:text-[150px] absolute z-10 top-32 xl:top-40 left-20 xl:left-40 tracking-widest"
          
        >
          VOICE
        </h2>



        {/* Mobile Labels */}
        <div className="lg:hidden absolute bottom-20 w-full flex justify-around px-8">
          <h2
            className="hero-title-2 fade-in text-2xl sm:text-3xl font-bold tracking-widest"
            style={{
              letterSpacing: "0.15em",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            VOICE
          </h2>
          <h2
            className="hero-title-2 fade-in text-2xl sm:text-3xl font-bold tracking-widest"
            style={{
              letterSpacing: "0.15em",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
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