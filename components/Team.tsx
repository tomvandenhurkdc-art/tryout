
import React from 'react';
import { User, ShieldCheck, Heart } from 'lucide-react';

interface TeamProps {
  content: {
    title: string;
    subtitle: string;
    jesus: string;
    paco: string;
    description: string;
  };
}

const Team: React.FC<TeamProps> = ({ content }) => {
  return (
    <section id="team" className="py-24 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 uppercase">
            {content.title}
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors shadow-sm group">
              <div className="flex items-start space-x-6">
                <div className="bg-red-600 p-4 rounded-xl text-white shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform shrink-0">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic tracking-tight mb-2 uppercase">{content.jesus}</h3>
                  <p className="text-zinc-600 leading-relaxed font-medium">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-red-600 transition-colors shadow-sm group">
              <div className="flex items-start space-x-6">
                <div className="bg-red-600 p-4 rounded-xl text-white shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic tracking-tight mb-2 uppercase">{content.paco}</h3>
                  <p className="text-zinc-600 leading-relaxed font-medium">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4">
              <div className="p-2 bg-red-100 text-red-600 rounded-full">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-bold tracking-tight text-zinc-800 uppercase text-xs">Cercanía • Autenticidad • Profesionalismo</span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Coaches training" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-3xl font-black italic tracking-tighter uppercase">ESTAMOS PARA AYUDARTE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
