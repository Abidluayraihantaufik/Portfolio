import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.certificate, href: '#certificate' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleDownloadCV = () => {
    const cvUrl = lang === 'id' ? '/assets/cv-id.pdf' : '/assets/cv-en.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="text-2xl font-bold text-slate-50 tracking-tighter">
                <span className="text-gradient">ALR</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-300 hover:text-accentCyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 border-l border-zinc-800 pl-4">
                <LanguageToggle />
                <button
                  onClick={handleDownloadCV}
                  className="bg-zinc-800 hover:bg-zinc-700 text-slate-50 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-zinc-700 hover:border-accentCyan/50"
                >
                  {t.nav.cv}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-slate-300 hover:text-white p-2"
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        handleDownloadCV={handleDownloadCV}
      />
    </>
  );
};

export default Navbar;
