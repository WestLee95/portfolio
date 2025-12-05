'use client'
import React, { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef(null);

  // About horizontal scroll
    useEffect(() => {
      const handleScroll = () => {
        if (aboutRef.current) {
          const rect = aboutRef.current.getBoundingClientRect();
          const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
          const scrollContent = aboutRef.current.querySelector('.about-scroll-content');
          if (scrollContent) {
            scrollContent.style.transform = `translateX(-${scrollProgress * 50}%)`;
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  


    return (
        <>
         {/* About Section - Horizontal Scroll */}
      <section 
        id="about"
        ref={aboutRef}
        className="relative h-[200vh] bg-amber-900"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="about-scroll-content flex gap-20 px-12 md:px-20 whitespace-nowrap">
            <div className="inline-block min-w-[90vw] md:min-w-[600px] whitespace-normal">
              <h2 className="text-5xl md:text-7xl font-bold text-[#fef3e2] mb-8">About Me</h2>
              <p className="text-xl md:text-2xl text-[#fef3e2]/90 leading-relaxed max-w-2xl">
                I&apos;m Eugene Westley, a full-stack developer and voice artist who believes great digital experiences 
                should feel as natural as a conversation. I build web applications that don&apos;t just work—they sing.
              </p>
            </div>
            
            <div className="inline-block min-w-[90vw] md:min-w-[600px] whitespace-normal">
              <h3 className="text-4xl md:text-5xl font-bold text-[#fef3e2] mb-6">The Code</h3>
              <p className="text-lg md:text-xl text-[#fef3e2]/90 leading-relaxed max-w-2xl">
                Specializing in React, Next.js, and TypeScript, I craft scalable applications with clean architectures. 
                From e-commerce platforms to SaaS dashboards, I turn complex problems into elegant solutions.
              </p>
            </div>
            
            <div className="inline-block min-w-[90vw] md:min-w-[600px] whitespace-normal">
              <h3 className="text-4xl md:text-5xl font-bold text-[#fef3e2] mb-6">The Voice</h3>
              <p className="text-lg md:text-xl text-[#fef3e2]/90 leading-relaxed max-w-2xl">
                Whether it&apos;s corporate narration, character work, or commercial spots, I bring scripts to life 
                with authenticity and precision. Because good design speaks—but great voice work resonates.
              </p>
            </div>

            <div className="inline-block min-w-[90vw] md:min-w-[600px] whitespace-normal">
              <h3 className="text-4xl md:text-5xl font-bold text-[#fef3e2] mb-6">Let&apos;s Build</h3>
              <p className="text-lg md:text-xl text-[#fef3e2]/90 leading-relaxed max-w-2xl">
                I&apos;m currently available for freelance projects and collaborations. If you need a developer 
                who understands both the technical and creative sides of digital work, let&apos;s talk.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}