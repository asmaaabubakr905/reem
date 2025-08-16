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
                className="text-[#4A3C2C] hover:text-[#8B5A2B] p-2 rounded-lg hover:bg-[#FCF9CE]/50 transition-all duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced Design */}
        {isOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full">
            <div 
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              style={{
                animation: 'slideDown 0.3s ease-out forwards',
                transformOrigin: 'top'
              }}
            >
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-[#8B5A2B] via-[#67594B] to-[#8B5A2B]"></div>
              
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="group relative w-full text-left rtl:text-right px-4 py-4 rounded-xl font-semibold text-[#4A3C2C] hover:text-[#8B5A2B] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FCF9CE]/50 hover:to-[#FCF9CE]/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    style={{ 
                      fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial',
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.4s ease-out forwards'
                    }}
                  >
                    {/* Hover indicator */}
                    <div className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-[#8B5A2B] group-hover:w-6 transition-all duration-300 rounded-full"></div>
                    
                    {/* Text with subtle glow effect on hover */}
                    <span className="relative z-10 group-hover:drop-shadow-sm">
                      {currentContent.navbar[item.key as keyof typeof currentContent.navbar]}
                    </span>
                  </button>
                ))}
                
                {/* Decorative bottom element */}
                <div className="pt-4 mt-4 border-t border-[#8B5A2B]/10">
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#8B5A2B]/30 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;