'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";

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
        className="relative about h-screen bg-amber-100 text-black"
      >
        <div className="content grid grid-cols-3 grid-rows-5 place-items-center p-[30px]">
          <div className="absolute bg-white h-[200px] w-[200px] rounded-full border-radius-50 "></div>
          <h3 className="z-10 p-[20px] mt-[100px] text-2xl text-white">Voice that moves. Code that sings. I craft digital experiences that look as good as they sound — and vice versa.</h3>
        </div>
        <div className="content">
          <h3>about me2</h3>
        </div>
        <div className="content">
          <h3>about me3</h3>
        </div>
        <div className="content">
          <h3>about me4</h3>
        </div>
        <div className="content">
          <h3>about me5</h3>
        </div>
        <div className="content">
          <h3>about me6</h3>
        </div>
      </section>
    </>
  );
}