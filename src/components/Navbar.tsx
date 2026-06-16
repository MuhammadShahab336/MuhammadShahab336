import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          SY.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Socials & Resume - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="http://github.com/MuhammadShahab336" target="_blank" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="http://linkedin.com/in/themuhammadshahab" target="_blank" className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <Link to="/#contact" className="px-5 py-2.5 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-500/20 transition-all">
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-800 my-2" />
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 text-slate-400 hover:text-blue-400"><Github className="w-6 h-6" /></a>
                <a href="#" className="p-2 text-slate-400 hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="p-2 text-slate-400 hover:text-blue-400"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
