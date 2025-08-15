import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';
import logoImg from '../assets/logo2.png';

interface NavbarProps {
  language: Language;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentContent = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { key: 'home', sectionId: 'hero' },
    { key: 'about', sectionId: 'about' },
    { key: 'services', sectionId: 'services' },
    { key: 'whyUs', sectionId: 'why-us' },
    { key: 'contact', sectionId: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoImg} 
              alt="Company Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 rtl:space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-[#4A3C2C] hover:text-[#8B5A2B] px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-[#FCF9CE]/80"
                  style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                >
                  {currentContent.navbar[item.key as keyof typeof currentContent.navbar]}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="bg-[#67594B] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#8B5A2B] transition-all duration-200 shadow-md"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#4A3C2C] hover:text-[#8B5A2B] p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block px-3 py-2 rounded-md text-base font-semibold text-[#4A3C2C] hover:text-[#8B5A2B] hover:bg-[#FCF9CE] w-full text-left rtl:text-right transition-colors duration-200"
                  style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                >
                  {currentContent.navbar[item.key as keyof typeof currentContent.navbar]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;