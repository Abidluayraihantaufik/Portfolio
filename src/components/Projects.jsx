import React from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Database,
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/content';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 15, className = "" }) => (
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

const Projects = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accentIndigo/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-accentCyan to-accentIndigo mx-auto rounded-full ${projectsData.length > 0 && t.projects.subtitle ? 'mb-4' : ''}`} />
          {projectsData.length > 0 && t.projects.subtitle && (
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          )}
        </motion.div>

        {projectsData.length === 0 ? (
          /* Empty placeholder state */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto glass-panel rounded-3xl p-10 sm:p-12 text-center border border-zinc-800/80 relative overflow-hidden group hover:border-zinc-700 transition-colors"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accentCyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accentCyan shadow-inner group-hover:scale-105 transition-transform duration-300">
              <FolderGit2 size={36} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {t.projects.emptyTitle}
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              {t.projects.emptyDesc}
            </p>

            <div className="mt-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-accentCyan">
              <Sparkles size={14} />
              <span>{t.projects.statusInProgress}</span>
            </div>
          </motion.div>
        ) : (
          /* Showcase Cards Grid */
          <div className={`grid grid-cols-1 ${projectsData.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl'} gap-8 mx-auto`}>
            {projectsData.map((project, idx) => {
              const isLive = project.status === 'live';

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-panel rounded-3xl p-6 sm:p-8 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                >
                  {/* Subtle card glow on hover */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accentCyan/5 rounded-full blur-3xl group-hover:bg-accentCyan/10 transition-colors pointer-events-none" />

                  <div>
                    {/* Project Screenshot / Live Preview Header */}
                    {project.image && (
                      <div className="relative mb-6 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 group/img shadow-xl">
                        <div className="aspect-[16/9] w-full overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title[lang]}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                          
                          {/* Live URL hover badge */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                              aria-label={`Open ${project.title[lang]}`}
                            >
                              <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs sm:text-sm shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                                <span>{t.projects.liveDemo}</span>
                                <ArrowUpRight size={16} />
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Top Header: Category Tag & Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-accentCyan">
                        {project.id === 1 ? <Layers size={13} /> : <Database size={13} />}
                        <span>{project.category[lang]}</span>
                      </span>

                      {/* Status Badge: Live or In-Progress */}
                      {isLive ? (
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-inner">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                          </span>
                          <span>{project.statusLabel[lang]}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                          </span>
                          <span>{project.statusLabel[lang]}</span>
                        </div>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-accentCyan transition-colors">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-start justify-between gap-2"
                        >
                          <span>{project.title[lang]}</span>
                          <ArrowUpRight size={20} className="text-accentCyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                        </a>
                      ) : (
                        project.title[lang]
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {project.desc[lang]}
                    </p>

                    {/* Progress / Status Tracker Bar */}
                    <div className="mb-6 p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/70">
                      <div className="flex justify-between items-center text-xs font-semibold mb-2">
                        <span className="text-slate-300 flex items-center space-x-1.5">
                          {isLive ? (
                            <CheckCircle2 size={13} className="text-emerald-400" />
                          ) : (
                            <Clock size={13} className="text-amber-400" />
                          )}
                          <span>{t.projects.statusNoteTitle}</span>
                        </span>
                        <span className={`font-mono ${isLive ? 'text-emerald-400 font-bold' : 'text-accentCyan'}`}>
                          {project.progress}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden p-0.5">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            isLive 
                              ? 'bg-gradient-to-r from-emerald-400 via-accentCyan to-accentIndigo'
                              : 'bg-gradient-to-r from-amber-400 via-accentCyan to-accentIndigo'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>

                      <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                        {project.statusDetail[lang]}
                      </p>
                    </div>

                    {/* Key Features / Modules Checklist */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {t.projects.featuresTitle}
                      </h4>
                      <ul className="space-y-2">
                        {project.features[lang].map((feat, i) => (
                          <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Tech Stack Badges & Action Buttons */}
                  <div className="pt-5 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-900 text-slate-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Live Demo Link Button */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-zinc-950 font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-[0.99]"
                        >
                          <span>{t.projects.liveDemo}</span>
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {/* In-progress status badge button (if not live) */}
                      {!isLive && (
                        <div className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-semibold text-amber-300 flex items-center justify-center space-x-2 select-none shadow-inner">
                          <Clock size={14} className="text-amber-400 animate-pulse" />
                          <span>{t.projects.actionProgress}</span>
                        </div>
                      )}

                      {/* Source code / Github button (if url exists) */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs sm:text-sm font-semibold text-white flex items-center justify-center space-x-2 transition-colors hover:border-accentCyan/50"
                          aria-label="View Github Repository"
                        >
                          <GithubIcon size={15} className="text-accentCyan" />
                          <span>{t.projects.viewCode}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
