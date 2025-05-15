
import React from 'react';

const AuthoritySection = () => {
  return (
    <section id="authority" className="py-20 bg-custom-black relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Por que confiar na <span className="neon-text">Digital Gambit</span>?
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center relative overflow-hidden card-shadow">
                <div className="relative z-20">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="absolute inset-0 rounded-full border-4 border-custom-neonBlue/30 animate-spin" style={{animationDuration: '20s'}}></div>
                      <div className="absolute inset-4 rounded-full border-2 border-custom-neonBlue/50 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-custom-neonBlue">DG</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Digital Gambit</h3>
                    <p className="text-sm text-custom-neonBlue">TECNOLOGIA & MARKETING</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 z-10">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-custom-darkBlue/30 rounded-xl animate-float" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-custom-darkBlue/30 rounded-xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-xl mb-8">
              Com mais de 5 anos de experiência, a Digital Gambit já ajudou a escalar mais de 350 empresas, incluindo gigantes como Wizard by Pearson e Ig Piscinas.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-custom-darkBlue bg-opacity-10 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/30 transition-all duration-300 text-center card-shadow">
                <div className="text-4xl font-montserrat font-extrabold text-custom-neonBlue mb-2">200M+</div>
                <div className="text-sm text-gray-300">reais gerados para nossos clientes</div>
              </div>
              
              <div className="bg-custom-darkBlue bg-opacity-10 p-6 rounded-xl border border-custom-darkBlue hover:border-custom-neonBlue/30 transition-all duration-300 text-center card-shadow">
                <div className="text-4xl font-montserrat font-extrabold text-custom-neonBlue mb-2">5M+</div>
                <div className="text-sm text-gray-300">reais investidos em tráfego pago</div>
              </div>
            </div>
            
            <div className="bg-custom-darkBlue bg-opacity-10 p-6 rounded-xl border border-custom-darkBlue card-shadow">
              <p className="text-gray-200">
                Parte do <span className="font-bold">MLS (Mentoria Legacy Associates)</span>, ao lado de Flávio Augusto, Conrado Adolfo, Joel Jota e Caio Carneiro.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
            QUERO MEU AGENDAMENTO AUTOMÁTICO
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
