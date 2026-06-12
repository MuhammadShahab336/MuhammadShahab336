import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <Link to={`/projects/${project.slug}`} className="absolute inset-0 z-20" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">{project.title}</h3>
                </Link>
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 test-white rounded-xl font-medium transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center p-2.5 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white rounded-xl transition-colors z-20"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
