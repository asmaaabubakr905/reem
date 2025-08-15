import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';
import thumbnailImg from '../assets/thumbnail_IMG-20250725-WA0058.jpg';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const currentContent = content[language];

  const handleWhatsApp = () => {
    window.open(currentContent.contact.whatsappLink, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${currentContent.contact.email}`;
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#FCF9CE] to-[#E1CCA5] flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Brown Overlay */}
      <div className="absolute inset-0">
        <img 
          src={thumbnailImg}
          alt="Professional accounting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#67594B]/70 via-[#8B7355]/60 to-[#A0522D]/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
          </div>

          {/* Content Container with Semi-transparent Background */}
          <div className="bg-white/25 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Title */}
            <h1 
              className="text-4xl md:text-6xl font-bold text-[#67594B] mb-6 leading-tight"
              style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
            >
              {currentContent.hero.title}
            </h1>

            {/* Slogan */}
            <p 
              className="text-xl md:text-2xl text-[#67594B]/90 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold"
              style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
            >
              {currentContent.hero.slogan}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleWhatsApp}
                className="group bg-[#67594B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E1CCA5] hover:text-[#67594B] transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 rtl:space-x-reverse border-2 border-[#67594B]"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>{currentContent.hero.callUs}</span>
              </button>

              <button
                onClick={handleEmail}
                className="group bg-white text-[#67594B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#67594B] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-[#67594B] flex items-center space-x-3 rtl:space-x-reverse"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                <span>{currentContent.hero.sendEmail}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#67594B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#67594B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;