
import React from 'react';
import { ArrowRight, Clock, ArrowDown } from 'lucide-react';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    statusOpen: string;
    statusClosed: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day >= 1 && day <= 5) { // Mon-Fri
      return hour >= 8 && hour < 22;
    }
    if (day === 6) { // Sat
      return hour >= 9 && hour < 13.5;
    }
    return false; // Sun
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/449/1920/1080" 
          alt="Gym interior" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        {/* Badge moved down by increasing mt-12 */}
        <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 mt-12">
          <div className={`w-3 h-3 rounded-full ${isOpen() ? 'bg-green-500' : 'bg-red-600'}`}></div>
          <span className="text-xs font-bold tracking-widest text-white uppercase">
            {isOpen() ? content.statusOpen : content.statusClosed}
          </span>
          <Clock size={14} className="text-white/60" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter mb-6 leading-none">
          {content.title.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'text-red-600' : 'text-white'}>
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 font-medium">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black tracking-widest transition-all transform hover:scale-105 rounded-sm flex items-center justify-center space-x-2"
          >
            <span>{content.cta1}</span>
            <ArrowRight size={20} />
          </a>
          <a 
            href="#schedule" 
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-black tracking-widest transition-all rounded-sm uppercase"
          >
            {content.cta2}
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center">
          {/* Static stars - No jumping red dot */}
          <div className="flex items-center space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-white/60 text-sm font-bold tracking-widest uppercase flex flex-col items-center">
            <span>RECOMENDADO POR LOCALES Y</span>
            <span className="relative group flex items-center mt-1">
              TURISTAS
              <div className="absolute -bottom-8 left-0 w-full flex justify-center">
                <ArrowDown 
                  size={20} 
                  className="text-red-600 animate-bounce" 
                />
              </div>
            </span>
            <span className="mt-12">GOOGLE REVIEWS</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
