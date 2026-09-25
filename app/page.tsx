"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import ContactForm from "@/app/components/ContactFormModal";

// Types
type Mode = "combined" | "dev" | "voice";
type CodeFile = "P2PEngine.tsx" | "LawFirmVault.tsx" | "OnionCatalog.tsx";

// Mock Code Demos for Eugene's Stack
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

  return <div className="border border-cyan-500/30 p-6 rounded-2xl bg-slate-900/90">{children}</div>;
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
          className={\`px-3 py-1 rounded-full text-xs font-mono \${selectedCounty === county ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}\`}
        >
          {county}
        </button>
      ))}
    </div>
  );
}`
};



export default function DualThreatPortfolio() {
  // Mode state: 'combined', 'dev', 'voice'
  const [mode, setMode] = useState<Mode>("combined");
  
  // Audio Player & Canvas Visualizer State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("Unda Mind Vibes — Ep. 24 Teaser");
  const [audioProgress, setAudioProgress] = useState(0.2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sandbox Code Tab
  const [selectedCodeFile, setSelectedCodeFile] = useState<CodeFile>("P2PEngine.tsx");
  const [activeSandboxTab, setActiveSandboxTab] = useState<"code" | "audio">("audio");

  // Drawer states
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  // Contact Modal
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactService, setContactService] = useState("dev");

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
        // Animate bar height based on play state
        if (isPlaying) {
          barHeights[i] = Math.sin(Date.now() * 0.006 + i * 0.3) * 20 + Math.random() * 15 + 10;
        } else {
          barHeights[i] = Math.sin(i * 0.2) * 8 + 10;
        }

        const barHeight = barHeights[i];
        const x = i * (barWidth + 2);
        const y = (canvas.height - barHeight) / 2;

        const isPlayedBar = i / numBars <= audioProgress;
        ctx.fillStyle = isPlayedBar ? "#8b5cf6" : "#334155"; // Violet if played, slate if remaining

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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleScrub = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / canvas.width));
    setAudioProgress(newProgress);
  };

  const playAudioTrack = (title: string) => {
    setCurrentTrack(title);
    setActiveSandboxTab("audio");
    setIsPlaying(true);
  };
  

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/*} Brand & Location */}
          <div className="flex items-center gap-3">
            <a href="#" className="font-extrabold text-lg sm:text-xl text-white tracking-tight flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-violet-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/10">
                EM
              </span>
              <span className="hidden sm:inline">EUGENE MWAMBACHA</span>
            </a>

            {/* Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available Q4 • <span className="text-emerald-400 font-semibold">Kenya 🇰🇪</span></span>
            </div>
          </div>

          {/* Role Switcher Toggle (Framer Motion) */}
          <div className="bg-slate-900/90 p-1.5 rounded-full border border-slate-800 flex items-center shadow-inner text-xs font-semibold">
            <button
              onClick={() => setMode("combined")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "combined" ? "text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
            >
              {mode === "combined" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-slate-800 border border-slate-700/60 rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group text-cyan-400"></i>
                <span>Combined</span>
              </span>
            </button>

            <button
              onClick={() => setMode("dev")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "dev" ? "text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
            >
              {mode === "dev" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-slate-800 border border-slate-700/60 rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-code text-emerald-400"></i>
                <span>Frontend Dev</span>
              </span>
            </button>

            <button
              onClick={() => setMode("voice")}
              className={`relative px-3 sm:px-4 py-1.5 rounded-full transition-colors ${mode === "voice" ? "text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
            >
              {mode === "voice" && (
                <motion.div layoutId="modePill" className="absolute inset-0 bg-slate-800 border border-slate-700/60 rounded-full shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="fa-solid fa-microphone text-violet-400"></i>
                <span className="hidden sm:inline">Voice & Podcast</span>
                <span className="sm:hidden">Voice</span>
              </span>
            </button>
          </div>

          {/* Header CTA */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 text-slate-950 font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center gap-2 active:scale-95"
          >
            <i className="fa-regular fa-calendar-check text-slate-950"></i>
            <span className="hidden sm:inline">Book Discovery Call</span>
            <span className="sm:hidden">Book</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {}
        <section className="relative py-16 sm:py-24 border-b border-slate-900 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              
              {/* Subtitle Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono font-semibold text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>
                  {mode === "dev" && "Senior Frontend Architect • Next.js & Astro"}
                  {mode === "voice" && "Host of 'Unda Mind Vibes' & VO Specialist"}
                  {mode === "combined" && "Dual-Threat Professional: Frontend Architect & Voice-Over Host"}
                </span>
              </div>

              {/* Main Dynamic Headline */}
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
                    <>Building High-Performance Web Apps with <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Next.js & Supabase</span></>
                  )}
                  {mode === "voice" && (
                    <>Broadcasting <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Unda Mind Vibes</span> & Voice-Over Artistry</>
                  )}
                  {mode === "combined" && (
                    <>Building High-Performance Web Apps & <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Hosting Engaging Tech Podcasts</span></>
                  )}
                </motion.h1>
              </AnimatePresence>

              {/* Description */}
              <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Eugene Westley Mwambacha</strong>. Based in Kenya, I combine senior-level React/Next.js engineering with broadcast-quality voice talent and audio production to help brands stand out visually and audibly.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3"
                >
                  <span>Book Free Consultation</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>

                <button
                  onClick={() => playAudioTrack("Unda Mind Vibes — Ep. 24 Teaser")}
                  className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 font-semibold border border-slate-800 transition-all flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-xs ml-0.5"></i>
                  </span>
                  <span>Play 15s Podcast Sample</span>
                </button>
              </div>

              {/* Metrics Social Proof Bar */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500 border-t border-slate-900 mt-10">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-microchip text-emerald-400 text-sm"></i>
                  <span>Next.js • Supabase • Astro</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-podcast text-violet-400 text-sm"></i>
                  <span>Host of 'Unda Mind Vibes'</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-compact-disc text-cyan-400 text-sm"></i>
                  <span>Cold Heart Riddim Mastered</span>
                </div>
              </div>
            </div>

            {}
            <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl overflow-hidden">
              {/* Top Bar */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline">eugene_mwambacha_sandbox.ts — Live Interactive Preview</span>
                </div>

                {/* Sandbox Mode Toggle */}
                <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveSandboxTab("audio")}
                    className={`px-3 py-1 rounded-md transition-all ${activeSandboxTab === "audio" ? "bg-slate-800 text-violet-400 font-semibold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Audio Visualizer
                  </button>
                  <button
                    onClick={() => setActiveSandboxTab("code")}
                    className={`px-3 py-1 rounded-md transition-all ${activeSandboxTab === "code" ? "bg-slate-800 text-emerald-400 font-semibold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Code Preview
                  </button>
                </div>
              </div>

              {/* Sandbox Content Area */}
              <div className="p-6 sm:p-8 min-h-[320px] bg-slate-950/80 flex items-center justify-center">
                
                {/* AUDIO VISUALIZER PANEL */}
                {activeSandboxTab === "audio" && (
                  <div className="w-full space-y-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white flex items-center justify-center shadow-lg shadow-violet-500/25 transition-transform active:scale-95"
                        >
                          <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play ml-0.5"} text-xl`}></i>
                        </button>
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{currentTrack}</h4>
                          <p className="text-xs text-slate-400">Broadcast Condenser Mic • Apollo Twin DUO Processing</p>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20">
                        {isPlaying ? "PLAYING AUDIO" : "PAUSED"} • 24-Bit / 96kHz WAV
                      </div>
                    </div>

                    {/* Canvas */}
                    <div className="relative h-28 w-full bg-slate-900/60 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center px-4">
                      <canvas
                        ref={canvasRef}
                        onClick={handleScrub}
                        className="w-full h-full cursor-pointer"
                        title="Click to scrub audio snippet"
                      />
                    </div>
                  </div>
                )}

                {/* CODE PREVIEW PANEL */}
                {activeSandboxTab === "code" && (
                  <div className="w-full space-y-4 font-mono text-xs sm:text-sm">
                    {/* Code File Switcher */}
                    <div className="flex gap-2 border-b border-slate-800 pb-2">
                      {(["P2PEngine.tsx", "LawFirmVault.tsx", "OnionCatalog.tsx"] as CodeFile[]).map((file) => (
                        <button
                          key={file}
                          onClick={() => setSelectedCodeFile(file)}
                          className={`px-3 py-1 rounded-md text-xs transition-colors ${selectedCodeFile === file ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          {file}
                        </button>
                      ))}
                    </div>

                    {/* Code Snippet */}
                    <pre className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{CODE_SAMPLES[selectedCodeFile]}</code>
                    </pre>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {}
        {(mode === "combined" || mode === "dev") && (
          <section className="py-20 border-b border-slate-900 bg-slate-950/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-code"></i>
                    <span>Engineering Portfolio</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Key Web Development Projects</h2>
                </div>
                <p className="text-slate-400 text-sm max-w-md">
                  Production web applications built with Next.js, Supabase, Tailwind CSS, and Framer Motion for enterprise & agricultural growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Project 1: P2P Automation */}
                <div className="bg-slate-900/70 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">99 Lighthouse Score</span>
                      <i className="fa-solid fa-bolt text-emerald-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Commercial P2P Automation Engine</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Multi-tenant pricing engine featuring automated exchange rate sync, currency conversion calculations, and instant P2P order matching.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Next.js</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">TypeScript</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Supabase</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "p2p" ? null : "p2p")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "p2p" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "p2p" && (
                      <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400 space-y-2 leading-relaxed">
                        <p><strong className="text-slate-200">Architecture:</strong> Designed Supabase Row Level Security (RLS) policies to handle multi-tenant isolation safely.</p>
                        <p><strong className="text-slate-200">Result:</strong> Reduced manual pricing sync errors to zero with real-time WebSocket feeds.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project 2: Law Firm Platform */}
                <div className="bg-slate-900/70 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">Role-Based Auth</span>
                      <i className="fa-solid fa-scale-balanced text-cyan-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Multi-Role Law Firm Platform</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Legal management vault with role-restricted document sharing, partner management dashboard, and client consultation bookings.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Next.js App Router</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Tailwind CSS</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">PostgreSQL</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "law" ? null : "law")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "law" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "law" && (
                      <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400 space-y-2 leading-relaxed">
                        <p><strong className="text-slate-200">Security:</strong> Implemented end-to-end encrypted document vault with audit log tracking for legal compliance.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project 3: Genesis Onion Nurseries */}
                <div className="bg-slate-900/70 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">Astro & Next.js</span>
                      <i className="fa-solid fa-seedling text-emerald-400"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">Genesis Onion Nurseries Digital Platform</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Agri-tech catalog platform with county-based order targeting, seasonal harvesting schedules, and integrated direct WhatsApp ordering.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Astro</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Tailwind</span>
                      <span className="px-2 py-1 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800">Node.js</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4">
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === "agri" ? null : "agri")}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <span>Read Engineering Case Study</span>
                      <i className={`fa-solid fa-chevron-down transition-transform ${activeDrawer === "agri" ? "rotate-180" : ""}`}></i>
                    </button>
                    {activeDrawer === "agri" && (
                      <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400 space-y-2 leading-relaxed">
                        <p><strong className="text-slate-200">Impact:</strong> Boosted farmer inquiries across 12 Kenyan counties with zero layout shift (0 CLS) and sub-second page loads.</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {}
        {(mode === "combined" || mode === "voice") && (
          <section className="py-20 border-b border-slate-900 bg-slate-950/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-microphone"></i>
                    <span>Broadcast & Media Matrix</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Podcast Host & Sound Design Work</h2>
                </div>
                <p className="text-slate-400 text-sm max-w-md">
                  Creator and host of Unda Mind Vibes, media producer for Thrive 10X, and expert sound engineer for audio intros.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Track 1 */}
                <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-400 text-[11px] font-semibold border border-violet-500/20">Podcast Host</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>4.9</span>
                    </div>
                    <h3 className="font-bold text-white text-base">Unda Mind Vibes — Tech, Philosophy & Mindset</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Deep-dive podcast episodes covering modern web software engineering, philosophy, and creative growth.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">12k+ Downloads</span>
                    <button
                      onClick={() => playAudioTrack("Unda Mind Vibes — Episode Preview")}
                      className="px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen 15s</span>
                    </button>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-[11px] font-semibold border border-cyan-500/20">Media Producer</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>5.0</span>
                    </div>
                    <h3 className="font-bold text-white text-base">Thrive 10X Cohort & Workshop Sessions</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Media hosting, video voiceover narration, and cohort onboarding presentations for developer communities.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Enterprise Programs</span>
                    <button
                      onClick={() => playAudioTrack("Thrive 10X — Onboarding Voiceover")}
                      className="px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen 15s</span>
                    </button>
                  </div>
                </div>

                {/* Track 3 */}
                <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">DJ & Sound Design</span>
                      <span className="text-amber-400 text-xs font-bold"><i className="fa-solid fa-star mr-1"></i>5.0</span>
                    </div>
                    <h3 className="font-bold text-white text-base">Reggae/Dancehall Intros & Demarco Mastering</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Custom DJ voice drops, riddim mastering (Cold Heart Riddim), and commercial audio promo intros.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">24-Bit Studio Mix</span>
                    <button
                      onClick={() => playAudioTrack("Demarco / Cold Heart Riddim DJ Scratch intro")}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-play text-[10px]"></i>
                      <span>Listen 15s</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {}
        <section className="py-20 border-b border-slate-900 bg-slate-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-sliders"></i>
                  <span>Broadcast Recording Facility</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Studio Hardware & Recording Specs</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Delivering clean, broadcast-ready 24-bit/96kHz audio files processed with analog warmth and pristine acoustic isolation.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <i className="fa-solid fa-microphone-lines text-violet-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Microphone</h4>
                    <p className="text-xs text-slate-400">Broadcast Condenser / Shure SM7B Setup</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <i className="fa-solid fa-compact-disc text-emerald-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Audio Interface</h4>
                    <p className="text-xs text-slate-400">Universal Audio Apollo Twin DUO</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <i className="fa-solid fa-sliders text-cyan-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">DAW & Processing</h4>
                    <p className="text-xs text-slate-400">Logic Pro / Izotope Ozone Suite</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <i className="fa-solid fa-bolt text-amber-400 mb-2 text-lg"></i>
                    <h4 className="text-sm font-bold text-white">Delivery Time</h4>
                    <p className="text-xs text-slate-400">&lt; 24h Turnaround for VO Scripts</p>
                  </div>
                </div>
              </div>

              {/* Location & Social Trust Card */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-earth-africa text-emerald-400"></i>
                  <span>Global Client Coverage from Kenya</span>
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Podcast Audio Reach</span>
                      <span className="text-base font-bold text-white">Unda Mind Vibes Show</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">Active Stream</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Engineering Contracts</span>
                      <span className="text-base font-bold text-white">Remote Global & Local Kenya</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">Next.js & Supabase</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {}
        <section className="py-20 border-b border-slate-900 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-diagram-project"></i>
                <span>Execution Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">3-Step Collaboration Process</h2>
              <p className="text-slate-400 text-sm">Transparent milestones from initial audition or code review to final production deployment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center text-lg">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">Discovery & Audition</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Web app requirements review or a free 30-second custom voice sample recorded in studio to confirm tone and alignment.
                </p>
                <div className="text-[11px] font-mono text-emerald-400">Within 24 Hours</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono font-bold flex items-center justify-center text-lg">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">Sprint & Studio Recording</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Agile Next.js component sprints with live staging links, or DAW recording sessions with custom sound design.
                </p>
                <div className="text-[11px] font-mono text-violet-400">Iterative Communication</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-lg">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">Deployment & Delivery</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Vercel edge deployment with 100% test coverage, or master-quality 24-bit WAV audio files delivered for immediate broadcast.
                </p>
                <div className="text-[11px] font-mono text-cyan-400">Production Live</div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">EM</a>
            <span className="text-slate-300 font-semibold">Eugene Westley Mwambacha</span> — Kenya 🇰🇪
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/WestLee95" className="hover:text-white transition-colors" title="GitHub"><i className="fa-brands fa-github text-base"></i></a>
            <a href="https://x.com/West_6795" className="hover:text-white transition-colors" title="Twitter"><i className="fa-brands fa-x-twitter text-base"></i></a>
            <a href="https://www.linkedin.com/in/eugene-westley-28a493248/" className="hover:text-white transition-colors" title="LinkedIn"><i className="fa-brands fa-linkedin text-base"></i></a>
            <a href="https://www.instagram.com/westleymwambacha/" className="hover:text-white transition-colors" title="Instagram"><i className="fa-brands fa-instagram text-base"></i></a>
          </div>

          <p>© {new Date().getFullYear()} Eugene Westley Mwambacha. All rights reserved.</p>
        </div>
      </footer>

      {}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 sm:p-8 border border-slate-800 shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Get in Touch with Eugene</h3>
                <p className="text-xs text-slate-400 mt-1">Direct response within 24 hours for engineering or voiceover projects.</p>
              </div>

              <ContactForm setIsContactOpen={(val) => setIsContactOpen(val)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}