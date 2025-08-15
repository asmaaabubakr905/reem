import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <WhyUs language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;