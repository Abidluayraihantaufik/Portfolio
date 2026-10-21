import React from 'react';
import { X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const MobileDrawer = ({ isOpen, onClose, navLinks, handleDownloadCV }) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-zinc-950 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <LanguageToggle />
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-2">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg font-medium text-slate-300 hover:text-accentCyan transition-colors"
                  onClick={onClose}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-zinc-800">
          <button
            onClick={() => {
              handleDownloadCV();
              onClose();
            }}
            className="w-full flex items-center justify-center bg-gradient-to-r from-accentCyan to-accentIndigo text-white px-4 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 shadow-lg shadow-accentCyan/20"
          >
            <span>{t.nav.cv}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
