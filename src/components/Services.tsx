import React from 'react';
import { FileText, Calculator, TrendingUp, Shield, Settings, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';

interface ServicesProps {
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const currentContent = content[language];

  const icons = [FileText, Calculator, TrendingUp, Shield, Settings];
  
  const serviceImages = [
    "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/6863329/pexels-photo-6863329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  ];

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
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#67594B]" />
            <span className="text-[#67594B] font-bold tracking-wider text-sm uppercase">
              {language === 'ar' ? 'خدماتنا المميزة' : 'Our Premium Services'}
            </span>
            <Sparkles className="w-5 h-5 text-[#67594B]" />
          </div>
          
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

          <p className="text-[#67594B]/70 text-xl max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات القانونية والاستشارية المتخصصة'
              : 'We provide a comprehensive range of specialized legal and advisory services'
            }
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentContent.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-white/50"
              >
                {/* Service Number Badge */}
                <div className="absolute -top-3 -right-3 z-20 w-12 h-12 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Enhanced Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={serviceImages[index]}
                    alt={`Service ${index + 1}`}
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

                  {/* Icon Container with Enhanced Design */}
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Rotating Ring */}
                      <div className="absolute inset-0 w-16 h-16 border-2 border-white/20 rounded-2xl group-hover:animate-spin"></div>
                    </div>
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-[#67594B]">Premium</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="relative p-8">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FCF9CE]/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    {/* Service Category Tag */}
                    <div className="inline-flex items-center bg-[#FCF9CE]/60 px-4 py-2 rounded-full mb-4">
                      <span className="text-[#67594B] text-sm font-semibold">
                        {language === 'ar' ? 'خدمة متخصصة' : 'Specialized Service'}
                      </span>
                    </div>

                    <p
                      className="text-[#67594B] text-lg leading-relaxed mb-6"
                      style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                    >
                      {service}
                    </p>

                    {/* Enhanced Bottom Elements */}
                    <div className="flex items-center justify-between">
                      <div className="w-0 h-1 bg-gradient-to-r from-[#67594B] to-[#E1CCA5] rounded-full group-hover:w-20 transition-all duration-700"></div>
                      
                     
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#67594B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

      
            
           
            
           
          </div>
       
      
    </section>
  );
};

export default Services;