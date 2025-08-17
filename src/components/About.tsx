import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const currentContent = content[language];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCF9CE] via-[#F5F1E8] to-[#E1CCA5]">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#67594B]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E1CCA5]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FCF9CE]/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            {/* <span className="bg-gradient-to-r from-[#67594B] to-[#E1CCA5] bg-clip-text text-transparent font-bold text-lg tracking-wider">
              {language === 'ar' ? 'تعرف علينا' : 'ABOUT US'}
            </span> */}
          </div>
          <h2 
            className="text-5xl md:text-7xl font-bold text-[#67594B] mb-6 leading-tight"
            style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
          >
            {currentContent.about.title}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#67594B] rounded-full"></div>
            <div className="w-4 h-4 bg-[#67594B] rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#67594B] rounded-full"></div>
          </div>
          {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نحن فريق من المحترفين ذوي الخبرة في مجال القانون والاستشارات'
              : 'We are a team of experienced professionals in law and consulting'
            }
          </p> */}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Enhanced Image Section */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional accounting team"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#67594B]/90 via-transparent to-transparent"></div>
              
              {/* Enhanced Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3">
                    <Award className="w-6 h-6 text-[#67594B]" />
                    <span className="font-bold text-[#67594B] text-lg">
                      {language === 'ar' ? 'مكتب مرخص ومعتمد' : 'Licensed & Certified Office'}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {language === 'ar' ? 'خبرة مهنية موثوقة' : 'Trusted Professional Expertise'}
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-bold">
                    {language === 'ar' ? 'ممتاز' : 'Premium'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
              {/* <h3 
                className="text-2xl font-bold text-[#67594B] mb-6"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h3> */}
              <p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                {currentContent.about.description}
              </p>

              {/* Enhanced Stats Grid */}
             
            </div>

           
           
          </div>
        </div>

          
       
      </div>
    </section>
  );
};

export default About;