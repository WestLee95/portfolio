'use client'
import { Github, Linkedin, Mail } from 'lucide-react';


export default function Footer() {
    return (
        <>
        {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

          
          <div className="flex gap-6">
            <a href="https://github.com" className="text-white hover:text-amber-500 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-amber-500 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:eugene@example.com" className="text-white hover:text-amber-500 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-amber-700 text-sm">
          © {new Date().getFullYear()} Eugene Westley. All rights reserved.
        </div>
      </footer>
      </>
    );
}