import React from 'react';
import { motion } from 'motion/react';
import { Code2, MonitorSmartphone, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm a passionate Senior Frontend Developer with over 4 years of professional experience building rich, interactive, and highly scalable user interfaces.
            </p>
            <p>
              My journey in web development started with a deep curiosity about how the web works, which quickly evolved into a focused specialization within the React ecosystem. I thrive on translating complex design systems into robust, maintainable code.
            </p>
            <p>
              Today, my main focus is on architecting modern web applications using React.js, Next.js, and TypeScript, while also building cross-platform mobile experiences with React Native. I care deeply about performance, accessibility, and crafting beautiful developer experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8 text-blue-400" />,
                title: 'Clean Architecture',
                description: 'Writing maintainable, scalable, and well-documented TypeScript code.'
              },
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-purple-400" />,
                title: 'Cross-Platform',
                description: 'Delivering seamless experiences across desktop web and native mobile.'
              },
              {
                icon: <Rocket className="w-8 h-8 text-teal-400" />,
                title: 'Performance First',
                description: 'Optimizing rendering, bundles, and user interactions for speed.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
