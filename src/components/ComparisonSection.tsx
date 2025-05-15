
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Atendimento",
      withoutAI: "Limitado ao horário comercial",
      withAI: "24 horas por dia, 7 dias por semana"
    },
    {
      feature: "Respostas a leads",
      withoutAI: "Demora para responder",
      withAI: "Respostas instantâneas e personalizadas"
    },
    {
      feature: "Captação fora do expediente",
      withoutAI: "Perda de leads",
      withAI: "Captação contínua, mesmo fora do horário"
    },
    {
      feature: "Custo operacional",
      withoutAI: "Alto custo com equipe humana",
      withAI: "Redução de custos com salários e benefícios"
    },
    {
      feature: "Escalabilidade",
      withoutAI: "Dificuldade em escalar sem aumentar equipe",
      withAI: "Escalabilidade ilimitada sem contratação"
    },
    {
      feature: "Scripts de atendimento",
      withoutAI: "Dependência de scripts manuais",
      withAI: "IA que aprende e evolui com cada interação"
    },
    {
      feature: "Previsibilidade",
      withoutAI: "Baixa previsibilidade de resultados",
      withAI: "Dados precisos e previsibilidade financeira"
    },
    {
      feature: "Fluxo do processo",
      withoutAI: "Processo engessado e lento",
      withAI: "Experiência fluida e otimizada para conversão"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-custom-darkBlue relative overflow-hidden">
      {/* Circuit background effect */}
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern animate-circuit-flow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Com IA vs. Sem IA – <span className="neon-text">Por que a mudança é inevitável?</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black bg-opacity-50 rounded-2xl overflow-hidden border border-custom-darkBlue card-shadow">
          {/* Table header */}
          <div className="grid grid-cols-3 text-lg font-bold">
            <div className="p-6 border-b border-r border-custom-darkBlue">
              Características
            </div>
            <div className="p-6 border-b border-r border-custom-darkBlue bg-red-900/10 text-center">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-2">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                Sem IA
              </div>
            </div>
            <div className="p-6 border-b border-custom-darkBlue bg-custom-neonBlue/10 text-center">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-custom-neonBlue/20 flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-custom-neonBlue" />
                </div>
                Com IA
              </div>
            </div>
          </div>
          
          {/* Table body */}
          {comparisonData.map((item, index) => (
            <div key={index} className="grid grid-cols-3 border-b border-custom-darkBlue last:border-b-0 hover:bg-white/5 transition-colors duration-200">
              <div className="p-4 sm:p-6 border-r border-custom-darkBlue font-bold">
                {item.feature}
              </div>
              <div className="p-4 sm:p-6 border-r border-custom-darkBlue text-gray-400 text-center">
                {item.withoutAI}
              </div>
              <div className="p-4 sm:p-6 text-custom-neonBlue text-center">
                {item.withAI}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            COMECE AGORA MESMO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
