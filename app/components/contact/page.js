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

                <div className="max-w-4xl mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Mail className="text-[#fef3e2]" size={28} />
                        <a href="mailto:eugene@example.com" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            eugene@example.com
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Phone className="text-[#fef3e2]" size={28} />
                        <a href="tel:+254712345678" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            +254 712 345 678
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <MessageCircle className="text-[#fef3e2]" size={28} />
                        <a href="https://wa.me/254712345678" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            WhatsApp Me
                        </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Instagram className="text-[#fef3e2]" size={28} />
                        <a href="https://instagram.com/eugenewestley" className="text-lg md:text-xl text-[#fef3e2] hover:text-amber-300 transition-colors">
                            @eugenewestley
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}