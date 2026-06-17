import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, ExternalLink, Github, FileText, ArrowLeft, Lightbulb, Target, Rocket, Wrench, X } from 'lucide-react';
import { PROJECTS } from '../data';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project || !project.details) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-400 hover:underline">Return to Home</Link>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200">

      {/* 1. Breadcrumb Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center text-sm text-slate-400">
          <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white font-medium">{project.title}</span>
        </div>
      </nav>

      {/* 2. Project Hero Section */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">{details.category}</span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">{details.status}</span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">{details.duration}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Role</p>
              <p className="font-medium text-slate-300">{details.role}</p>
            </div>

            <div className="flex gap-4">
              <a href={project.liveUrl} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a href={project.githubUrl} className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-colors">
                <Github className="w-4 h-4" />
                Repository
              </a>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-colors">
                <FileText className="w-4 h-4" />
                Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* 3. Project Banner */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800 bg-slate-900 group relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {(details.gallery.length > 0 ? details.gallery : [project.imageUrl]).map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-700"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* 4. Project Overview */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-400" />
                Project Overview
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-white font-semibold mb-2">The Problem</h3>
                  <p>{details.overview.problem}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Scope</h3>
                  <p>{details.overview.scope}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Business Requirements</h3>
                <ul className="space-y-3">
                  {details.overview.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Goals & Objectives</h3>
                <ul className="space-y-3">
                  {details.overview.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Technology Stack Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6 border-b border-slate-800 pb-4">Technologies Used</h3>
            <div className="space-y-6">
              {details.techStackCategories.map((cat, i) => (
                <div key={i}>
                  <h4 className="text-sm font-medium text-slate-500 mb-3">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. My Contributions */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-10 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-teal-400" />
            My Contributions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {details.contributions.map((contribution, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-slate-700 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-medium text-slate-200">{contribution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Challenges & Solutions */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">
            Challenges & Solutions
          </h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {details.challenges.map((item, idx) => (
              <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-800 text-slate-400 group-[.is-active]:text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Lightbulb className="w-4 h-4" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase text-rose-400 block mb-1">Challenge</span>
                    <p className="text-slate-200 font-medium">{item.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase text-blue-400 block mb-1">Solution</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-400 block mb-1">Result</span>
                    <p className="text-slate-300 text-sm font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Project Gallery */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.gallery.map((img, idx) => (
              <div
                key={idx}
                className="aspect-video rounded-xl overflow-hidden border border-slate-800 group cursor-pointer relative"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-slate-900/80 p-3 rounded-full text-white backdrop-blur-sm">
                    <Target className="w-5 h-5" />
                  </div>
                </div>
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Results & Impact */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Rocket className="w-10 h-10 text-rose-400" />
            Results & Impact
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Measurable outcomes from the implementation of modern frontend practices.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {details.results.map((res, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
                {res.value}
              </div>
              <div className="text-slate-500 font-medium">{res.metric}</div>
              <p className="text-slate-500 font-normal">{res.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Lessons Learned */}
      {/* <section className="py-16 md:py-24 px-6 md:px-12 bg-blue-900/5 border-y border-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Lessons Learned</h2>
          <div className="space-y-4">
            {details.lessonsLearned.map((lesson, idx) => (
              <div key={idx} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-300">
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 12. Related Projects */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-12">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.filter(p => p.slug !== project.slug).slice(0, 3).map((p, idx) => (
              <div key={idx} className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Link to={`/projects/${p.slug}`} className="absolute inset-0 z-20" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{p.description}</p>
                  <Link to={`/projects/${p.slug}`} className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 mt-auto">
                    View Project <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Call To Action */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Interested in working together?</h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for senior frontend roles and freelance projects. Let's discuss how I can help your team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all w-full sm:w-auto">
            Contact Me
          </Link>
          <Link to="/#projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-medium transition-all w-full sm:w-auto">
            View More Projects
          </Link>
        </div>
      </section>


      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Zoomed gallery view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
