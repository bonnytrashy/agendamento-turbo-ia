
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 circuit-bg min-h-screen flex items-center">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Tech elements */}
      <div className="absolute top-40 left-10 w-32 h-1 bg-custom-neonBlue opacity-20 rounded-full"></div>
      <div className="absolute bottom-40 right-10 w-32 h-1 bg-custom-neonBlue opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-custom-neonBlue rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-custom-neonBlue rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-3/5 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-extrabold leading-tight mb-6">
              Aumente Seus Agendamentos em <span className="neon-text">Até 300%</span> com Inteligência Artificial
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 font-open-sans">
              Transforme sua clínica em uma máquina de captação automática de pacientes, <span className="neon-text">24 horas por dia</span>, sem precisar contratar mais pessoal!
            </h2>
            <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
              COMECE AGORA
            </a>
            <p className="text-gray-400 mt-4 text-sm">Ganhe uma Consultoria Gratuita</p>
          </div>
          
          <div className="md:w-2/5 relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative bg-custom-darkBlue border border-custom-neonBlue/30 animate-float card-shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-4 border-custom-neonBlue/30 animate-spin" style={{animationDuration: '15s'}}></div>
                  <div className="absolute inset-2 rounded-full border-2 border-custom-neonBlue/50 animate-spin" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-custom-neonBlue text-5xl">AI</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-custom-white text-lg font-montserrat font-bold">IA para Clínicas</p>
                <p className="text-custom-neonBlue text-sm">24/7 ATENDIMENTO AUTOMATIZADO</p>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-custom-neonBlue/5 rounded-lg border border-custom-neonBlue/30 flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
              <div className="text-custom-neonBlue text-2xl">24/7</div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-custom-neonBlue/5 rounded-lg border border-custom-neonBlue/30 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <div className="text-custom-neonBlue text-sm">+300%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
