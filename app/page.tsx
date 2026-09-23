"use client";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Card  from '@/app/components/Card';
import { ChiaroscuroLink } from '@/app/components/ChiaroscuroLink';
import React from 'react';

export default function Home() {

  const heroRef = useRef<HTMLDivElement>(null);

  // Hero parallax effect
  useEffect(() => {

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-img') as HTMLElement;
        const mobileHero = document.querySelector<HTMLElement>('.mobile-hero');
        const heroTitle1 = document.querySelector<HTMLElement>('.hero-title-1');
        const heroTitle2 = document.querySelector<HTMLElement>('.hero-title-2');

        if (heroImg)
          heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;

        if (heroTitle1 && mobileHero) {
        const fade = 1 - scrolled * 0.002;
        mobileHero.style.opacity = `${Math.max(fade, 0)}`;
      }
        if (heroTitle2 && mobileHero) {
          const fade = 1 - scrolled * 0.002;
          mobileHero.style.opacity = `${Math.max(fade, 0)}`;
        }
        if (mobileHero) {
          const fade = 1 - scrolled * 0.002;
          mobileHero.style.opacity = `${Math.max(fade, 0)}`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Contact carousel auto-scroll
  const contactCarouselRef = useRef<any>(null);
  
    
    useEffect(() => {
      const carousel = contactCarouselRef.current;
      if (!carousel) return;
  
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += 0.5;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
  
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scroll);
      };
  
      const animation = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animation);
    }, []);
  
    const contactItems = [
      { text: 'EMAIL', href: 'mailto:eugenewestley95@gmail.com?subject=Website%20Inquiry' },
      { text: 'PHONE', href: 'tel:+254717972081' },
      { text: 'WHATSAPP', href: 'https://wa.me/254717972081' },
      { text: 'INSTAGRAM', href: 'https://www.instagram.com/westleymwambacha/' },
    ];

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

      {/* Project Card Section */}
      <section className='flex flex-col items-center justify-center mb-10'>
        <div className="w-full h-[500px] container mx-auto px-4 py-12 flex justify-center items-center gap-2 ">
       
         <div className='w-1/2 h-3/4 flex justify-start items-start gap-4'>
  <h2 className='text-3xl'>VOICE <br /> PROJECTS</h2>
  
  {/* 1. The Grid Container: Defines a single-cell grid layout */}
  <div className="grid grid-cols-1 grid-rows-1 isolate">
    
    {/* Card 1: Bottom Card */}
    <div className="col-start-1 row-start-1">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>

    {/* Card 2: Middle Card (Slightly right) */}
    <div className="col-start-1 row-start-1 translate-x-24 translate-y-2 z-10">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>

    {/* Card 3: Top Card (Shifted further right) */}
    <div className="col-start-1 row-start-1 translate-x-48 translate-y-4 z-20">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>

  </div>
</div>

          <div className='w-1/2 h-3/4 flex justify-start items-starts gap-4'>
          <h2 className='text-3xl'>CODE <br /> PROJECTS</h2>
              {/* 1. The Grid Container: Defines a single-cell grid layout */}
  <div className="grid grid-cols-1 grid-rows-1 isolate">
    
    {/* Card 1: Bottom Card */}
    <div className="col-start-1 row-start-1">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>

    {/* Card 2: Middle Card (Slightly right) */}
    <div className="col-start-1 row-start-1 translate-x-24 translate-y-2 z-10">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>

    {/* Card 3: Top Card (Shifted further right) */}
    <div className="col-start-1 row-start-1 translate-x-48 translate-y-4 z-20">
      <Card
        date='1/1/2026'
        title="About Me"
        description="I am a passionate software developer..."
        clientName='UMV'
        bgImageUrl="/path/to/image.jpg"
      />
    </div>
          </div>

</div>

</div>
          <button className="px-6 py-3 bg-black text-[#ffdf20] text-xl rounded-md hover:bg-[#6fa406] transition duration-300">View Projects</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-[#FFF] py-20 md:py-32 overflow-hidden">
              <div className="relative">
                <div
                  ref={contactCarouselRef}
                  className="flex gap-12 md:gap-20 items-center whitespace-nowrap text-black"
                  style={{ willChange: 'transform' }}
                >
                  {[...Array(4)].map((_, repeatIndex) => (
                    <React.Fragment key={repeatIndex}>
                      {contactItems.map((item, itemIndex) => (
                        <React.Fragment key={`${repeatIndex}-${itemIndex}`}>
                          <ChiaroscuroLink
                            text={item.text}
                            href={item.href}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold"
                          />
                          <span className="text-4xl md:text-6xl text-[#3498DB]">•</span>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
      
      <footer className="bg-black py-12">
              <div className="text-center mt-8 text-amber-700 text-sm">
                © {new Date().getFullYear()} Eugene Westley. All rights reserved.
              </div>
            </footer>
    </>
  );
}