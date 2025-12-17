"use client";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import Image from "next/image";

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

        {/*https://youtube.com/shorts/NBj4XzO3R_Q?si=_-39in8g6qk2jldL*/}

        {/* Desktop Titles */}
        <h1
          className="hero-title-2 text-black z-30 absolute top-[52vh] fade-in text-6xl sm:text-8xl md:text-[70px] lg:text-[100px] text-center leading-none"
        >
          &
        </h1>

        <Image
          src="/Magz.svg"
          alt="Cutout-BG"
          width={200}
          height={100}
          style={{
            width: "200px",
            height: "auto",
          }}
          className="absolute z-20 hidden lg:block top-[50vh] left-[50vw] xl:top-[44vh] xl:left-[43vw]"
        />

        {/* Small Hero Labels */}
        <h6 className="z-20 text-black absolute fade-in lg:block hidden text-[1rem] xl:text-[5rem] top-[22vh] left-[35vw] xl:top-[42vh] xl:left-[55vw]">overs</h6>
        <h6 className="z-20 text-black absolute lg:block hidden text-[1rem] xl:text-[5rem] top-[18vh] left-20
         xl:top-[18vh] xl:left-40">professional</h6>
        <h6 className="z-20 text-black absolute lg:block hidden text-[1rem] xl:text-[5rem] bottom-[10vh] right-30 xl:bottom-[30vh] xl:right-50">flawless</h6>

        {/* Large Hero Labels */}
        <div className="absolute z-10 bg-black w-full h-[100px] lg:w-[650px] lg:h-[150px] top-[20vh] left-0 xl:top-[32vh] xl:left-40 text-center"
        >
          <h2 className="tracking-wide hero-title-1 text-yellow-300 fade-in hidden lg:block text-4xl xl:text-[150px]"
          >VOICE</h2>
        </div>

        <div className="absolute z-10 bg-black w-full h-[100px] lg:w-[600px] lg:h-[150px] top-[63vh] right-0 xl:top-[67vh] xl:right-50 text-center"

        >
          <h2 className="hero-title-1 tracking-wide text-yellow-300 fade-in hidden lg:block text-4xl xl:text-[150px]" >
            CODE</h2>
        </div>

        {/* Mobile Labels */}
        <div className="lg:hidden absolute z-30 w-full h-full flex flex-col justify-center items-center gap-[200px] px-8 text-white">
          <h2
            className="mobile-hero fade-in text-7xl sm:text-3xl font-bold text-yellow-300 tracking-widest"
          >
            VOICE
          </h2>

          <h2
            className="mobile-hero fade-in text-7xl sm:text-3xl font-bold text-yellow-300 tracking-widest"
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