
import React from 'react';

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="py-20 bg-custom-black relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Por que nossa IA é <span className="neon-text">diferente</span> de qualquer outra solução?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-custom-black border border-custom-darkBlue rounded-2xl overflow-hidden group hover:border-custom-neonBlue/50 transition-all duration-500 card-shadow">
            <div className="h-2 bg-custom-neonBlue"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center mb-6 text-custom-neonBlue text-2xl group-hover:bg-custom-neonBlue/20 transition-all duration-300">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-custom-neonBlue transition-colors duration-300">
                Captação <span className="neon-text">Inteligente</span> com IA
              </h3>
              <p className="text-gray-300">
                Atrai leads qualificados com estratégias personalizadas, entendendo o perfil do paciente desde o primeiro contato.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Aprendizado Contínuo
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Personalização
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Segmentação
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-custom-black border border-custom-darkBlue rounded-2xl overflow-hidden group hover:border-custom-neonBlue/50 transition-all duration-500 card-shadow">
            <div className="h-2 bg-custom-neonBlue"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center mb-6 text-custom-neonBlue text-2xl group-hover:bg-custom-neonBlue/20 transition-all duration-300">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-custom-neonBlue transition-colors duration-300">
                SDR/CRC com IA <span className="neon-text">Humanizada</span>
              </h3>
              <p className="text-gray-300">
                A IA atua como SDR ou CRC, realizando o atendimento inicial, qualificando os leads e marcando consultas automaticamente, sem scripts repetitivos.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Toque Humano
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Qualificação
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Disponibilidade 24/7
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-custom-black border border-custom-darkBlue rounded-2xl overflow-hidden group hover:border-custom-neonBlue/50 transition-all duration-500 card-shadow">
            <div className="h-2 bg-custom-neonBlue"></div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center mb-6 text-custom-neonBlue text-2xl group-hover:bg-custom-neonBlue/20 transition-all duration-300">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-custom-neonBlue transition-colors duration-300">
                <span className="neon-text">Automação</span> do CRM
              </h3>
              <p className="text-gray-300">
                Registra automaticamente todos os dados no CRM, facilitando o acompanhamento e a análise dos resultados.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Integração Total
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Zero Perda
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 text-custom-neonBlue">
                  Dashboards em Tempo Real
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            VEJA COMO FUNCIONA NA PRÁTICA
          </a>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
