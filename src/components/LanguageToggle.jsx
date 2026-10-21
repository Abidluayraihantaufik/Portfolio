import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 bg-zinc-900 rounded-full p-1 border border-zinc-700 cursor-pointer"
      aria-label="Toggle Language"
    >
      <span
        className={`text-xs font-bold px-2 py-1 rounded-full transition-colors ${
          lang === 'id' ? 'bg-accentCyan text-zinc-950' : 'text-zinc-400 hover:text-white'
        }`}
      >
        ID
      </span>
      <span
        className={`text-xs font-bold px-2 py-1 rounded-full transition-colors ${
          lang === 'en' ? 'bg-accentIndigo text-white' : 'text-zinc-400 hover:text-white'
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
