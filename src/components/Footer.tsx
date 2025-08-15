import React from 'react';
import { Language } from '../hooks/useLanguage';
import logoImg from '../assets/logo2.png';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const fontStyle = {
    fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial',
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#8B7355] to-[#67594B] py-8 px-4 text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo and Name */}
        <div className="flex flex-col items-center">
          <img
            src={logoImg}
            alt="Company Logo"
            className="w-16 h-16 object-contain mb-3 rounded-lg shadow-md bg-white/10"
          />
          <h3 className="text-2xl font-bold mb-1" style={fontStyle}>
            {language === 'ar' ? 'ريم حسين العوذلي' : 'Reem Hussein Al-Oudhali'}
          </h3>
          <p className="text-base opacity-90 mb-2" style={fontStyle}>
            {language === 'ar' ? 'للتدقيق والمحاسبة' : 'for Auditing & Accounting'}
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-row space-x-6 rtl:space-x-reverse justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#E1CCA5] transition-colors duration-200 text-base font-medium"
            style={fontStyle}
          >
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </button>
          <button
            className="hover:text-[#E1CCA5] transition-colors duration-200 text-base font-medium"
            style={fontStyle}
          >
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20"></div>

        {/* Copyright */}
        <div className="text-center mt-2">
          <p className="text-xs opacity-70" style={fontStyle}>
            {language === 'ar'
              ? 'حقوق النشر © 2025 – ريم حسين العوذلي للتدقيق والمحاسبة.'
              : 'Copyright © 2025 – Reem Hussein Al-Oudhali for Auditing & Accounting.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;