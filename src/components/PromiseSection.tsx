
import React from 'react';
import { Clock, MessageCircle, Calendar } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section id="promise" className="py-20 bg-custom-darkBlue relative overflow-hidden">
      {/* Circuit background effect */}
      <div className="absolute inset-0 opacity-10 bg-circuit-pattern animate-circuit-flow"></div>
      
      {/* Particle effects */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-custom-neonBlue rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-custom-neonBlue rounded-full opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-custom-neonBlue rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-custom-neonBlue rounded-full opacity-70 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Pare de perder dinheiro com <span className="neon-text">estratégias ultrapassadas</span>!
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sua clínica funcionando como uma máquina de captação – <span className="neon-text">24 horas por dia, 7 dias por semana</span>!
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="aspect-square bg-black bg-opacity-50 rounded-2xl overflow-hidden p-8 flex items-center justify-center border border-custom-neonBlue/30 card-shadow">
              <div className="relative z-20 text-center">
                <div className="w-24 h-24 rounded-full bg-custom-neonBlue/10 border border-custom-neonBlue/30 flex items-center justify-center mx-auto mb-6">
                  <div className="text-custom-neonBlue text-5xl">AI</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">IA Revolucionária</h3>
                <p className="text-gray-300">
                  Nossa tecnologia de ponta combina machine learning e processamento de linguagem natural para criar uma experiência de atendimento excepcional.
                </p>
              </div>
              
              {/* Animation effects */}
              <div className="absolute inset-0 z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-custom-neonBlue opacity-10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-custom-neonBlue opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-black rounded-lg border border-custom-neonBlue/50 flex items-center justify-center animate-float">
              <Clock className="w-6 h-6 text-custom-neonBlue" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black rounded-lg border border-custom-neonBlue/50 flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
              <Calendar className="w-6 h-6 text-custom-neonBlue" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Imagine um sistema que:</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-custom-neonBlue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Recebe os pacientes assim que entram em contato</h4>
                  <p className="text-gray-300">Mesmo fora do expediente, garantindo que nenhum lead seja perdido.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-custom-neonBlue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Faz perguntas qualificadoras para entender o perfil</h4>
                  <p className="text-gray-300">E já agenda a consulta diretamente no seu sistema.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-custom-neonBlue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Registra automaticamente todas as informações no CRM</h4>
                  <p className="text-gray-300">Sem perda de dados e com total rastreabilidade.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-custom-neonBlue/20 border border-custom-neonBlue/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="text-custom-neonBlue font-bold">24/7</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Não tira folga, não reclama de hora extra</h4>
                  <p className="text-gray-300">E mantém a mesma qualidade de atendimento o tempo todo!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            CONHEÇA A SOLUÇÃO
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
