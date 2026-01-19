
import React, { useState, useEffect, useMemo } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ES');
  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  // Handle smooth scroll to anchor
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-red-600 selection:text-white">
      <Header currentLang={lang} setLang={setLang} content={t.nav} />
      
      <main>
        <Hero content={t.hero} />
        <Team content={t.team} />
        <Schedule content={t.schedule} />
        <Pricing content={t.pricing} />
        <Contact content={t.contact} />
      </main>

      <Footer content={t.contact} />
    </div>
  );
};

export default App;
