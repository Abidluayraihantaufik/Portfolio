import React from 'react';
import { BookOpen, GraduationCap, Code, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  const iconMap = {
    "Software Engineering": <Code className="text-accentCyan" size={30} />,
    "Data Analisis": <Database className="text-accentIndigo" size={30} />,
    "Data Analytics": <Database className="text-accentIndigo" size={30} />,
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentIndigo mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accentCyan/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-start space-x-4 mb-5">
                <div className="p-3 bg-zinc-800/50 rounded-xl flex-shrink-0">
                  <GraduationCap className="text-accentCyan" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">Universitas Pelita Bangsa</h3>
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {t.about.gpa}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg text-justify">
                {t.about.bio}
              </p>
            </div>
          </motion.div>

          {/* Focus Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center border border-zinc-800 shadow-inner">
                    {iconMap[pillar.title] || <BookOpen className="text-slate-400" size={28} />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
