
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-custom-black/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2 w-10 h-10 relative">
            <div className="absolute inset-0 bg-custom-neonBlue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center text-custom-neonBlue font-bold">DG</div>
          </div>
          <span className="text-custom-white font-montserrat font-bold text-xl">Digital<span className="text-custom-neonBlue">Gambit</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 text-custom-neonBlue mr-2" />
            <span className="text-custom-white">contato@digitalgambit.com</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 text-custom-neonBlue mr-2" />
            <span className="text-custom-white">(11) 9999-9999</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 text-custom-neonBlue mr-2" />
            <span className="text-custom-white">24/7</span>
          </div>
        </div>
        
        <a href="#cta" className="hidden md:block btn-cta text-sm py-2 px-4">
          Fale conosco
        </a>
      </div>
    </header>
  );
};

export default Header;
