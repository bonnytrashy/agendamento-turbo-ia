
import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-custom-black relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-darkBlue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-darkBlue to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Por que sua clínica está <span className="neon-text">perdendo pacientes?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Muitas clínicas enfrentam o mesmo desafio: investir pesado em marketing e, no final, ter poucos resultados concretos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-custom-black bg-opacity-80 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/50 transition-all duration-300 card-shadow group">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-500 text-lg font-bold">✕</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold group-hover:text-custom-neonBlue transition-colors duration-300">
                Você já passou por várias agências de marketing e <span className="neon-text">nada mudou</span>?
              </h3>
            </div>
            <p className="text-gray-400 pl-12">
              Agências prometem leads, mas não entendem a conversão específica para clínicas.
            </p>
          </div>
          
          <div className="bg-custom-black bg-opacity-80 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/50 transition-all duration-300 card-shadow group">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-500 text-lg font-bold">✕</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold group-hover:text-custom-neonBlue transition-colors duration-300">
                Seu gestor de tráfego prometeu resultados que nunca chegaram?
              </h3>
            </div>
            <p className="text-gray-400 pl-12">
              O problema não está na captação, mas na falta de um processo eficiente de conversão.
            </p>
          </div>
          
          <div className="bg-custom-black bg-opacity-80 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/50 transition-all duration-300 card-shadow group">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-500 text-lg font-bold">✕</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold group-hover:text-custom-neonBlue transition-colors duration-300">
                Seus atendimentos fora do horário comercial são praticamente <span className="neon-text">nulos</span>?
              </h3>
            </div>
            <p className="text-gray-400 pl-12">
              Enquanto você dorme, seus concorrentes estão captando clientes com sistemas automáticos.
            </p>
          </div>
          
          <div className="bg-custom-black bg-opacity-80 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/50 transition-all duration-300 card-shadow group">
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-red-500 text-lg font-bold">✕</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold group-hover:text-custom-neonBlue transition-colors duration-300">
                Seu time não consegue dar conta do volume de leads que chegam?
              </h3>
            </div>
            <p className="text-gray-400 pl-12">
              Leads chegam, mas a demora no atendimento afasta potenciais pacientes.
            </p>
          </div>
        </div>
        
        <div className="bg-custom-darkBlue bg-opacity-30 p-8 rounded-xl border border-custom-darkBlue mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-custom-neonBlue opacity-5 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Frustração Comum:
          </h3>
          <p className="text-xl text-gray-200">
            Os pacientes entram em contato <span className="neon-text">fora do expediente</span> e não são atendidos. Ou pior: o lead até chega, mas ninguém qualifica para fechar o agendamento!
          </p>
        </div>
        
        <div className="text-center">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            QUERO UMA SOLUÇÃO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
