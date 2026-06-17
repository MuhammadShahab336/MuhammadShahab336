import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6 md:px-12 flex flex-col justify-center min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-slate-300 mb-4"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Shahab Yousuf</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-slate-400"
        >
          Senior Frontend Developer
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Crafting scalable, high-performance web and mobile applications with over 4+ years of experience. Specializing in the React ecosystem, TypeScript, and modern frontend architecture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/public\Muhammad_Shahab_CV2.pdf"
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
          >
            Download Resume
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6 pt-12 text-slate-400"
        >
          <a href="http://github.com/MuhammadShahab336" target="_blank" className="hover:text-blue-400 transition-colors p-2"><Github className="w-7 h-7" /></a>
          <a href="http://linkedin.com/in/themuhammadshahab" target="_blank" className="hover:text-blue-400 transition-colors p-2"><Linkedin className="w-7 h-7" /></a>
          <a href="mailto:shahab652@outlook.com" className="hover:text-blue-400 transition-colors p-2"><Mail className="w-7 h-7" /></a>
        </motion.div>
      </div>
    </section>
  );
}
