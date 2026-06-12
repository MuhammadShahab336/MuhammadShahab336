import React from 'react';
import { motion } from 'motion/react';
import { Layout, Smartphone, AppWindow, Database, Palette } from 'lucide-react';

const SERVICES = [
  {
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and highly interactive web applications using modern web technologies.'
  },
  {
    icon: <AppWindow className="w-8 h-8 text-purple-400" />,
    title: 'React/Next.js Architecture',
    description: 'Designing scalable folder structures, state management, and optimized rendering strategies for enterprise applications.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-teal-400" />,
    title: 'React Native Apps',
    description: 'Developing cross-platform mobile applications for iOS and Android with unified codebases.'
  },
  {
    icon: <Database className="w-8 h-8 text-amber-400" />,
    title: 'API Integration',
    description: 'Seamlessly connecting frontends with REST and GraphQL backends, handling data fetching, caching, and state.'
  },
  {
    icon: <Palette className="w-8 h-8 text-rose-400" />,
    title: 'UI Implementation',
    description: 'Converting complex Figma and Adobe XD designs into pixel-perfect, interactive React components.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-800 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
