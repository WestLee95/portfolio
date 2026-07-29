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
                                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">EMAIL</span>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">PHONE</span>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">WHATSAPP</span>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#fef3e2]">INSTAGRAM</span>
                                <span className="text-4xl md:text-6xl text-amber-600">•</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center gap-12 mt-16">
               <div className='flex gap-10'>
                <div className="flex items-center justify-center md:justify-start gap-4">
                        <Mail className="text-[#fef3e2]" size={28} />
                        <a href="mailto:eugenewestley95@gmail.com" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            eugenewestley95@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Phone className="text-[#fef3e2]" size={28} />
                        <a href="tel:+254717972081" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            +254 717 972 081
                        </a>
                    </div>
                </div> 

                        <div className='flex gap-10'>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <MessageCircle className="text-[#fef3e2]" size={28} />
                        <a href="https://wa.me/254717972081" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            WhatsApp Me
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Instagram className="text-[#fef3e2]" size={28} />
                        <a href="https://www.instagram.com/westleymwambacha/" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            @westleymwambacha
                        </a>
                    </div>
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