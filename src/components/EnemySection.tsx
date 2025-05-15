
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const EnemySection = () => {
  return (
    <section id="enemy" className="py-20 bg-gradient-to-b from-custom-black to-red-950/10 relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Border decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-red-900/20 border border-red-900/50 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="section-title">
              Esqueça as Agências que <span className="text-red-500">Só Prometem Leads</span>!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chega de gastar dinheiro com agências de tráfego que só trazem números vazios. A realidade é que a maioria delas não entende o processo de conversão e agendamento de consultas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-red-900/30 relative group transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-red-500 text-lg font-bold">✕</span>
                </div>
                <h3 className="text-xl font-bold text-red-100">Marketing de Tráfego?</h3>
              </div>
              <p className="text-gray-400 pl-2">
                Gera leads, mas não agendamentos. Você acaba pagando por contatos que nunca se convertem.
              </p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-red-900/30 relative group transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-red-500 text-lg font-bold">✕</span>
                </div>
                <h3 className="text-xl font-bold text-red-100">Pessoas no Atendimento?</h3>
              </div>
              <p className="text-gray-400 pl-2">
                Limitam o volume de consultas, especialmente fora do horário comercial e nos fins de semana.
              </p>
            </div>
            
            <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-red-900/30 relative group transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-red-500 text-lg font-bold">✕</span>
                </div>
                <h3 className="text-xl font-bold text-red-100">Modelos Tradicionais?</h3>
              </div>
              <p className="text-gray-400 pl-2">
                Custo elevado, pouco retorno. Você investe muito e vê resultados mínimos para seu negócio.
              </p>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-custom-neonBlue/30 text-center card-shadow">
            <h3 className="text-2xl font-bold mb-4">
              Nosso diferencial? <span className="neon-text">Focamos no que realmente importa</span>
            </h3>
            <p className="text-xl text-gray-200">
              Agendamentos e pacientes na sua clínica!
            </p>
            
            <div className="mt-8">
              <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
                DESCUBRA O NOVO MODELO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnemySection;
