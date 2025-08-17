import React from 'react';
import { FileText, Calculator, TrendingUp, Shield, Settings, ArrowRight, Star, Sparkles, CheckCircle } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';

interface ServicesProps {
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const currentContent = content[language];

  // Updated services list
  const services = {
    en: [
      'External auditing and issuing reports',
      'Internal audit and process improvement',
      'Bookkeeping and records management',
      'Preparing periodic financial statements',
      'Financial and tax advisory'
    ],
    ar: [
      'التدقيق الخارجي وإصدار التقارير',
      'التدقيق الداخلي وتحسين الإجراءات',
      'إمساك الدفاتر وتنظيم السجلات',
      'إعداد التقارير المالية الدورية',
      'الاستشارات المالية والضريبية'
    ]
  };

  // Single professional image for the services
  const serviceImage = "https://plus.unsplash.com/premium_photo-1661377104302-2d581083e9b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCF9CE] via-[#F5F1E8] to-[#E1CCA5]"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#67594B]/5 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#E1CCA5]/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-16 w-4 h-4 bg-[#67594B]/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-[#E1CCA5] rounded-full animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-7xl font-bold text-[#67594B] mb-8 leading-tight"
            style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
          >
            {currentContent.services.title}
          </h2>
          
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#67594B] rounded-full"></div>
            <div className="relative">
              <div className="w-6 h-6 bg-[#67594B] rounded-full"></div>
              <div className="absolute inset-0 w-6 h-6 bg-white rounded-full animate-ping"></div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-[#67594B] rounded-full"></div>
          </div>
        </div>

        {/* Single Services Box */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50">
            
            {/* Services Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Image Section */}
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img
                  src={serviceImage}
                  alt="Financial Services"
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

                {/* Premium Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold text-[#67594B]">
                      {language === 'ar' ? 'خدمات متميزة' : 'Premium Services'}
                    </span>
                  </div>
                </div>

                {/* Professional Icon */}
                <div className="absolute bottom-6 left-6">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Calculator className="w-8 h-8 text-white" />
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
                      {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
                    </span>
                  </div>

                  {/* Services List */}
                  <div className="space-y-6">
                    {services[language].map((service, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 rtl:space-x-reverse group/item hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <CheckCircle className="w-6 h-6 text-[#67594B] group-hover/item:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 w-6 h-6 bg-[#67594B]/20 rounded-full group-hover/item:animate-ping"></div>
                          </div>
                        </div>
                        <p
                          className="text-[#67594B] text-lg leading-relaxed font-medium group-hover/item:text-[#67594B]/80 transition-colors duration-300"
                          style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                        >
                          {service}
                        </p>
                      </div>
                    ))}
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
      </div>
    </section>
  );
};

export default Services;