'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionConfig } from 'framer-motion';
import { 
  Code2, 
  Mic, 
  Megaphone, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Phone, 
  Mail,
  MapPin, 
  X, 
  ArrowUpRight, 
  ChevronRight, 
  Send, 
  Radio, 
  FileText,
  Zap,
  Terminal,
  Activity,
  Maximize2
} from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  glow: string;
  badge: string;
  headlineLead: string;
  headlineGradient: string;
  headlineEnd: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  tags: string[];
}

interface Project {
  id: string;
  title: string;
  category: string;
  pillar: string;
  accentColor: string;
  image: string;
  summary: string;
  tech: string[];
  details: string;
}

interface AudioReel {
  id: string;
  title: string;
  category: string;
  durationSeconds: number;
  durationLabel: string;
  accent: string;
  script: string;
  src?: string;
  waveform: number[];
}

const PORTFOLIO_DATA = {
  name: "Eugene Westley Mwambacha",
  shortName: "EUGENE MWAMBACHA",
  location: "Kitengela, Kenya",
  availability: "AVAILABLE FOR Q4 PROJECTS",
  
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    email: "eugenemwambacha@gmail.com",
    whatsapp: "https://wa.me/254700000000",
    phone: "+254 700 000 000"
  },

  pillars: [
    {
      id: "dev",
      title: "Web Developer",
      icon: Code2,
      color: "#00F5A0",
      glow: "rgba(0, 245, 160, 0.25)",
      badge: "FRONTEND & WEB SYSTEMS",
      headlineLead: "Crafting",
      headlineGradient: "High-Performance Web Apps",
      headlineEnd: "& Tactile Interfaces.",
      subtext: "Specializing in Next.js, Astro, React, TypeScript, Tailwind CSS, and Framer Motion. Engineering responsive web architectures with precise micro-interactions.",
      ctaPrimary: "View Web Case Studies",
      ctaSecondary: "Explore Tech Stack",
      ctaPrimaryHref: "#work",
      ctaSecondaryHref: "#about",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "UI/UX Systems"]
    },
    {
      id: "vo",
      title: "Voice Over Artist",
      icon: Mic,
      color: "#FF2A85",
      glow: "rgba(255, 42, 133, 0.25)",
      badge: "STUDIO AUDIO & NARRATION",
      headlineLead: "Delivering",
      headlineGradient: "Compelling Voice Overs",
      headlineEnd: "& Studio Audio.",
      subtext: "Bringing stories, podcast scripts, brand campaigns, and commercial promos to life with distinct vocal texture, crisp acoustic mixing, and emotive direction.",
      ctaPrimary: "Listen to Voice Reels",
      ctaSecondary: "Browse Demo Scripts",
      ctaPrimaryHref: "#audio",
      ctaSecondaryHref: "#audio",
      tags: ["Podcast Hosting", "Commercial VO", "Audio Editing", "Scriptwriting", "Vocal Direction", "Studio Production"]
    },
    {
      id: "smm",
      title: "Social Media Manager",
      icon: Megaphone,
      color: "#FF9F1C",
      glow: "rgba(255, 159, 28, 0.25)",
      badge: "DIGITAL GROWTH & CONTENT",
      headlineLead: "Scaling",
      headlineGradient: "Digital Brands with Dynamic Content",
      headlineEnd: "& Campaigns.",
      subtext: "Building engaged online communities through short-form video, high-impact carousels, content calendars, and conversion-driven growth strategy.",
      ctaPrimary: "View Growth Campaigns",
      ctaSecondary: "Explore Content Assets",
      ctaPrimaryHref: "#work",
      ctaSecondaryHref: "#work",
      tags: ["Short-form Video", "Content Calendars", "Audience Growth", "Campaign Analytics", "Brand Storytelling"]
    }
  ] as Pillar[],

  projects: [
    {
      id: "project-1",
      title: "Legal Firm Web Application",
      category: "Frontend Development",
      pillar: "dev",
      accentColor: "#00F5A0",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
      summary: "Custom full-stack web application designed for a legal practice featuring client consultation scheduling, document workflows, and ultra-responsive UI.",
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Framer Motion"],
      details: "Engineered with strict speed and accessibility parameters. Implemented SSR for optimal search discovery and incorporated fluid micro-interactions for client appointment scheduling."
    },
    {
      id: "project-2",
      title: "Unda Mind Vibes Youth Initiative",
      category: "Media & Digital Campaign",
      pillar: "smm",
      accentColor: "#FF2A85",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      summary: "Comprehensive multi-channel social media campaign, carousel design, and progress video production promoting youth wellness and interactive mental growth.",
      tech: ["TikTok Strategy", "CapCut / Premiere", "Canva Pro", "Content Analytics", "Copywriting"],
      details: "Boosted audience engagement by over 140% through targeted short-form reels, interactive weekly polls, and community-first storytelling formats."
    },
    {
      id: "project-3",
      title: "Genesis Onion Nurseries Growth Campaign",
      category: "Digital Marketing & Web",
      pillar: "smm",
      accentColor: "#FF9F1C",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop",
      summary: "High-converting digital advertising copy, keyword-targeted strategy, and responsive web landing page for commercial agricultural nursery growth.",
      tech: ["Landing Page UI", "Ad Copywriting", "SEO Optimization", "Lead Funnels"],
      details: "Designed high-contrast promotional vectors and conversion-oriented copy to channel online inquiries directly into instant WhatsApp business leads."
    },
    {
      id: "project-4",
      title: "Thrive 10X Campus Program",
      category: "Audio & Outreach",
      pillar: "vo",
      accentColor: "#00D2FF",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
      summary: "Promotional podcast audio scripts, vocal narration, flashcard design, and cohort engagement strategies tailored for university student growth.",
      tech: ["Podcast Scriptwriting", "Voice Over Narration", "Community Outreach", "Audio Master"],
      details: "Scripted and recorded crisp intro reels and audio clips designed to drive admissions and event turnout across multiple target campus channels."
    }
  ] as Project[],

  audioReels: [
    {
      id: "audio-1",
      title: "Brand Commercial & Tech Promo",
      category: "Commercial Narration",
      durationSeconds: 8,
      durationLabel: "0:08",
      accent: "#FF2A85",
      script: "In a world driven by split-second decisions, your interface is your identity. Bold, fluid, and undeniable.",
      waveform: [35, 60, 20, 85, 95, 40, 75, 50, 90, 65, 30, 80, 100, 45, 70, 85, 30, 60, 90, 40, 75, 50, 85, 30]
    },
    {
      id: "audio-2",
      title: "Podcast Intro & Youth Initiative",
      category: "Podcast & Storytelling",
      durationSeconds: 12,
      durationLabel: "0:12",
      accent: "#00F5A0",
      script: "Welcome to Unda Mind Vibes. Today we're unravelling the mechanics of focus and creative momentum.",
      waveform: [20, 40, 65, 80, 45, 90, 70, 85, 60, 95, 30, 75, 50, 80, 60, 90, 40, 70, 85, 50, 65, 90, 30, 50]
    },
    {
      id: "audio-3",
      title: "Corporate E-Learning & Training",
      category: "Educational Narration",
      durationSeconds: 10,
      durationLabel: "0:10",
      accent: "#FF9F1C",
      script: "Module 3: Strategic Lead Management. Aligning automated digital responses with value delivery.",
      waveform: [40, 55, 70, 40, 80, 60, 75, 90, 50, 65, 85, 40, 70, 90, 35, 60, 80, 50, 75, 65, 85, 45, 60, 40]
    }
  ] as AudioReel[],

  experienceStats: [
    { label: "Core Pillars Integrated", value: "3", suffix: "" },
    { label: "Frontend & Web Builds", value: "15", suffix: "+" },
    { label: "VO & Audio Clips Produced", value: "40", suffix: "+" },
    { label: "Campaign Impressions Generated", value: "250", suffix: "K+" }
  ]
};

const TopographicBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
    <svg className="w-full h-full text-slate-700/40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="topo-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 0,100 Q 50,20 100,100 T 200,100" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 0,40 Q 50,120 100,40 T 200,40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <path d="M 0,160 Q 60,80 120,160 T 240,160" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <radialGradient id="bg-glow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#121624" />
          <stop offset="50%" stopColor="#0B0A10" />
          <stop offset="100%" stopColor="#050608" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-glow)" />
      <rect width="100%" height="100%" fill="url(#topo-pattern)" />
    </svg>
  </div>
);

interface SpringCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  ariaLabel?: string;
}

const SpringCard: React.FC<SpringCardProps> = ({ 
  children, 
  className = "", 
  glowColor = "rgba(0,245,160,0.15)", 
  onClick,
  role,
  tabIndex,
  onKeyDown,
  ariaLabel
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Update CSS custom properties for radial gradient mouse tracking
    e.currentTarget.style.setProperty('--mouse-x', `${mouseX}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 transition-colors duration-300 group cursor-pointer hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00F5A0] ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`
        }}
      />
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel: string;
}

const SharedModal: React.FC<ModalProps> = ({ isOpen, onClose, children, ariaLabel }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF2A85]"
            >
              <X className="w-5 h-5" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [activePillar, setActivePillar] = useState<string>('dev');
  const [activeProjectTab, setActiveProjectTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  // Controlled contact form state
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactRequirement, setContactRequirement] = useState<string>('Web Development (Next.js / React / Responsive Systems)');
  const [contactMessage, setContactMessage] = useState<string>('');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const currentPillar = PORTFOLIO_DATA.pillars.find(p => p.id === activePillar) || PORTFOLIO_DATA.pillars[0];

  const handlePillarSelect = (pillarId: string) => {
    setActivePillar(pillarId);
    setActiveProjectTab(pillarId);
  };

  // Audio Playback timer effect matching each reel's real duration
  useEffect(() => {
    if (playingAudioId) {
      const activeReel = PORTFOLIO_DATA.audioReels.find(r => r.id === playingAudioId);
      const totalDurationMs = (activeReel?.durationSeconds || 8) * 1000;
      const stepIntervalMs = 100;
      const increment = (stepIntervalMs / totalDurationMs) * 100;

      intervalRef.current = window.setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setPlayingAudioId(null);
            return 0;
          }
          return prev + increment;
        });
      }, stepIntervalMs);
    } else {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setAudioProgress(0);
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [playingAudioId]);

  const toggleAudio = (reel: AudioReel) => {
    if (playingAudioId === reel.id) {
      setPlayingAudioId(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setPlayingAudioId(reel.id);
      setAudioProgress(0);
      if (reel.src && !isMuted) {
        if (!audioRef.current) {
          audioRef.current = new Audio(reel.src);
        } else {
          audioRef.current.src = reel.src;
        }
        audioRef.current.muted = isMuted;
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`New Inquiry from ${contactName} - ${contactRequirement}`);
    const mailtoBody = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\nRequirement: ${contactRequirement}\n\nMessage:\n${contactMessage}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsContactOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0A10] text-slate-100 font-sans selection:bg-[#FF2A85] selection:text-white relative overflow-x-hidden scroll-smooth">
        <TopographicBackground />

        {/* Global Injected CSS styles for keyframes & anchor scrolling */}
        <style dangerouslySetInnerHTML={{ __html: `
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 5rem;
          }
          @keyframes gradientX {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradientX 6s ease infinite;
          }
        ` }} />

        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B0A10]/80 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00F5A0] rounded-xl p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F5A0] via-[#FF2A85] to-[#FF9F1C] p-[2px] shadow-lg shadow-[#FF2A85]/10">
                <div className="w-full h-full bg-[#0B0A10] rounded-[10px] flex items-center justify-center font-bold text-lg text-white group-hover:bg-transparent transition-colors duration-300">
                  EM
                </div>
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-100 block">
                  {PORTFOLIO_DATA.shortName}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {PORTFOLIO_DATA.availability}
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-400" aria-label="Main Navigation">
              <a href="#pillars" className="hover:text-[#00F5A0] transition-colors">PILLARS</a>
              <a href="#work" className="hover:text-[#FF2A85] transition-colors">FEATURED WORK</a>
              <a href="#audio" className="hover:text-[#FF9F1C] transition-colors">VOICE REELS</a>
              <a href="#about" className="hover:text-[#00D2FF] transition-colors">ABOUT</a>
            </nav>

            <button
              onClick={() => setIsContactOpen(true)}
              aria-label="Open contact and discovery call modal"
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF2A85]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0] via-[#FF2A85] to-[#FF9F1C] rounded-full animate-gradient-x" />
              <span className="relative px-5 py-2.5 rounded-full bg-[#0B0A10] text-slate-200 group-hover:bg-transparent group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2A85] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto min-h-[75vh] flex flex-col justify-center">
          <motion.div 
            animate={{ backgroundColor: currentPillar.color }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          />

          <div className="flex flex-col items-center text-center relative z-10">
            
            {/* Interactive Pillar Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl mb-8 shadow-2xl" role="tablist" aria-label="Skill Pillars">
              {PORTFOLIO_DATA.pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handlePillarSelect(pillar.id)}
                    className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                      isSelected ? "text-slate-950 font-extrabold shadow-md" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activePillarIndicator"
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: pillar.color }}
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-slate-400"}`} />
                      <span>{pillar.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id + "-badge"}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="mb-4"
              >
                <span 
                  className="text-[11px] font-mono tracking-widest px-3.5 py-1.5 rounded-full font-bold uppercase backdrop-blur-md bg-slate-900/90 border"
                  style={{ borderColor: `${currentPillar.color}80`, color: currentPillar.color }}
                >
                  // {currentPillar.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Hero Headline */}
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentPillar.id + "-headline"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15]"
              >
                {currentPillar.headlineLead}{" "}
                <span 
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(to right, ${currentPillar.color}, #ffffff)` }}
                >
                  {currentPillar.headlineGradient}
                </span>{" "}
                {currentPillar.headlineEnd}
              </motion.h1>
            </AnimatePresence>

            {/* Dynamic Subtext */}
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentPillar.id + "-subtext"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal"
              >
                {currentPillar.subtext}
              </motion.p>
            </AnimatePresence>

            {/* Dynamic Hero CTAs */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPillar.id + "-ctas"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href={currentPillar.ctaPrimaryHref}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ backgroundColor: currentPillar.color }}
                >
                  <span>{currentPillar.ctaPrimary}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={currentPillar.ctaSecondaryHref}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-800/80 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>{currentPillar.ctaSecondary}</span>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Experience Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
            >
              {PORTFOLIO_DATA.experienceStats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D2FF]">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Pillars Cards Section */}
        <section id="pillars" className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-xs font-mono text-[#00F5A0] tracking-widest uppercase mb-2">
              // THREE CORE DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Integrated Creative & Technical Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.id;
              return (
                <SpringCard 
                  key={pillar.id}
                  glowColor={pillar.glow}
                  onClick={() => handlePillarSelect(pillar.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePillarSelect(pillar.id); }}
                  ariaLabel={`Select pillar: ${pillar.title}`}
                  className={isSelected ? "ring-2 ring-slate-600 bg-slate-900/90" : ""}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${pillar.color}20`, border: `1px solid ${pillar.color}50` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{pillar.subtext}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {pillar.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono px-2 py-1 rounded bg-slate-950/80 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpringCard>
              );
            })}
          </div>
        </section>

        {/* Featured Work Showcase */}
        <section id="work" className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-[#FF2A85] tracking-widest uppercase mb-2 block">
                // PORTFOLIO SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Featured Case Studies & Digital Assets
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto" role="tablist" aria-label="Project filter tabs">
              {['all', 'dev', 'vo', 'smm'].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeProjectTab === tab}
                  onClick={() => setActiveProjectTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all focus:outline-none focus:ring-2 focus:ring-[#FF2A85] ${
                    activeProjectTab === tab 
                      ? "bg-slate-800 text-white shadow-sm" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {PORTFOLIO_DATA.projects
                .filter(p => activeProjectTab === 'all' || p.pillar === activeProjectTab)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
                    aria-label={`View case study for ${project.title}`}
                    className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-[#FF2A85]"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span 
                          className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full font-bold uppercase backdrop-blur-md bg-slate-950/80 text-white border"
                          style={{ borderColor: project.accentColor }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-slate-900/90 text-white flex items-center justify-center">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00F5A0] transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                          {project.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Studio Audio Soundboard */}
        <section id="audio" className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF2A85]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono text-[#FF9F1C] tracking-widest uppercase mb-2 flex items-center gap-2">
                  <Radio className="w-4 h-4 animate-pulse text-[#FF2A85]" />
                  // STUDIO AUDIO SOUNDBOARD
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Voice Over & Commercial Demo Reels
                </h2>
              </div>

              <button 
                onClick={() => {
                  const newMuted = !isMuted;
                  setIsMuted(newMuted);
                  if (audioRef.current) audioRef.current.muted = newMuted;
                }}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                <span>{isMuted ? "MUTED" : "AUDIO READY"}</span>
              </button>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.audioReels.map((reel) => {
                const isPlaying = playingAudioId === reel.id;
                return (
                  <div 
                    key={reel.id}
                    className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                      isPlaying 
                        ? "bg-slate-950 border-slate-700 shadow-lg" 
                        : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleAudio(reel)}
                          aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform active:scale-90 shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                          style={{ backgroundColor: reel.accent, color: "#0B0A10" }}
                        >
                          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                        </button>

                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                            {reel.title}
                            {isPlaying && (
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            )}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            {reel.category} • {reel.durationLabel}
                          </span>
                        </div>
                      </div>

                      {/* Waveform fills left to right as reel plays */}
                      <div className="flex items-center gap-1 h-8 px-4 py-1 rounded-lg bg-slate-900 border border-slate-800/80 w-full sm:w-auto overflow-hidden">
                        {reel.waveform.map((baseHeight, wIdx) => {
                          const barProgressThreshold = (wIdx / reel.waveform.length) * 100;
                          const isBarFilled = isPlaying && audioProgress >= barProgressThreshold;
                          return (
                            <div
                              key={wIdx}
                              className="w-1 rounded-full transition-all duration-150"
                              style={{
                                height: `${Math.max(12, baseHeight * 0.4)}%`,
                                backgroundColor: isBarFilled ? reel.accent : "#334155"
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-900 text-xs text-slate-400 font-mono italic leading-relaxed flex items-start gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>"{reel.script}"</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <span className="text-xs font-mono text-[#00D2FF] tracking-widest uppercase mb-2 block">
                // BIOGRAPHY & MINDSET
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Full-Stack Discipline, Strategic Copy & Tactical Execution.
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                <p>
                  Operating at the intersection of modern web engineering and strategic media production. Based in Kitengela, Kenya, I build digital experiences where code performance matches content narrative.
                </p>
                <p>
                  My creative ethos is heavily influenced by high-stakes negotiation frameworks (<em className="text-slate-200">"Never Split the Difference"</em>), clean architectural design systems, and physical fitness discipline. Whether engineering Next.js web applications or directing short-form social campaigns, the goal remains singular: measurable impact.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
                  <span>{PORTFOLIO_DATA.location}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-[#00F5A0]" />
                  <span>Next.js / Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Activity className="w-3.5 h-3.5 text-[#FF9F1C]" />
                  <span>Tactile Micro-Interactions</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5A0]/10 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00F5A0]" />
                  TECHNICAL TOOLING
                </h3>
                
                <div className="space-y-3">
                  {[
                    { label: "Frontend & Web", val: "Next.js, React, Tailwind CSS, Framer Motion, GSAP" },
                    { label: "Audio & VO", val: "Adobe Audition, CapCut, Studio Acoustic Setup" },
                    { label: "Growth Media", val: "TikTok, Instagram Reels, Notion Content Calendars" },
                    { label: "Design Systems", val: "Emil Kowalski Physics, Figma, Motion Primitives" }
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] font-mono text-[#00D2FF] block uppercase">{item.label}</span>
                      <span className="text-xs text-slate-200 font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 pt-16 pb-12 border-t border-slate-800/60 bg-slate-950/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-lg font-extrabold tracking-wider text-white">{PORTFOLIO_DATA.name}</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#FF2A85]" /> {PORTFOLIO_DATA.location}</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-[#00F5A0]" /> {PORTFOLIO_DATA.socials.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#FF9F1C]" /> {PORTFOLIO_DATA.socials.email}</span>
              </p>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-[#00F5A0] transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-[#00D2FF] transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter Profile" className="hover:text-[#FF2A85] transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Profile" className="hover:text-[#FF9F1C] transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Chat" className="hover:text-emerald-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs">
                WA
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
            <span>MADAGASCAR SUNSET MOTH PALETTE • EMIL KOWALSKI DESIGN MANIFESTO</span>
          </div>
        </footer>

        {/* Case Study Detail Modal */}
        <SharedModal 
          isOpen={selectedProject !== null} 
          onClose={() => setSelectedProject(null)}
          ariaLabel="Case study details"
        >
          {selectedProject && (
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#00F5A0] uppercase block mb-1">
                // CASE STUDY DETAIL
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">{selectedProject.details}</p>

              <div className="mb-6">
                <span className="text-xs font-mono text-slate-300 block mb-2 font-bold">TECHNOLOGY & TOOLS</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 text-emerald-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] text-slate-950 font-bold text-xs uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-white"
              >
                Close Case Study
              </button>
            </div>
          )}
        </SharedModal>

        {/* Contact Discovery Drawer Modal */}
        <SharedModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)}
          ariaLabel="Contact and discovery call inquiry form"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#FF2A85] uppercase block mb-1">
              // DISCOVERY CALL & INQUIRY
            </span>
            <h3 className="text-2xl font-extrabold text-white mb-6">Let's Build Something Impactful.</h3>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="visitor-name" className="text-xs font-mono text-slate-300 block mb-1">YOUR NAME</label>
                <input 
                  id="visitor-name"
                  type="text" 
                  required 
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#FF2A85]" 
                />
              </div>
              <div>
                <label htmlFor="visitor-email" className="text-xs font-mono text-slate-300 block mb-1">EMAIL ADDRESS</label>
                <input 
                  id="visitor-email"
                  type="email" 
                  required 
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="jane@example.com" 
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#FF2A85]" 
                />
              </div>
              <div>
                <label htmlFor="visitor-requirement" className="text-xs font-mono text-slate-300 block mb-1">PRIMARY REQUIREMENT</label>
                <select 
                  id="visitor-requirement"
                  value={contactRequirement}
                  onChange={(e) => setContactRequirement(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#FF2A85]"
                >
                  <option>Web Development (Next.js / React / Responsive Systems)</option>
                  <option>Voice Over Narration & Studio Audio</option>
                  <option>Social Media Management & Growth Campaigns</option>
                  <option>Full Multi-Disciplinary Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="visitor-message" className="text-xs font-mono text-slate-300 block mb-1">MESSAGE</label>
                <textarea 
                  id="visitor-message"
                  rows={3} 
                  required 
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Tell me about your project goals and timeline..." 
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#FF2A85]"
                />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF2A85] via-[#FF9F1C] to-[#00F5A0] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF2A85]/20 focus:outline-none focus:ring-2 focus:ring-white">
                <Send className="w-4 h-4" />
                <span>Send Inquiry & Open Mail</span>
              </button>
            </form>
          </div>
        </SharedModal>

      </div>
    </MotionConfig>
  );
}