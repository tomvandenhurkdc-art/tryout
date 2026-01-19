
import React, { useState } from 'react';
import { Language } from '../types';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  content: {
    team: string;
    schedule: string;
    pricing: string;
    contact: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentLang, setLang, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { href: '#team', label: content.team },
    { href: '#schedule', label: content.schedule },
    { href: '#pricing', label: content.pricing },
    { href: '#contact', label: content.contact },
  ];

  const languages: Language[] = ['ES', 'EN', 'VA'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // The IMFITNITY logo provided by the user
  const logoUrl = "https://files.oaiusercontent.com/file-K1S2Gshv3GvH5P6NfX8Xf?se=2025-02-21T16%3A36%3A31Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7f79185c-02e6-427f-94a1-799426f4f46f.webp&sig=G9Oayh5A2oO6oP1Y4oP1Y4oP1Y4oP1Y4oP1Y4oP1Y4o%3D";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo Container - Large and prominent */}
          <div 
            className="flex items-center cursor-pointer group py-2"
            onClick={scrollToTop}
          >
            <div className="transition-transform group-hover:scale-105">
              <img 
                src={logoUrl}
                alt="IMFITNITY Premium Fitness Club"
                className="h-24 md:h-28 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-black text-white/70 hover:text-red-600 transition-colors tracking-[0.2em] uppercase"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onMouseEnter={() => setIsLangOpen(true)}
                className="flex items-center space-x-2 text-white/70 hover:text-red-600 transition-colors"
              >
                <Globe size={18} />
                <span className="text-xs font-black tracking-widest">{currentLang}</span>
              </button>
              {isLangOpen && (
                <div 
                  onMouseLeave={() => setIsLangOpen(false)}
                  className="absolute right-0 mt-0 pt-4 w-32 z-50"
                >
                  <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                    {languages.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-[10px] font-black tracking-widest transition-colors ${
                          currentLang === l ? 'text-red-600 bg-white/5' : 'text-white hover:bg-white/5'
                        }`}
                      >
                        {l === 'VA' ? 'VALENCIÀ' : l === 'EN' ? 'ENGLISH' : 'ESPAÑOL'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-32 bg-black z-40 h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="px-6 py-12 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-4xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-tighter"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-12 border-t border-white/10 grid grid-cols-3 gap-4">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setIsMenuOpen(false);
                  }}
                  className={`py-4 text-xs font-black tracking-widest border rounded-xl transition-all ${
                    currentLang === l ? 'border-red-600 text-red-600 bg-red-600/5' : 'border-white/10 text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
