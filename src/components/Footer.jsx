import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col sm:flex-row items-center justify-center">
        <p className="text-sm text-slate-500 font-medium text-center">
          {t.footer.copyright}
        </p>
        
        <button
          onClick={scrollToTop}
          className="mt-4 sm:mt-0 sm:absolute sm:right-6 lg:right-8 p-3 bg-zinc-900 border border-zinc-800 rounded-full text-slate-400 hover:text-white hover:border-zinc-600 transition-all hover:-translate-y-1 shadow-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
