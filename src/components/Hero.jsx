import React from 'react';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentCyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentIndigo/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 glass-panel px-3.5 py-1.5 rounded-full mb-6 border border-zinc-800/80 shadow-md shadow-black/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">{t.hero.available}</span>
        </motion.div>

        {/* Greeting / Name - flexible and not too big */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 tracking-wide">
            {t.hero.greeting}
          </p>
        </motion.div>

        {/* Main Content Layout: Photo on left, Details on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-14">
          {/* Avatar with soft white glow halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Halo glow behind circular photo */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl scale-110 pointer-events-none" />
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full p-1 ring-2 ring-white/20 shadow-[0_0_50px_rgba(255,255,255,0.22)] bg-zinc-900/60 backdrop-blur-sm relative">
              <img
                src={profileImg}
                alt="Abid Lu'ay Raihan Taufik"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Role Title, Subtitle, Pitch & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Title: Web Developer & IT Helpdesk */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-3">
              Web Developer <br className="hidden sm:inline" />
              <span className="text-slate-300 font-bold">&amp; IT Helpdesk</span>
            </h1>

            {/* Subtitle with student/education icon */}
            <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-400 text-sm sm:text-base font-medium mb-5">
              <GraduationCap size={20} className="text-accentCyan flex-shrink-0" />
              <span>{t.hero.subtitle} • {t.hero.univ}</span>
            </div>

            {/* Pitch description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 text-justify">
              {t.hero.pitch}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-zinc-950 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
              >
                <Sparkles size={18} />
                <span>{t.hero.cta_contact}</span>
              </a>
              <a
                href="#certificate"
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
              >
                <span>{t.hero.cta_work}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
