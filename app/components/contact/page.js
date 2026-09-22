'use client'
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';


export default function Contact() {


    const contactCarouselRef = useRef(null);

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

    return (
        <>
            {/* Contact Section - Auto-scrolling Carousel */}
            <section id="contact" className="relative bg-amber-900 py-20 md:py-32 overflow-hidden">
                <div className="relative">
                    <div
                        ref={contactCarouselRef}
                        className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
                        style={{ willChange: 'transform' }}
                    >
                        {[...Array(4)].map((_, repeatIndex) => (
                            <React.Fragment key={repeatIndex}>
                                <a
                                  href="mailto:eugenewestley95@gmail.com?subject=Website%20Inquiry"
                                  className="text-5xl font-bold text-[#fef3e2] md:text-7xl lg:text-8xl"
                                >
                                  EMAIL
                                </a>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <a href="tel:+254717972081"
                                      className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">PHONE
                                </a>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <a href="https://wa.me/254717972081"
                                      className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">WHATSAPP
                                </a>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <a href="https://www.instagram.com/westleymwambacha/"
                                          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">INSTAGRAM
                                </a>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
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
