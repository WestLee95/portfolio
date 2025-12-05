"use client";
import { Menu, X } from 'lucide-react';

import { useState } from "react";

export default function Navbar() {
    
      const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
        {/* Navbar */}
      <nav className="top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold tracking-tight text-amber-900">EW</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-amber-900 hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" className="text-amber-900 hover:text-amber-700 transition-colors">About</a>
            <a href="#projects" className="text-amber-900 hover:text-amber-700 transition-colors">Projects</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-900 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#fef3e2] border-t border-amber-900/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#home" className="text-amber-900 text-lg" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-amber-900 text-lg" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#projects" className="text-amber-900 text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" className="text-amber-900 text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      </>
    );
}