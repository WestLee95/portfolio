'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import Image from 'next/image';
import { Mic2, Code2, Sparkles, Zap } from 'lucide-react';

export default function About() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray('#horizontal .content');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: { 
        trigger: '#horizontal',
        pin: true,
        scrub: 6,
      }
    });
  }, []);

  return (
    <>
      {/* About Section - Horizontal Scroll */}
      <section
        id="horizontal"
        className="relative about h-screen bg-amber-100 text-black overflow-hidden"
      >
        
        {/* Panel 1 - Introduction */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16">
          <div className="absolute top-[15%] left-[5%] lg:left-[8%]">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-black tracking-tight">
              THE
            </h2>
          </div>
          
          <div className="absolute top-[35%] right-[10%] lg:right-[15%]">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-yellow-400 tracking-tight">
              JOURNEY
            </h2>
          </div>

          <Image
            src="/Magz.svg"
            alt="Logo"
            width={200}
            height={100}
            className="absolute bottom-[20%] left-[50%] -translate-x-1/2 opacity-20 w-[150px] lg:w-[250px]"
          />

          <div className="absolute bottom-[15%] left-[5%] lg:left-[10%] max-w-xs lg:max-w-md">
            <p className="text-sm lg:text-base leading-relaxed">
              Voice that moves. Code that sings. <br className="hidden lg:block"/>
              I craft digital experiences that look <br className="hidden lg:block"/>
              as good as they sound — and vice versa.
            </p>
          </div>

          <Sparkles className="absolute top-[25%] right-[5%] text-yellow-400" size={24} />
          <Sparkles className="absolute bottom-[40%] left-[20%] text-black opacity-30" size={16} />
        </div>

        {/* Panel 2 - Voice Talent Origin */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16 bg-black">
          <div className="absolute top-[10%] left-[8%]">
            <Mic2 className="text-yellow-400" size={48} />
          </div>

          <div className="absolute top-[20%] right-[12%] lg:right-[20%]">
            <h3 className="text-4xl lg:text-6xl font-bold text-yellow-400 tracking-wide">
              VOICE
            </h3>
          </div>

          <div className="absolute top-[45%] left-[8%] lg:left-[15%] max-w-sm lg:max-w-lg">
            <p className="text-yellow-100 text-xs lg:text-sm leading-relaxed mb-4">
              It started with a microphone and a dream. 
            </p>
            <p className="text-white text-base lg:text-lg font-light leading-relaxed">
              From commercials to character work, <br/>
              from audiobooks to animations — <br/>
              the booth became my second home.
            </p>
          </div>

          <div className="absolute bottom-[15%] right-[8%] lg:right-[15%] text-right">
            <p className="text-yellow-400 text-2xl lg:text-4xl font-bold">20+</p>
            <p className="text-white text-xs lg:text-sm">voiceover projects</p>
          </div>

          <div className="absolute bottom-[35%] left-[5%] w-16 h-16 lg:w-24 lg:h-24 bg-yellow-400 opacity-20 rotate-45"></div>
        </div>

        {/* Panel 3 - The Pivot */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16 bg-amber-100">
          <div className="absolute top-[18%] left-[50%] -translate-x-1/2">
            <h3 className="text-5xl lg:text-7xl font-bold text-black text-center">
              &
            </h3>
          </div>

          <div className="absolute top-[35%] left-[10%] max-w-xs lg:max-w-md">
            <p className="text-black text-sm lg:text-base leading-relaxed italic">
              &quot;Why not build the <br/>
              websites I voice for?&quot;
            </p>
          </div>

          <div className="absolute bottom-[25%] right-[10%] lg:right-[18%]">
            <p className="text-black text-xs lg:text-sm max-w-xs leading-relaxed">
              A simple question. <br/>
              An obsessive answer. <br/>
              Late nights. Stack Overflow. <br/>
              Trial, error, and breakthroughs.
            </p>
          </div>

          <Zap className="absolute top-[50%] right-[15%] text-yellow-400 rotate-12" size={32} />
          
          <div className="absolute bottom-[15%] left-[15%] text-black font-bold text-lg lg:text-xl">
            self-taught
          </div>
        </div>

        {/* Panel 4 - Code Journey */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16 bg-black">
          <div className="absolute top-[12%] right-[8%]">
            <Code2 className="text-yellow-400" size={48} />
          </div>

          <div className="absolute top-[22%] left-[10%] lg:left-[18%]">
            <h3 className="text-4xl lg:text-6xl font-bold text-yellow-400 tracking-wide">
              CODE
            </h3>
          </div>

          <div className="absolute top-[45%] right-[8%] lg:right-[15%] max-w-sm lg:max-w-lg text-right">
            <p className="text-yellow-100 text-xs lg:text-sm leading-relaxed mb-4">
              HTML. CSS. JavaScript. React.
            </p>
            <p className="text-white text-base lg:text-lg font-light leading-relaxed">
              Each line written with the same <br/>
              precision I bring to the mic — <br/>
              pixel-perfect, performance-obsessed.
            </p>
          </div>

          <div className="absolute bottom-[20%] left-[10%] lg:left-[18%]">
            <div className="text-yellow-400 text-xs lg:text-sm space-y-2">
              <p>→ Frontend Development</p>
              <p>→ UI/UX Design</p>
              <p>→ Motion & Animation</p>
            </div>
          </div>

          <div className="absolute top-[35%] left-[8%] w-20 h-20 lg:w-32 lg:h-32 border-4 border-yellow-400 opacity-30"></div>
        </div>

        {/* Panel 5 - The Fusion */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16 bg-amber-100">
          <div className="absolute top-[15%] left-[50%] -translate-x-1/2">
            <h2 className="text-5xl lg:text-8xl font-bold text-black tracking-tight text-center">
              TWO CRAFTS
            </h2>
          </div>

          <div className="absolute top-[35%] left-[50%] -translate-x-1/2">
            <h2 className="text-5xl lg:text-8xl font-bold text-yellow-400 tracking-tight text-center">
              ONE VISION
            </h2>
          </div>

          <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 text-center max-w-md lg:max-w-2xl">
            <p className="text-black text-sm lg:text-lg leading-relaxed">
              Where audio meets visual. Where performance meets code. <br/>
              <span className="font-bold">That&apos;s where I live.</span>
            </p>
          </div>

          <Image
            src="/Magz.svg"
            alt="Logo"
            width={200}
            height={100}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-10 w-[200px] lg:w-[400px]"
          />
        </div>

        {/* Panel 6 - Current State */}
        <div className="content relative flex items-center justify-center p-8 lg:p-16 bg-black">
          <div className="absolute top-[20%] left-[10%] lg:left-[15%]">
            <h3 className="text-3xl lg:text-5xl font-bold text-yellow-400">
              TODAY
            </h3>
          </div>

          <div className="absolute top-[40%] left-[10%] lg:left-[15%] max-w-sm lg:max-w-lg">
            <p className="text-white text-base lg:text-xl font-light leading-relaxed">
              Building websites that sound as good <br/>
              as they look. Voicing projects that <br/>
              push creative boundaries. <br/><br/>
              <span className="text-yellow-400">Always learning. Always creating.</span>
            </p>
          </div>

          <div className="absolute bottom-[15%] right-[10%] lg:right-[20%] text-right">
            <p className="text-yellow-400 text-xs lg:text-sm uppercase tracking-wider mb-2">
              Based in Nairobi
            </p>
            <p className="text-white text-xs lg:text-sm">
              Working globally
            </p>
          </div>

          <div className="absolute top-[25%] right-[15%] w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-[45%] left-[40%] w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
        </div>

      </section>
    </>
  );
}