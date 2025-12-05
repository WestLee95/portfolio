"use client";
import Image from "next/image";

export default function Projects() {
    const projects = [
    {
      title: "E-Commerce Platform",
      description: "Fully responsive online marketplace with real-time inventory management, Stripe integration, and admin dashboard. Built to handle 10k+ daily users.",
      tech: "Next.js, TypeScript, Supabase, Tailwind CSS",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"
    },
    {
      title: "Voice Portfolio Platform",
      description: "Dynamic showcase platform for voice artists featuring audio streaming, client testimonials, and booking system with calendar integration.",
      tech: "React, Node.js, PostgreSQL, AWS S3",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Business intelligence tool with live data visualization, custom reporting, and team collaboration features. Processes 1M+ data points daily.",
      tech: "Next.js, D3.js, WebSocket, MongoDB",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "SaaS Landing Experience",
      description: "Conversion-optimized landing page with scroll-triggered animations, A/B testing integration, and micro-interactions that increased signups by 45%.",
      tech: "Next.js, Framer Motion, Tailwind CSS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <>
    {/* Projects Section - Vertical Scroll */}
      <section id="projects" className="relative bg-[#fef3e2] py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold text-amber-900 mb-20 text-center">Selected Work</h2>
          
          <div className="space-y-32 md:space-y-40">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
                }}
              >
                <div className="w-full md:w-1/2">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full aspect-4/3 object-cover"
                  />
                </div>
                
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-amber-900">{project.title}</h3>
                  <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-base md:text-lg text-amber-700 font-mono">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
  );
}