
import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface ContactProps {
  content: {
    title: string;
    address: string;
    phone: string;
    hours: string;
    followUs: string;
  };
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const whatsappNumber = "34664013521";

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-8 uppercase">
                {content.title}
              </h2>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com/?q=C.+Constitució,+18,+bajo,+03570+Villajoyosa,+Alicante" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-6 group p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200"
                >
                  <div className="bg-black p-4 rounded-xl text-white group-hover:bg-red-600 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-1">DIRECCIÓN</p>
                    <p className="text-xl font-bold tracking-tight">{content.address}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-6 p-4 rounded-2xl border border-transparent">
                  <div className="bg-black p-4 rounded-xl text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-1">LLÁMANOS</p>
                    <a href={`tel:${content.phone}`} className="text-xl font-bold tracking-tight hover:text-red-600 transition-colors">{content.phone}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-4 rounded-2xl border border-transparent">
                  <div className="bg-black p-4 rounded-xl text-white">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-1">WHATSAPP</p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold tracking-tight hover:text-red-600 transition-colors"
                    >
                      CHATEA CON NOSOTROS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-6">{content.followUs}</p>
              <div className="flex space-x-4">
                <a href="#" className="p-4 bg-zinc-100 rounded-xl hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                  <Instagram size={28} />
                </a>
                <a href="#" className="p-4 bg-zinc-100 rounded-xl hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                  <Facebook size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative">
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.31904712869!2d-0.2311499!3d38.5085444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6000d000000000%3A0x0000000000000000!2sC.%20Constituci%C3%B3%2C%2018%2C%20bajo%2C%2003570%20Villajoyosa%2C%20Alicante!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
              className="grayscale contrast-125"
            ></iframe>
            
            <div className="absolute top-6 left-6 right-6 p-6 bg-black text-white rounded-2xl shadow-2xl">
              <p className="text-xs font-black tracking-[0.3em] text-red-600 mb-2 uppercase">VISÍTANOS HOY</p>
              <p className="text-lg font-bold tracking-tight leading-snug">{content.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
