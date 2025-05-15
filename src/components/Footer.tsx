
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 digital-texture opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="mr-2 w-10 h-10 relative">
                <div className="absolute inset-0 bg-custom-neonBlue rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-custom-neonBlue font-bold">DG</div>
              </div>
              <span className="text-custom-white font-montserrat font-bold text-xl">Digital<span className="text-custom-neonBlue">Gambit</span></span>
            </div>
            
            <p className="text-gray-400 mb-6">
              A Digital Gambit é especialista em soluções de IA para clínicas e negócios que desejam automatizar processos de captação e atendimento.
            </p>
            
            <div className="bg-custom-darkBlue bg-opacity-30 p-4 rounded-lg border border-custom-neonBlue/20">
              <h3 className="text-lg font-bold flex items-center mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00a8f3" strokeWidth="2"/>
                  <path d="M12 8V12L14 14" stroke="#00a8f3" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Satisfação Garantida
              </h3>
              <p className="text-sm text-gray-300">
                Se em até 30 dias você não perceber uma transformação real no volume de agendamentos, devolvemos seu investimento.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@digitalgambit.com" className="flex items-center text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-3 text-custom-neonBlue" />
                  contato@digitalgambit.com
                </a>
              </li>
              <li>
                <a href="tel:+551199999999" className="flex items-center text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-3 text-custom-neonBlue" />
                  (11) 9999-9999
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-bold mt-8 mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center text-custom-neonBlue hover:bg-custom-neonBlue/20 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center text-custom-neonBlue hover:bg-custom-neonBlue/20 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center text-custom-neonBlue hover:bg-custom-neonBlue/20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Início</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Benefícios</a></li>
              <li><a href="#differentials" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Diferenciais</a></li>
              <li><a href="#comparison" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Comparação</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Depoimentos</a></li>
              <li><a href="#cta" className="text-gray-300 hover:text-custom-neonBlue transition-colors duration-300">Fale Conosco</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-custom-darkBlue mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Digital Gambit. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-custom-neonBlue transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-custom-neonBlue transition-colors duration-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
