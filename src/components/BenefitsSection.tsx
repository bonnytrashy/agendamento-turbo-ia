
import React from 'react';
import { Clock, DollarSign, BarChart, Users, Database, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-custom-neonBlue" />,
      title: "Atendimento 24/7",
      description: "A IA realiza agendamentos automáticos a qualquer hora do dia ou da noite."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-custom-neonBlue" />,
      title: "Economia de Recursos",
      description: "Reduz em até 80% os custos com equipe de atendimento."
    },
    {
      icon: <BarChart className="w-10 h-10 text-custom-neonBlue" />,
      title: "Otimização de Processos",
      description: "Atendimento rápido e preciso, mesmo com alta demanda."
    },
    {
      icon: <Users className="w-10 h-10 text-custom-neonBlue" />,
      title: "Eficiência de Vendas",
      description: "Transforme leads em pacientes com agendamentos garantidos."
    },
    {
      icon: <Database className="w-10 h-10 text-custom-neonBlue" />,
      title: "Integração Completa",
      description: "Atualiza o CRM em tempo real, sem falhas."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-custom-neonBlue" />,
      title: "Personalização",
      description: "Humanização no atendimento, seguindo protocolos específicos da sua clínica."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-custom-black relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-neonBlue/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-custom-neonBlue/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Por que escolher nossa <span className="neon-text">Inteligência Artificial</span>?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-custom-darkBlue bg-opacity-10 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/50 transition-all duration-300 card-shadow group transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-lg bg-black bg-opacity-30 border border-custom-neonBlue/20 flex items-center justify-center mb-6 group-hover:bg-custom-neonBlue/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-custom-neonBlue transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            SAIBA COMO FUNCIONA
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
