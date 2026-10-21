import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

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

            <div className="pt-4 flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 glass-panel rounded-xl hover:text-accentCyan hover:border-accentCyan/50 transition-all text-slate-300">
                <Globe size={24} />
              </a>
              {/* Add Github or other socials here if needed */}
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
