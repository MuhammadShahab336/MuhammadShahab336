import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 block mb-2">
            SY.
          </a>
          <p className="text-slate-400 text-sm">
            Building digital experiences that matter.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map(link => (
             <a 
               key={link.name} 
               href={link.href} 
               className="text-sm text-slate-400 hover:text-white transition-colors"
             >
               {link.name}
             </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-700 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-700 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:shahaby47@gmail.com" className="p-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-700 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>&copy; {currentYear} Shahab Yousuf. All rights reserved.</p>
        <p>Designed taking inspiration from modern web aesthetics.</p>
      </div>
    </footer>
  );
}
