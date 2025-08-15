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
            <Sparkles className="w-5 h-5 text-[#67594B]" />
            <span className="text-[#67594B] font-semibold tracking-wider text-sm uppercase">
              {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
            </span>
            <Sparkles className="w-5 h-5 text-[#67594B]" />
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

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نتميز بالخبرة الواسعة والتقنيات المتطورة لنقدم لك أفضل الحلول القانونية'
              : 'We excel with extensive experience and advanced technologies to provide you the best legal solutions'
            }
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {currentContent.whyUs.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm border border-[#FCF9CE]/50 rounded-2xl p-8 hover:bg-[#FCF9CE]/30 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl shadow-lg"
              >
                {/* Card Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCF9CE]/20 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E1CCA5]/10 rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                <div className="relative z-10 flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 w-16 h-16 bg-[#67594B]/20 rounded-2xl group-hover:scale-125 group-hover:opacity-0 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#67594B] to-[#E1CCA5] rounded-full group-hover:w-20 transition-all duration-500"></div>
                      <ArrowRight className="w-5 h-5 text-[#67594B] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                    
                    <p
                      className="text-[#67594B] text-lg leading-relaxed group-hover:text-[#67594B] transition-colors duration-300"
                      style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                    >
                      {item}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-[#E1CCA5] to-[#67594B] group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              </div>
            );
          })}
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
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Multiple Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#67594B]/90 via-[#67594B]/70 to-[#E1CCA5]/90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#67594B]/50 via-transparent to-transparent"></div>
              
              {/* Animated Particles */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FCF9CE] rounded-full animate-bounce delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white max-w-4xl">
                {/* Icon with Animation */}
                <div className="relative inline-block mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 mx-auto">
                    <Zap className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-white/30 rounded-2xl animate-spin mx-auto"></div>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                >
                  {language === 'ar' ? 'تقنيات الذكاء الاصطناعي المتقدمة' : 'Advanced AI Technology'}
                </h3>

                <div className="w-24 h-1 bg-white/60 mx-auto mb-8 rounded-full"></div>

                <p
                  className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto"
                  style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                >
                  {language === 'ar'
                    ? 'نستخدم أحدث تقنيات الذكاء الاصطناعي لتحسين جودة خدماتنا وزيادة الكفاءة'
                    : 'We leverage cutting-edge AI technology to enhance service quality and efficiency'
                  }
                </p>

                {/* Call to Action */}
                <div className="mt-10">
                  <button className="group/btn bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#67594B] transition-all duration-500 transform hover:scale-105 shadow-lg border border-white/30">
                    <span className="flex items-center space-x-3 rtl:space-x-reverse">
                      <span>{language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-white/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-white/30 rounded-br-2xl"></div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '15+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
            { number: '500+', label: language === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
            { number: '99%', label: language === 'ar' ? 'معدل نجاح' : 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#FCF9CE]/30 rounded-2xl p-8 hover:bg-[#FCF9CE]/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#67594B] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#67594B] to-[#E1CCA5] mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;