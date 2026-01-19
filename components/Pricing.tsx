
import React from 'react';
import { Check, Info } from 'lucide-react';

interface PricingProps {
  content: {
    title: string;
    subtitle: string;
    options: {
      monthly: { name: string; price: string; features: string[] };
      daily: { name: string; price: string; features: string[] };
      voucher: { name: string; price: string; features: string[] };
    };
    cta: string;
  };
}

const Pricing: React.FC<PricingProps> = ({ content }) => {
  const plans = [
    { ...content.options.daily, highlighted: false },
    { ...content.options.monthly, highlighted: true },
    { ...content.options.voucher, highlighted: false },
  ];

  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase text-white">
            {content.title}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-bold tracking-widest text-sm uppercase">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ${
                plan.highlighted 
                ? 'bg-zinc-800/20 border-red-600/50 shadow-2xl shadow-red-600/10' 
                : 'bg-zinc-900/40 border-white/5'
              }`}
            >
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-sm font-black tracking-[0.3em] text-white/50 uppercase mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center md:justify-start text-white">
                  <span className="text-7xl font-black italic tracking-tighter">{plan.price}</span>
                  {plan.name.toLowerCase().includes('ensual') && (
                    <span className="text-white/30 ml-3 font-black uppercase text-sm tracking-widest">/ MES</span>
                  )}
                </div>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-red-600/30 via-red-600/5 to-transparent mb-10"></div>

              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-4 text-white/70">
                    <div className="mt-1 bg-red-600/20 p-1 rounded-full shrink-0">
                      <Check size={14} className="text-red-600" strokeWidth={3} />
                    </div>
                    <span className="text-xs font-black tracking-widest uppercase leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto text-center pt-6 border-t border-white/5">
                <span className="text-red-600 font-black tracking-widest text-xs uppercase flex items-center justify-center space-x-2">
                  <Info size={14} />
                  <span>{content.cta}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="bg-zinc-900/80 backdrop-blur-md px-10 py-6 rounded-3xl border border-white/5 text-center">
             <p className="text-white/80 text-xs font-black tracking-[0.2em] uppercase mb-1">VISITA NUESTRAS INSTALACIONES</p>
             <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase">PAGO DIRECTO EN EL CENTRO • SIN PAGOS ONLINE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
