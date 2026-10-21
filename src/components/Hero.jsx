import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/content';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

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

        {/* Greeting / Name */}
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
          {/* Avatar column with soft glow halo and social icons below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-shrink-0 flex flex-col items-center"
          >
            {/* Halo glow behind circular photo */}
            <div className="absolute top-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full bg-white/20 blur-2xl scale-110 pointer-events-none" />
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full p-1 ring-2 ring-white/20 shadow-[0_0_50px_rgba(255,255,255,0.22)] bg-zinc-900/60 backdrop-blur-sm relative">
              <img
                src={profileImg}
                alt="Abid Lu'ay Raihan Taufik"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Quick Social Logos below photo */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-slate-300 hover:text-white hover:border-accentCyan/50 hover:bg-zinc-800 hover:scale-110 transition-all duration-200 shadow-md group relative"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-zinc-800 hover:scale-110 transition-all duration-200 shadow-md group relative"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={socialLinks.email}
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-zinc-800 hover:scale-110 transition-all duration-200 shadow-md group relative"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
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
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-zinc-950 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
              >
                <Sparkles size={18} />
                <span>{t.hero.cta_projects || 'Lihat Proyek'}</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center space-x-2 hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
              >
                <span>{t.hero.cta_contact}</span>
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
