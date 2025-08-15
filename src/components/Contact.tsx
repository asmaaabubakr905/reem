import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Building2, Clock, Globe } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { content } from '../data/content';
import officeImg from '../assets/IMG_1294.png';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const currentContent = content[language];

  const handleWhatsApp = () => {
    window.open(currentContent.contact.whatsappLink, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${currentContent.contact.email}`;
  };

  const handlePhone = () => {
    window.location.href = `tel:${currentContent.contact.mobile}`;
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCF9CE] via-[#F5F1E8] to-[#E1CCA5]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#67594B]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1CCA5]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FCF9CE]/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#67594B] to-[#E1CCA5] bg-clip-text text-transparent font-bold text-lg tracking-wider">
              {language === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}
            </span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-bold text-[#67594B] mb-6 leading-tight"
            style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
          >
            {currentContent.contact.title}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#67594B] rounded-full"></div>
            <div className="w-4 h-4 bg-[#67594B] rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#67594B] rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'نحن هنا لمساعدتك في جميع احتياجاتك القانونية والاستشارية'
              : 'We are here to assist you with all your legal and advisory needs'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="xl:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="flex items-start space-x-6 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#67594B] to-[#E1CCA5] rounded-2xl shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FCF9CE] rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-[#67594B] mb-3 group-hover:text-[#E1CCA5] transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {language === 'ar' ? 'العنوان' : 'Address'}
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {currentContent.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 cursor-pointer" onClick={handlePhone}>
              <div className="flex items-start space-x-6 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-[#67594B] mb-3 group-hover:text-[#25D366] transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {language === 'ar' ? 'الجوال' : 'Mobile'}
                  </h3>
                  <p 
                    className="text-gray-700 font-semibold text-lg group-hover:text-[#25D366] transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {currentContent.contact.mobile}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 cursor-pointer" onClick={handleEmail}>
              <div className="flex items-start space-x-6 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-bold text-[#67594B] mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </h3>
                  <p 
                    className="text-gray-700 font-medium break-all group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {currentContent.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <button
                onClick={handleWhatsApp}
                className="group relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-4 rtl:space-x-reverse"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <MessageCircle className="w-6 h-6 relative z-10" />
                <span className="relative z-10 text-lg">{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
              </button>

              <button
                onClick={handleEmail}
                className="group relative overflow-hidden bg-gradient-to-r from-[#67594B] to-[#E1CCA5] text-white px-8 py-4 rounded-2xl font-bold hover:from-[#E1CCA5] hover:to-[#67594B] transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-4 rtl:space-x-reverse"
                style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Mail className="w-6 h-6 relative z-10" />
                <span className="relative z-10 text-lg">{language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Email'}</span>
              </button>
            </div>
          </div>

          {/* Office Image and Map */}
          <div className="xl:col-span-2 space-y-8">
            {/* Enhanced Office Image */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-500">
              <div className="p-8 pb-6">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-6">
                  <Building2 className="w-6 h-6 text-[#67594B]" />
                  <h3 
                    className="text-2xl font-bold text-[#67594B] text-center"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {language === 'ar' ? 'مكتبنا الرئيسي' : 'Our Main Office'}
                  </h3>
                </div>
              </div>
              
              <div className="relative px-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={officeImg}
                    alt="Marina Twin Towers Office"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#67594B]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-2">
                        {language === 'ar' ? 'مارينا توين تاورز' : 'Marina Twin Towers'}
                      </h4>
                      <p className="text-white/90 flex items-center space-x-2 rtl:space-x-reverse">
                        <MapPin className="w-4 h-4" />
                        <span>{language === 'ar' ? 'لوسيل، قطر' : 'Lusail, Qatar'}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Info Cards */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#67594B]">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {language === 'ar' ? '٩ص - ٦م' : '9 AM - 6 PM'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 pt-6">
                <div className="bg-gradient-to-r from-[#FCF9CE] to-[#E1CCA5] rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#67594B]">15+</div>
                      <div className="text-sm text-[#67594B]/70">
                        {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#67594B]">500+</div>
                      <div className="text-sm text-[#67594B]/70">
                        {language === 'ar' ? 'عميل راضٍ' : 'Happy Clients'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Google Maps */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-500">
              <div className="p-8 pb-6">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-6">
                  <Globe className="w-6 h-6 text-[#67594B]" />
                  <h3 
                    className="text-2xl font-bold text-[#67594B] text-center"
                    style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
                  >
                    {language === 'ar' ? 'موقعنا على الخريطة' : 'Find Us on Map'}
                  </h3>
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6234936583424!2d51.5074!3d25.4097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d8f1df5b0000%3A0x0!2sLusail%20City%2C%20Qatar!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marina Twin Towers Location"
                    className="transition-all duration-500 group-hover:saturate-150"
                  />
                  
                  {/* Map Overlay Button */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg cursor-pointer hover:bg-white transition-colors">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#67594B]">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {language === 'ar' ? 'اعرض في خرائط جوجل' : 'View in Google Maps'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <h4 
              className="text-3xl font-bold text-[#67594B] mb-4"
              style={{ fontFamily: language === 'ar' ? 'GE Snd Book, Arial' : 'Acumin Variable Concept, Arial' }}
            >
              {language === 'ar' ? 'مستعدون لمساعدتك' : 'Ready to Help You'}
            </h4>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'فريقنا من الخبراء جاهز لتقديم أفضل الحلول القانونية والاستشارية لك'
                : 'Our team of experts is ready to provide you with the best legal and advisory solutions'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePhone}
                className="bg-gradient-to-r from-[#67594B] to-[#E1CCA5] text-white px-8 py-4 rounded-2xl font-bold hover:from-[#E1CCA5] hover:to-[#67594B] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-white text-[#67594B] px-8 py-4 rounded-2xl font-bold hover:bg-[#67594B] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-[#67594B]"
              >
                {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;