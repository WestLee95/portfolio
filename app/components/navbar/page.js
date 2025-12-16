"use client";
import { Menu, X } from 'lucide-react';

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50  border-b-5 text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a className="text-2xl md:text-2xl font-bold tracking-tight text-black" href='#'>
            MWAMBACHA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col gap-0.5">
            <div className='flex gap-px items-center text-black'>
              <span className="numbers flex items-center justify-center w-4  h-4 rounded-full border font-bold">
                1
              </span>
              <a href="#about" className="nav-text  hover:text-amber-700 transition-colors">About</a>
            </div>
            <div className='flex gap-px items-center justify-center w-[90px]'>
              <span className="numbers font-bold flex items-center justify-center w-4  h-4 rounded-full border border-black">
                2
              </span>
              <a href="#projects" className="nav-text  hover:text-amber-700 transition-colors">Projects</a>
            </div>
            <div className='flex gap-px items-center'>
              <span className="numbers font-bold flex items-center justify-center w-4  h-4 rounded-full border border-black">
                3
              </span>
              <a href="#contact" className="nav-text  hover:text-amber-700 transition-colors">Contact</a>
            </div>
          </div>

          {/*SOCIALS*/}
          <div className="hidden md:flex flex-col gap-[2px]">
            <div className='flex gap-px items-center'>
              <span className="numbers flex items-center justify-center w-4  h-4 rounded-full border border-black font-bold">
                1
              </span>
              <a href="#about" className="nav-text  hover:text-amber-700 transition-colors">Instagram</a>
            </div>
            <div className='flex gap-px items-center justify-center w-[90px]'>
              <span className="numbers font-bold flex items-center justify-center w-4  h-4 rounded-full border border-black">
                2
              </span>
              <a href="#projects" className="nav-text  hover:text-amber-700 transition-colors">Linkedin</a>
            </div>
            <div className='flex gap-px items-center'>
              <span className="numbers font-bold flex items-center justify-center w-4  h-4 rounded-full border border-black">
                3
              </span>
              <a href="#contact" className="nav-text  hover:text-amber-700 transition-colors">Tiktok</a>
            </div>
          </div>

          {/*EMAIL N CONTACT */}
          <div className="hidden md:flex flex-col gap-[2px]">
            {/*<div className='flex gap-px items-center'>
              <span className="numbers flex items-center justify-center w-4  h-4 rounded-full border border-black font-bold">
                1
              </span>
              <a href="#about" className="nav-text  hover:text-amber-700 transition-colors"></a>
            </div>*/}
            <div className='flex gap-px items-center justify-center'>
              <a href="#email" className="nav-text  hover:text-amber-700 transition-colors">HI@EUGENEWESTLEY.COM</a>
            </div>
            <div className='flex gap-px items-center bg-black justify-center h-[40px] rounded-xl'>
              <a href="#form" className="nav-text text-yellow-300 hover:text-amber-700 font-bold italic transition-colors">Send project inquiry</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#fef3e2] border-t border-amber-900/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#home" className=" text-lg" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className=" text-lg" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#projects" className=" text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" className=" text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}