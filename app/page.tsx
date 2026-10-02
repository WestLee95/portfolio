"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/app/components/ContactFormModal";
import Image from "next/image";


type Mode = "combined" | "dev" | "media";
type CodeFile = "P2PEngine.tsx" | "LawFirmVault.tsx" | "OnionCatalog.tsx";

const CODE_SAMPLES: Record<CodeFile, string> = {
  "P2PEngine.tsx": `import { createClient } from '@supabase/supabase-js';
import { MultiCurrencyEngine } from '@/lib/currency';

export async function processP2PTransaction(orderId: string) {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  
  // Real-time currency conversion & P2P automated matching
  const { data: order } = await supabase.from('orders').select('*').eq('id', orderId).single();
  const rate = await MultiCurrencyEngine.getLiveRate(order.sourceCurrency, order.targetCurrency);
  
  const finalPrice = order.amount * rate;
  return { success: true, convertedAmount: finalPrice, rate };
}`,
  "LawFirmVault.tsx": `import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';

export function DocumentVaultGuard({ children, requiredRole }: { children: ReactNode; requiredRole: 'partner' | 'client' }) {
  const { user, role } = useAuth();

  if (!user || (role !== requiredRole && role !== 'admin')) {
    return <div className="p-4 bg-rose-500/10 text-rose-400 rounded-lg">Access Denied: Encrypted Vault</div>;
  }

  return <div className="border border-cyan-500/30 p-6 rounded-2xl bg-[#062c33]/90">{children}</div>;
}`,
  "OnionCatalog.tsx": `import React from 'react';

export function CountyTargetingFilter({ selectedCounty, onSelect }: { selectedCounty: string; onSelect: (c: string) => void }) {
  const kenyaCounties = ['Nairobi', 'Nakuru', 'Uasin Gishu', 'Narok', 'Kirinyaga'];

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {kenyaCounties.map((county) => (
        <button
          key={county}
          onClick={() => onSelect(county)}
          className={\`px-3 py-1 rounded-full text-xs font-mono \${selectedCounty === county ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-[#03191e] text-teal-300'}\`}
        >
          {county}
        </button>
      ))}
    </div>
  );
}`
};

