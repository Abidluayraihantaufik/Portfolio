import React, { useState } from 'react';
import { Layout, Headphones, Users2, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('technical'); // 'technical' | 'soft'

  const skillIcons = {
    frontend: <Layout className="text-accentCyan" size={28} />,
    backend: <Code2 className="text-accentIndigo" size={28} />,
    web: <Layout className="text-accentCyan" size={28} />
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950/50 border-y border-zinc-900 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-accentCyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.skills.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentIndigo mx-auto rounded-full" />
        </motion.div>

        {/* Small Switcher / Toggle Button on top of cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('technical')}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-accentCyan to-accentIndigo text-white shadow-lg shadow-accentCyan/20'
                  : 'text-slate-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Code2 size={16} />
              <span className="hidden sm:inline">{t.skills.filterTechnicalFull || t.skills.filterTechnical}</span>
              <span className="sm:hidden">{t.skills.filterTechnical}</span>
            </button>

            <button
              onClick={() => setActiveTab('soft')}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'soft'
                  ? 'bg-gradient-to-r from-accentIndigo to-purple-600 text-white shadow-lg shadow-accentIndigo/20'
                  : 'text-slate-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <Users2 size={16} />
              <span>{t.skills.filterSoft}</span>
            </button>
          </div>
        </motion.div>

        {/* Cards Area with Smooth Animated Transition */}
        <AnimatePresence mode="wait">
          {activeTab === 'technical' ? (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {t.skills.domains.map((item) => (
                <div
                  key={item.id}
                  className="glass-panel rounded-3xl p-7 sm:p-8 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-3.5 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {skillIcons[item.id] || <Layout className="text-accentCyan" size={28} />}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accentCyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Subtle Divider */}
                    <div className="h-px w-full bg-zinc-800/80 mb-5" />

                    {/* Specific Technology Badges */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Sparkles size={13} className={item.id === 'web' ? 'text-accentCyan' : 'text-emerald-400'} />
                        <span>
                          {lang === 'id'
                            ? (item.id === 'web' ? 'Teknologi & Tools:' : 'Bidang & Kompetensi:')
                            : (item.id === 'web' ? 'Technologies & Tools:' : 'Domains & Competencies:')}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2 shadow-sm"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.id === 'web' ? 'bg-accentCyan' : 'bg-emerald-400'
                              }`}
                            />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl mx-auto"
            >
              {/* Dedicated Professional / Soft Skills Card */}
              <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-2xl hover:shadow-indigo-950/20 transition-all duration-300 group cursor-default">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3.5 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <Users2 className="text-accentIndigo" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accentIndigo transition-colors">
                        {t.skills.softSkills.title}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400">
                        {t.skills.softSkills.category}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-accentIndigo">
                    ✨ Interpersonal & Workplace
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {t.skills.softSkills.desc}
                </p>

                {/* Subtle Divider */}
                <div className="h-px w-full bg-zinc-800/80 mb-6" />

                {/* Soft Skills Competencies Badges Grid */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 size={14} className="text-accentIndigo" />
                    <span>{lang === 'id' ? 'Kompetensi Profesional & Soft Skills:' : 'Key Professional Competencies:'}</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.skills.softSkills.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800/90 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-accentIndigo/50 hover:bg-zinc-800/60 transition-all duration-200 flex items-center space-x-2.5 shadow-sm group/item"
                      >
                        <span className="w-2 h-2 rounded-full bg-accentIndigo group-hover/item:scale-125 transition-transform flex-shrink-0" />
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
