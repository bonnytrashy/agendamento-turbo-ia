
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Users, Award, Star } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-custom-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 digital-texture"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-custom-neonBlue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Conheça nosso <span className="neon-text">Fundador</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Founder Image and Info */}
          <div className="lg:w-1/3">
            <div className="relative mx-auto">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 w-full h-full rounded-full border-4 border-custom-neonBlue/30 animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-4 rounded-full border-2 border-custom-neonBlue/50 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <Avatar className="w-64 h-64 border-4 border-custom-neonBlue">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Daniel Anjos" />
                  <AvatarFallback className="bg-custom-darkBlue text-3xl text-custom-neonBlue">DA</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-custom-white">Daniel Anjos</h3>
                <p className="text-custom-neonBlue font-semibold">Fundador da Digital Gambit</p>
              </div>
            </div>
          </div>
          
          {/* Founder Bio and MLS Information */}
          <div className="lg:w-2/3">
            <Card className="bg-custom-black/40 border border-custom-neonBlue/30 backdrop-blur-sm card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-custom-neonBlue mb-4">Sobre o Fundador</h3>
                <p className="text-lg mb-6 text-custom-white">
                  Nosso fundador, Daniel Anjos, faz parte do <span className="font-bold text-custom-neonBlue">MLS (Mentoria Legacy Associates)</span>, 
                  o maior ecossistema de mentoria e treinamento do Brasil.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Users size={40} className="text-custom-neonBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Conexões Poderosas</h4>
                    <p>Nossa participação nesse grupo nos posiciona como uma empresa com acesso às melhores práticas e estratégias no mercado.</p>
                  </div>
                </div>
                
                <div className="bg-custom-darkBlue/40 p-6 rounded-xl border border-custom-neonBlue/20 mb-6">
                  <div className="flex items-center mb-4">
                    <Award size={24} className="text-custom-neonBlue mr-2" />
                    <h4 className="text-lg font-bold">MLS Fundadores</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Flávio Augusto', 'Conrado Adolfo', 'Joel Jota', 'Caio Carneiro'].map((name, index) => (
                      <div key={index} className="bg-custom-black/40 p-4 rounded-lg border border-custom-neonBlue/10 text-center">
                        <Star className="h-6 w-6 mx-auto text-custom-neonBlue mb-2" />
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="italic text-custom-white/80">
                  "Você deve conhecer alguns desses nomes... Nossa participação nesse grupo nos posiciona como uma empresa com acesso às melhores práticas e estratégias no mercado."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