export default function DualThreatPortfolio() {
  const [mode, setMode] = useState<Mode>("combined");
  
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Unda Mind Vibes — Episode Teaser");
  const [audioProgress, setAudioProgress] = useState(0.2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sandbox Tabs
  const [selectedCodeFile, setSelectedCodeFile] = useState<CodeFile>("P2PEngine.tsx");
  const [activeSandboxTab, setActiveSandboxTab] = useState<"code" | "audio">("audio");

  // Drawer states
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  // Contact Modal
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let barHeights = Array.from({ length: 48 }, () => Math.random() * 20 + 5);

    const renderVisualizer = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const numBars = 48;
      const barWidth = canvas.width / numBars - 2;

      for (let i = 0; i < numBars; i++) {
        if (isPlaying) {
          barHeights[i] = Math.sin(Date.now() * 0.006 + i * 0.3) * 20 + Math.random() * 15 + 10;
        } else {
          barHeights[i] = Math.sin(i * 0.2) * 8 + 10;
        }

        const barHeight = barHeights[i];
        const x = i * (barWidth + 2);
        const y = (canvas.height - barHeight) / 2;

        const isPlayedBar = i / numBars <= audioProgress;
        ctx.fillStyle = isPlayedBar ? "#00e5ff" : "#0d4b56"; // Peacock Cyan vs Dark Teal

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 3);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(renderVisualizer);
    };

    renderVisualizer();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, audioProgress, activeSandboxTab]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleScrub = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    setAudioProgress(Math.max(0, Math.min(1, clickX / canvas.width)));
  };

  const playAudioTrack = (title: string) => {
    setCurrentTrack(title);
    setActiveSandboxTab("audio");
    setIsPlaying(true);
  };

  return (
    <div className="bg-[#021013] text-teal-50 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#021013]/85 border-b border-[#0d4b56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <a href="#" className="font-extrabold text-lg sm:text-xl text-white tracking-tight flex items-center gap-2.5">
              <Image src="/logo_mark.svg" alt="Eugene Mwambacha Logo" width={32} height={32} className="rounded-full ring-2 ring-cyan-400/50" />
              <span className="hidden sm:inline">EUGENE MWAMBACHA</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#062c33] border border-[#0d4b56] text-xs font-medium text-teal-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span>Available Q4 • <span className="text-cyan-300 font-semibold">Kenya 🇰🇪</span></span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="bg-[#062c33] p-1.5 rounded-full border border-[#0d4b56] flex items-center text-xs font-semibold">
            <button
              onClick={() => setMode("combined")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "combined" ? "text-white" : "text-teal-300 hover:text-white"}`}
            >
              {mode === "combined" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-[#0d4b56] rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group text-cyan-400"></i>
                <span>Combined</span>
              </span>
            </button>

            <button
              onClick={() => setMode("dev")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "dev" ? "text-white" : "text-teal-300 hover:text-white"}`}
            >
              {mode === "dev" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-[#0d4b56] rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-code text-emerald-400"></i>
                <span>Frontend Dev</span>
              </span>
            </button>

            <button
              onClick={() => setMode("media")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "media" ? "text-white" : "text-teal-300 hover:text-white"}`}
            >
              {mode === "media" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-[#0d4b56] rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-bullhorn text-blue-400"></i>
                <span className="hidden sm:inline">Social & Content</span>
                <span className="sm:hidden">Media</span>
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-600 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center gap-2 active:scale-95"
          >
            <i className="fa-regular fa-calendar-check text-slate-950"></i>
            <span className="hidden sm:inline">Book Discovery Call</span>
            <span className="sm:hidden">Book</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-16 sm:py-24 border-b border-[#0d4b56] overflow-hidden">
          {/* Peacock Ambient Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062c33] border border-[#0d4b56] text-xs font-mono font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>
                  {mode === "dev" && "Senior Frontend Architect • Next.js & Astro"}
                  {mode === "media" && "Social Media Strategist & Content Producer"}
                  {mode === "combined" && "Frontend Web Developer & Social Media Content Strategist"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={mode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
                >
                  {mode === "dev" && (
                    <>Building High-Performance Web Apps with <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 bg-clip-text text-transparent">Next.js & Supabase</span></>
                  )}
                  {mode === "media" && (
                    <>Crafting High-Impact <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Social Media & Content Campaigns</span></>
                  )}
                  {mode === "combined" && (
                    <>Crafting Custom Web Solutions & <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400 bg-clip-text text-transparent">Data-Driven Content Strategies</span></>
                  )}
                </motion.h1>
              </AnimatePresence>

              <p className="text-base sm:text-xl text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Eugene Westley Mwambacha</strong>. Based in Kenya, I combine modern React/Next.js web development with end-to-end social media strategy, short-form video production, and voice-over artistry.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:brightness-110 text-slate-950 font-extrabold shadow-xl shadow-cyan-500/20 transition-all flex items-center gap-3 active:scale-95"
                >
                  <span>Book Free Consultation</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>

                <button
                  onClick={() => playAudioTrack("Unda Mind Vibes — Ep. 24 Teaser")}
                  className="px-6 py-4 rounded-xl bg-[#062c33]/80 hover:bg-[#0d4b56] text-teal-100 font-semibold border border-[#0d4b56] transition-all flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-xs ml-0.5"></i>
                  </span>
                  <span>Play Content Reel Sample</span>
                </button>
              </div>

              {/* Metrics Bar */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-teal-300/80 border-t border-[#0d4b56] mt-10">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-code text-cyan-400 text-sm"></i>
                  <span>Next.js • React • Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-hashtag text-teal-400 text-sm"></i>
                  <span>Social Media Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-photo-film text-blue-400 text-sm"></i>
                  <span>Short-Form Video & Audio</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE SANDBOX */}
            <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-[#062c33]/80 backdrop-blur-md border border-[#0d4b56] shadow-2xl overflow-hidden">
              <div className="bg-[#03191e] border-b border-[#0d4b56] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-cyan-400/80"></span>
                  <span className="ml-3 font-mono text-xs text-teal-300 hidden sm:inline">eugene_mwambacha_sandbox.ts — Live Interactive Preview</span>
                </div>

                <div className="flex items-center bg-[#021013] p-1 rounded-lg border border-[#0d4b56] text-xs font-mono">
                  <button
                    onClick={() => setActiveSandboxTab("audio")}
                    className={`px-3 py-1 rounded-md transition-all ${activeSandboxTab === "audio" ? "bg-[#0d4b56] text-cyan-300 font-semibold" : "text-teal-400 hover:text-white"}`}
                  >
                    Audio & Media Reel
                  </button>
                  <button
                    onClick={() => setActiveSandboxTab("code")}
                    className={`px-3 py-1 rounded-md transition-all ${activeSandboxTab === "code" ? "bg-[#0d4b56] text-emerald-300 font-semibold" : "text-teal-400 hover:text-white"}`}
                  >
                    Code Preview
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8 min-h-[320px] bg-[#021013]/90 flex items-center justify-center">
                {activeSandboxTab === "audio" && (
                  <div className="w-full space-y-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#062c33] p-4 rounded-xl border border-[#0d4b56]">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-500 to-blue-600 hover:brightness-110 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform active:scale-95"
                        >
                          <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play ml-0.5"} text-xl`}></i>
                        </button>
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{currentTrack}</h4>
                          <p className="text-xs text-teal-300/80">Broadcast Condenser Mic • Short-Form Voice Narration</p>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                        {isPlaying ? "PLAYING MEDIA" : "PAUSED"} • 24-Bit / 96kHz Master
                      </div>
                    </div>

                    <div className="relative h-28 w-full bg-[#03191e] rounded-xl border border-[#0d4b56] overflow-hidden flex items-center justify-center px-4">
                      <canvas
                        ref={canvasRef}
                        onClick={handleScrub}
                        className="w-full h-full cursor-pointer"
                        title="Click to scrub media snippet"
                      />
                    </div>
                  </div>
                )}

                {activeSandboxTab === "code" && (
                  <div className="w-full space-y-4 font-mono text-xs sm:text-sm">
                    <div className="flex gap-2 border-b border-[#0d4b56] pb-2">
                      {(["P2PEngine.tsx", "LawFirmVault.tsx", "OnionCatalog.tsx"] as CodeFile[]).map((file) => (
                        <button
                          key={file}
                          onClick={() => setSelectedCodeFile(file)}
                          className={`px-3 py-1 rounded-md text-xs transition-colors ${selectedCodeFile === file ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "text-teal-300/70 hover:text-white"}`}
                        >
                          {file}
                        </button>
                      ))}
                    </div>

                    <pre className="p-4 rounded-xl bg-[#03191e] border border-[#0d4b56] text-teal-100 overflow-x-auto leading-relaxed">
                      <code>{CODE_SAMPLES[selectedCodeFile]}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* WEB DEV PROJECTS */}
        {(mode === "combined" || mode === "dev") && (
          <section className="py-20 border-b border-[#0d4b56] bg-[#021013]/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-code"></i>
                    <span>Engineering Portfolio</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Key Web Development Projects</h2>
                </div>
                <p className="text-teal-200/70 text-sm max-w-md">
                  Production web applications built with Next.js, Supabase, Tailwind CSS, and Astro for corporate & commercial clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="bg-[#062c33]/70 rounded-2xl p-6 sm:p-8 border border-[#0d4b56] flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/20">99 Lighthouse Score</span>
                      <i className="fa-solid fa-bolt text-cyan-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Commercial P2P Automation Engine</h3>
                    <p className="text-teal-100/70 text-xs sm:text-sm leading-relaxed">
                      Multi-tenant pricing engine featuring automated exchange rate sync, currency conversion calculations, and instant order matching.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Next.js</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">TypeScript</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Supabase</span>
                    </div>
                  </div>

                  <div className="border-t border-[#0d4b56] pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "p2p" ? null : "p2p")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-teal-200 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "p2p" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "p2p" && (
                      <div className="mt-4 pt-3 border-t border-[#0d4b56]/60 text-xs text-teal-200/80 space-y-2 leading-relaxed">
                        <p><strong className="text-white">Architecture:</strong> Designed Supabase RLS policies for multi-tenant isolation.</p>
                        <p><strong className="text-white">Result:</strong> Reduced manual pricing sync errors to zero with real-time WebSocket feeds.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-[#062c33]/70 rounded-2xl p-6 sm:p-8 border border-[#0d4b56] flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono font-bold border border-teal-500/20">Role-Based Auth</span>
                      <i className="fa-solid fa-scale-balanced text-teal-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Multi-Role Law Firm Platform</h3>
                    <p className="text-teal-100/70 text-xs sm:text-sm leading-relaxed">
                      Legal management vault with role-restricted document sharing, partner management dashboard, and consultation bookings.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Next.js</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Tailwind v4</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">PostgreSQL</span>
                    </div>
                  </div>

                  <div className="border-t border-[#0d4b56] pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "law" ? null : "law")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-teal-200 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "law" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "law" && (
                      <div className="mt-4 pt-3 border-t border-[#0d4b56]/60 text-xs text-teal-200/80 space-y-2 leading-relaxed">
                        <p><strong className="text-white">Security:</strong> Implemented end-to-end encrypted document vault with audit log tracking.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-[#062c33]/70 rounded-2xl p-6 sm:p-8 border border-[#0d4b56] flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/20">Astro & Tailwind</span>
                      <i className="fa-solid fa-seedling text-emerald-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Genesis Onion Nurseries Digital Platform</h3>
                    <p className="text-teal-100/70 text-xs sm:text-sm leading-relaxed">
                      Agri-tech catalog platform with county-based order targeting, seasonal harvesting schedules, and direct WhatsApp ordering.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Astro.js</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Tailwind</span>
                      <span className="px-2 py-1 rounded bg-[#021013] text-teal-200 text-[11px] font-mono border border-[#0d4b56]">Node.js</span>
                    </div>
                  </div>

                  <div className="border-t border-[#0d4b56] pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "agri" ? null : "agri")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-teal-200 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "agri" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "agri" && (
                      <div className="mt-4 pt-3 border-t border-[#0d4b56]/60 text-xs text-teal-200/80 space-y-2 leading-relaxed">
                        <p><strong className="text-white">Impact:</strong> Boosted agricultural inquiries across 12 Kenyan counties with zero layout shift (0 CLS).</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* SOCIAL MEDIA & CONTENT PRODUCTION */}
        {(mode === "combined" || mode === "media") && (
          <section className="py-20 border-b border-[#0d4b56] bg-[#021013]/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-bullhorn"></i>
                    <span>Social Media & Content Matrix</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Campaign Strategy & Production Work</h2>
                </div>
                <p className="text-teal-200/70 text-sm max-w-md">
                  End-to-end social media campaign management, digital storytelling, short-form video adaptation, and voice-over media production.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Item 1 */}
                <div className="bg-[#062c33]/80 rounded-2xl p-6 border border-[#0d4b56] flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold border border-cyan-500/20">Media Producer</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>5.0</span>
                    </div>
                    <h3 className="font-bold text-white text-base">UNDA Youth Network — Podcast & Media Production</h3>
                    <p className="text-teal-100/70 text-xs leading-relaxed">
                      Conceptualized, scripted, hosted, and produced bi-weekly digital content assets and targeted promotional outreach campaigns across Kenyan networks.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#0d4b56] flex items-center justify-between">
                    <span className="text-xs text-teal-300/60 font-mono">Full-Cycle Production</span>
                    <button
                      onClick={() => playAudioTrack("UNDA Youth Network — Media Teaser")}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen Sample</span>
                    </button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-[#062c33]/80 rounded-2xl p-6 border border-[#0d4b56] flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 text-[11px] font-semibold border border-teal-500/20">VO Artist</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>4.9</span>
                    </div>
                    <h3 className="font-bold text-white text-base">Royal Toriah Gate — Commercial Voice-Over</h3>
                    <p className="text-teal-100/70 text-xs leading-relaxed">
                      Delivered voice acting and narration for corporate advertisements, digital campaigns, and documentary projects with strict brand adherence.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#0d4b56] flex items-center justify-between">
                    <span className="text-xs text-teal-300/60 font-mono">Corporate Audio</span>
                    <button
                      onClick={() => playAudioTrack("Royal Toriah Gate — Commercial Reel")}
                      className="px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen Sample</span>
                    </button>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-[#062c33]/80 rounded-2xl p-6 border border-[#0d4b56] flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 text-[11px] font-semibold border border-blue-500/20">Digital Strategist</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>5.0</span>
                    </div>
                    <h3 className="font-bold text-white text-base">The Dusty Spice — Multi-Channel Campaigns</h3>
                    <p className="text-teal-100/70 text-xs leading-relaxed">
                      Planned and executed integrated marketing across social media platforms, SEO tactics, and PPC campaigns to maximize guest engagement.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#0d4b56] flex items-center justify-between">
                    <span className="text-xs text-teal-300/60 font-mono">Social & PPC</span>
                    <button
                      onClick={() => playAudioTrack("Campaign Storytelling Demo")}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-slate-950 text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen Sample</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* STUDIO SPECS */}
        <section className="py-20 border-b border-[#0d4b56] bg-[#021013]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-sliders"></i>
                  <span>Broadcast & Media Capability</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Production Hardware & Content Specs</h2>
                <p className="text-teal-100/80 text-sm leading-relaxed">
                  Combining broadcast-quality audio isolation, 4K short-form video workflow, and data-driven social campaign tracking.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#062c33]/90 border border-[#0d4b56]">
                    <i className="fa-solid fa-microphone-lines text-cyan-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Audio & Voice-Over</h4>
                    <p className="text-xs text-teal-300/80">Broadcast Condenser / Shure SM7B Setup</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#062c33]/90 border border-[#0d4b56]">
                    <i className="fa-solid fa-film text-teal-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Short-Form Video</h4>
                    <p className="text-xs text-teal-300/80">Vertical Reels, Motion Graphics & Editing</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#062c33]/90 border border-[#0d4b56]">
                    <i className="fa-solid fa-chart-line text-blue-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Campaign Analytics</h4>
                    <p className="text-xs text-teal-300/80">ROI Measurement & Audience Targeting</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#062c33]/90 border border-[#0d4b56]">
                    <i className="fa-solid fa-bolt text-amber-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Delivery Time</h4>
                    <p className="text-xs text-teal-300/80">&lt; 24h Turnaround for VO & Short Scripts</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#062c33]/80 border border-[#0d4b56] space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-earth-africa text-cyan-400"></i>
                  <span>Global Client Coverage from Kenya</span>
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#021013]/80 border border-[#0d4b56] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-teal-300/70 block">Digital Media Reach</span>
                      <span className="text-base font-bold text-white">UNDA Youth Network Campaigns</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded">Active Media</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#021013]/80 border border-[#0d4b56] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-teal-300/70 block">Engineering Contracts</span>
                      <span className="text-base font-bold text-white">Remote Global & Local Kenya</span>
                    </div>
                    <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded">Next.js & Supabase</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 border-b border-[#0d4b56] bg-[#021013]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-diagram-project"></i>
                <span>Execution Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">3-Step Collaboration Process</h2>
              <p className="text-teal-200/70 text-sm">Transparent milestones from initial strategy session or code review to final production deployment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-6 rounded-2xl bg-[#062c33]/80 border border-[#0d4b56] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono font-bold flex items-center justify-center text-lg">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">Discovery & Strategy</h3>
                <p className="text-teal-100/70 text-xs leading-relaxed">
                  Web application architecture review or campaign strategy briefing to align key deliverables with business targets.
                </p>
                <div className="text-[11px] font-mono text-cyan-300">Within 24 Hours</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#062c33]/80 border border-[#0d4b56] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center text-lg">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">Sprint & Content Production</h3>
                <p className="text-teal-100/70 text-xs leading-relaxed">
                  Agile React component development with live previews, or script writing, voice narration, and short-form video editing.
                </p>
                <div className="text-[11px] font-mono text-teal-300">Iterative Communication</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#062c33]/80 border border-[#0d4b56] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono font-bold flex items-center justify-center text-lg">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">Deployment & Campaign Launch</h3>
                <p className="text-teal-100/70 text-xs leading-relaxed">
                  Vercel edge deployment with optimal performance, or final broadcast-ready media asset delivery across social channels.
                </p>
                <div className="text-[11px] font-mono text-blue-300">Production Live</div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#021013] border-t border-[#0d4b56] py-12 text-xs text-teal-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">EM</a>
            <span className="text-teal-100 font-semibold">Eugene Westley Mwambacha</span> — Kenya 🇰🇪
          </div>

          <div className="flex items-center gap-6 text-teal-200">
            <a href="https://github.com/WestLee95" className="hover:text-cyan-300 transition-colors" title="GitHub"><i className="fa-brands fa-github text-base"></i></a>
            <a href="https://x.com/West_6795" className="hover:text-cyan-300 transition-colors" title="Twitter"><i className="fa-brands fa-x-twitter text-base"></i></a>
            <a href="https://www.linkedin.com/in/eugene-westley-28a493248/" className="hover:text-cyan-300 transition-colors" title="LinkedIn"><i className="fa-brands fa-linkedin text-base"></i></a>
            <a href="https://www.instagram.com/westleymwambacha/" className="hover:text-cyan-300 transition-colors" title="Instagram"><i className="fa-brands fa-instagram text-base"></i></a>
          </div>

          <p>© {new Date().getFullYear()} Eugene Westley Mwambacha. All rights reserved.</p>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021013]/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl bg-[#062c33] p-6 sm:p-8 border border-[#0d4b56] shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 text-teal-300 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Get in Touch with Eugene</h3>
                <p className="text-xs text-teal-200/70 mt-1">Direct response within 24 hours for web development or content strategy projects.</p>
              </div>

              <ContactForm setIsContactOpen={(val) => setIsContactOpen(val)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}