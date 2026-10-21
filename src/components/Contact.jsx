import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/content';
import { motion } from 'framer-motion';

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

const Contact = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const contactEmail = t.contact.email || 'abidluay204@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = contactEmail;
    const emailSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Halo Abid,\n\n` +
      `Pesan baru dari pengunjung website portofolio:\n\n` +
      `• Nama Pengirim: ${formData.name}\n` +
      `• Email Pengirim: ${formData.email}\n` +
      `• Subjek: ${formData.subject}\n\n` +
      `Pesan:\n${formData.message}\n\n` +
      `---\nDikirim melalui formulir kontak portofolio.`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${emailSubject}&body=${emailBody}`;

    setSubmittedInfo({ mailtoUrl, gmailUrl });

    // Trigger direct mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50 border-t border-zinc-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accentCyan/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4 hover:border-zinc-700 transition-colors group">
              <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-accentCyan/10 group-hover:text-accentCyan transition-colors text-slate-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <a href={`mailto:${contactEmail}`} className="text-white font-medium hover:text-accentCyan transition-colors">
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4 hover:border-zinc-700 transition-colors group">
              <div className="p-4 bg-zinc-900 rounded-xl group-hover:bg-emerald-400/10 group-hover:text-emerald-400 transition-colors text-slate-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">WhatsApp / Phone</p>
                <a href="https://wa.me/62895377864560" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-emerald-400 transition-colors">
                  +62 895-3778-64560
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
              <div className="p-4 bg-zinc-900 rounded-xl text-slate-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="text-white font-medium">{t.contact.location}</p>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 glass-panel rounded-xl hover:text-white hover:border-accentCyan/50 hover:bg-zinc-800 transition-all text-slate-300 flex items-center space-x-2 text-sm font-medium"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 glass-panel rounded-xl hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-zinc-800 transition-all text-slate-300 flex items-center space-x-2 text-sm font-medium"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">{t.contact.formName}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">{t.contact.formEmail}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">{t.contact.formSubject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">{t.contact.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-zinc-950 font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.99]"
              >
                <span>{t.contact.formSend}</span>
                <Send size={18} />
              </button>

              {submittedInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm space-y-2.5"
                >
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-xs sm:text-sm">
                    <CheckCircle2 size={17} className="flex-shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Membuka aplikasi email dengan pesan terisi...'
                        : 'Opening email client with pre-filled message...'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'id'
                      ? 'Jika aplikasi email Anda tidak terbuka secara otomatis, Anda bisa mengirimkan langsung melalui opsi berikut:'
                      : 'If your email app did not open automatically, you can send directly using the options below:'}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={submittedInfo.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-accentCyan text-xs font-semibold inline-flex items-center space-x-1.5 border border-zinc-700 hover:border-accentCyan/50 transition-colors"
                    >
                      <span>Buka di Gmail Web</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href={submittedInfo.mailtoUrl}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-slate-200 text-xs font-semibold inline-flex items-center space-x-1.5 border border-zinc-700 transition-colors"
                    >
                      <span>Kirim via Email Client</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
