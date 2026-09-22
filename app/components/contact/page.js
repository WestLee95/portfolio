'use client';

import React, { useEffect, useRef } from 'react';
import { ChiaroscuroLink } from '@/app/components/ChiaroscuroLink';

export default function Contact() {
  const contactCarouselRef = useRef<HTMLDivElement | null>(null);

  // Contact carousel auto-scroll
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
