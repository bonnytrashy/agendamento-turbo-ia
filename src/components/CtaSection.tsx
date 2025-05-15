
import React from 'react';

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-custom-black relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-neonBlue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Não perca mais pacientes por <span className="neon-text">falta de atendimento</span>!
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transforme seu processo de captação com IA e garanta agendamentos automáticos, sem dor de cabeça.
          </p>
          
          <div className="bg-custom-darkBlue bg-opacity-20 p-10 rounded-2xl border border-custom-neonBlue/30 mb-12 card-shadow">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mx-auto mb-4">
                  <div className="text-custom-neonBlue text-xl font-bold">1</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Entre em Contato</h3>
                <p className="text-gray-300 text-sm">
                  Basta preencher o formulário para agendar sua consultoria gratuita
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mx-auto mb-4">
                  <div className="text-custom-neonBlue text-xl font-bold">2</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Diagnóstico</h3>
                <p className="text-gray-300 text-sm">
                  Nossa equipe irá analisar seu processo atual e identificar oportunidades
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mx-auto mb-4">
                  <div className="text-custom-neonBlue text-xl font-bold">3</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Implementação</h3>
                <p className="text-gray-300 text-sm">
                  Rápida implementação da IA com resultados em poucas semanas
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href="#" 
            className="btn-cta inline-block text-xl px-12 py-6 animate-pulse-glow"
            onClick={(e) => {
              e.preventDefault();
              // Aqui você implementaria o formulário ou a lógica de contato
              alert("Obrigado por seu interesse! Em breve entraremos em contato.");
            }}
          >
            COMECE AGORA MESMO
          </a>
          
          <p className="text-gray-400 mt-4">
            Sem compromisso. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
