import React from 'react';
import { CheckCircle, Star, Clock, Users, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';

interface WhyUsProps {
  language: Language;
}

const WhyUs: React.FC<WhyUsProps> = ({ language }) => {
  const currentContent = content[language];

  const icons = [Star, CheckCircle, Clock, Users, Zap];

  // Professional image for why us section
  const whyUsImage = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop";

  return (
    <section id="why-us" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCF9CE] via-[#F5F1E8] to-[#E1CCA5]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#67594B]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1CCA5]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FCF9CE]/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-[#E1CCA5] rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-16 w-2 h-2 bg-[#67594B] rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-[#FCF9CE] rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#FCF9CE]/50 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
           
          </div>
          
          <h2 
            className="text-5xl md:text-7xl font-bold text-[#67594B] mb-8 leading-tight"
            style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
          >
            {currentContent.whyUs.title}
          </h2>
          
          <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#67594B] rounded-full"></div>
            <div className="relative">
              <div className="w-6 h-6 bg-[#67594B] rounded-full"></div>
              <div className="absolute inset-0 w-6 h-6 bg-[#E1CCA5] rounded-full animate-ping"></div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-[#67594B] rounded-full"></div>
          </div>
        </div>

        {/* Single Why Us Box */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50">
            
            {/* Why Us Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Image Section */}
              <div className="relative h-96 lg:h-full overflow-hidden">
                <img
                  src={whyUsImage}
                  alt="Why Choose Us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Multiple Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#67594B]/90 via-[#67594B]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E1CCA5]/10 to-[#E1CCA5]/20"></div>
                
                {/* Animated Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FCF9CE] rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700"></div>
                </div>

                {/* Excellence Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-[#67594B]">
                      {language === 'ar' ? 'التميز' : 'Excellence'}
                    </span>
                  </div>
                </div>

                {/* Professional Icon */}
                <div className="absolute bottom-6 left-6">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 border-2 border-white/20 rounded-2xl group-hover:animate-spin"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCF9CE]/20 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Section Title */}
                  <div className="inline-flex items-center bg-[#FCF9CE]/60 px-6 py-3 rounded-full mb-8">
                    <Sparkles className="w-5 h-5 text-[#67594B] mr-2" />
                    <span className="text-[#67594B] text-lg font-semibold">
                      {language === 'ar' ? 'مميزاتنا' : 'Our Advantages'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-6">
                    {currentContent.whyUs.items.map((item, index) => {
                      const Icon = icons[index];
                      return (
                        <div 
                          key={index} 
                          className="flex items-start space-x-4 rtl:space-x-reverse group/item hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform duration-300"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="relative">
                              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-xl group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-lg">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="absolute inset-0 w-12 h-12 bg-[#67594B]/20 rounded-xl group-hover/item:scale-125 group-hover/item:opacity-0 transition-all duration-300"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="w-8 h-1 bg-gradient-to-r from-[#67594B] to-[#E1CCA5] rounded-full group-hover/item:w-16 transition-all duration-300 mb-3"></div>
                            <p
                              className="text-[#67594B] text-lg leading-relaxed font-medium group-hover/item:text-[#67594B]/80 transition-colors duration-300"
                              style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                            >
                              {item}
                            </p>
                            <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-[#E1CCA5] to-[#67594B] group-hover/item:w-full transition-all duration-500 ease-out"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Decorative Element */}
                  <div className="mt-12 flex items-center justify-between">
                    <div className="w-0 h-1 bg-gradient-to-r from-[#67594B] to-[#E1CCA5] rounded-full group-hover:w-32 transition-all duration-700"></div>
                    
                    <div className="flex items-center space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     
                      {/* <ArrowRight className="w-4 h-4 text-[#67594B] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#67594B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Enhanced AI Technology Section */}
        <div className="relative">
          {/* Section Label */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#67594B]/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-[#67594B]" />
              <span className="text-[#67594B] font-semibold tracking-wider text-sm uppercase">
                {language === 'ar' ? 'تقنياتنا المتطورة' : 'Our Advanced Technology'}
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            {/* Enhanced Image with Multiple Overlays */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                alt="AI Technology"
                className="w-full h-80 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Enhanced Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#67594B]/95 via-[#67594B]/80 to-[#E1CCA5]/85"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#67594B]/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#67594B]/20 to-[#67594B]/60"></div>
              
              {/* Enhanced Animated Particles */}
              <div className="absolute inset-0 hidden md:block">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#FCF9CE]/80 rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/50 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#FCF9CE]/60 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-1500"></div>
              </div>
            </div>

            {/* Enhanced Content - Fixed for Web display */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <div className="text-center text-white w-full max-w-4xl flex flex-col items-center justify-center min-h-full">
                {/* Enhanced Icon with Multiple Animations */}
                <div className="relative inline-block mb-4 md:mb-6 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl border border-white/20">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
                  </div>
                  {/* Multiple Rotating Rings - Fixed positioning */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 border-2 border-white/20 rounded-2xl md:rounded-3xl animate-spin"></div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-18 md:h-18 border border-[#FCF9CE]/30 rounded-xl md:rounded-2xl animate-spin-reverse"></div>
                  {/* Pulsing outer ring - Fixed positioning */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-18 h-18 md:w-24 md:h-24 border border-white/10 rounded-2xl md:rounded-3xl animate-ping"></div>
                </div>

                <h3
                  className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 leading-tight px-2 flex-shrink-0"
                  style={{ 
                    fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  {language === 'ar' ? 'تقنيات الذكاء الاصطناعي المتقدمة' : 'Advanced AI Technology'}
                </h3>

                {/* Enhanced Decorative Lines - Responsive */}
                <div className="flex items-center justify-center space-x-2 md:space-x-4 rtl:space-x-reverse mb-4 md:mb-6 px-4 flex-shrink-0">
                  <div className="w-6 md:w-12 h-1 bg-gradient-to-r from-transparent to-white/60 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-full animate-pulse"></div>
                  <div className="w-8 md:w-16 h-1 bg-gradient-to-r from-white/60 via-[#FCF9CE]/80 to-white/60 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#FCF9CE]/80 rounded-full animate-pulse delay-500"></div>
                  <div className="w-6 md:w-12 h-1 bg-gradient-to-l from-transparent to-white/60 rounded-full"></div>
                </div>

                <p
                  className="text-sm md:text-lg lg:text-xl opacity-95 leading-relaxed max-w-xs md:max-w-2xl mx-auto font-light px-4 mb-4 md:mb-8 flex-shrink-0"
                  style={{ 
                    fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {language === 'ar'
                    ? 'نستخدم أحدث تقنيات الذكاء الاصطناعي والتعلم الآلي لتطوير حلول قانونية مبتكرة وتحسين جودة خدماتنا بشكل مستمر'
                    : 'We leverage cutting-edge AI and machine learning technologies to develop innovative legal solutions and continuously enhance our service quality'
                  }
                </p>
              </div>
            </div>

            {/* Enhanced Corner Decorations - Hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-8 w-16 h-16 border-l-3 border-t-3 border-white/20 rounded-tl-3xl"></div>
            <div className="hidden md:block absolute bottom-8 right-8 w-16 h-16 border-r-3 border-b-3 border-white/20 rounded-br-3xl"></div>
            <div className="hidden md:block absolute top-8 right-8 w-8 h-8 border-2 border-white/30 rounded-full"></div>
            <div className="hidden md:block absolute bottom-8 left-8 w-6 h-6 border-2 border-[#FCF9CE]/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;