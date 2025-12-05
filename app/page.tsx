'use client'
import { useEffect } from "react";
import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Projects from "./components/projects/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

export default function Home() {
 

  // Fade-in animation on load
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    const element = el as HTMLElement;   // <-- Fix
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 100);
  });
}, []);


  return (
    <div className="relative overflow-x-hidden">

  <div className="bg-[#fef3e2] relative z-0">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</div>

  );
}
