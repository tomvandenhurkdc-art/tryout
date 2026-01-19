
import React from 'react';

interface FooterProps {
  content: {
    address: string;
    phone: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://files.oaiusercontent.com/file-K1S2Gshv3GvH5P6NfX8Xf?se=2025-02-21T16%3A36%3A31Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7f79185c-02e6-427f-94a1-799426f4f46f.webp&sig=G9Oayh5A2oO6oP1Y4oP1Y4oP1Y4oP1Y4oP1Y4oP1Y4o%3D";

  return (
    <footer className="bg-black text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-16 md:space-y-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-8">
              {/* Footer Logo - Large and impactful */}
              <img 
                src={logoUrl}
                alt="IMFITNITY Premium Fitness Club"
                className="h-32 md:h-40 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-white/40 text-xs font-bold tracking-widest leading-loose max-w-xs mx-auto md:mx-0 uppercase">
              Premium Fitness en Villajoyosa. Entrena con los mejores, conviértete en tu mejor versión.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black tracking-[0.3em] uppercase">
            <a href="#team" className="hover:text-red-600 transition-colors">EL ALMA</a>
            <a href="#schedule" className="hover:text-red-600 transition-colors">HORARIOS</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">PRECIOS</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">CONTACTO</a>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] text-white/30 uppercase space-y-6 md:space-y-0">
          <div>© {currentYear} IMFITNITY PREMIUM FITNESS CLUB. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
