import React, { useState } from 'react';
import { Award, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificatesData } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const Certificates = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: t.cert.filterAll },
    { id: 'data-science', label: t.cert.filterDataScience },
    { id: 'sql', label: t.cert.filterSQL }
  ];

  const filteredCerts = filter === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category === filter);

  return (
    <section id="certificate" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cert.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentIndigo mx-auto rounded-full mb-10" />
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-accentCyan text-zinc-950 shadow-lg shadow-accentCyan/20'
                    : 'bg-zinc-900 text-slate-400 border border-zinc-800 hover:text-white hover:border-zinc-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl overflow-hidden group hover:border-zinc-700 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between border border-zinc-800/80"
              >
                {/* Certificate Preview Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900 border-b border-zinc-800/60">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Floating Date Badge */}
                  <span className="absolute top-3 right-3 text-xs font-bold text-slate-200 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800">
                    {cert.date}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-accentCyan mb-2">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>{cert.issuer}</span>
                      {cert.duration && (
                        <>
                          <span className="text-zinc-600">•</span>
                          <span className="text-slate-400">{cert.duration}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-accentCyan transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mb-4">
                      <span className="bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 text-slate-300">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Buttons: View PDF & Verify */}
                  <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between gap-3">
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs sm:text-sm font-semibold text-white flex items-center justify-center space-x-2 transition-colors"
                    >
                      <FileText size={15} className="text-accentCyan" />
                      <span>{t.cert.viewPdf}</span>
                    </a>
                    
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3.5 rounded-xl bg-accentCyan/10 hover:bg-accentCyan/20 border border-accentCyan/30 text-xs sm:text-sm font-semibold text-accentCyan flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>{t.cert.verify}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
