import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-slate-800 hidden md:block" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-8 -translate-x-1/2 top-1.5 w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-blue-400" />
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                    <div className="text-blue-400 font-medium mt-1">{exp.company}</div>
                  </div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium border border-slate-600/50 self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-slate-300 leading-relaxed flex gap-3">
                      <span className="text-slate-500 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
