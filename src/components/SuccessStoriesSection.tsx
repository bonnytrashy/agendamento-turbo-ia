
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      id: 1,
      title: "Grupo Wizard",
      description: "Franquia líder de escolas de idiomas reduziu custos de atendimento em 75% com nossa solução de IA.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 2,
      title: "Clínica Estética Vitta",
      description: "Conseguiu atendimento 24/7 e aumentou seus agendamentos em mais de 200% em apenas 3 meses.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 3,
      title: "Alphapiscinas",
      description: "Reduziu sua equipe de 24 para 4 atendentes mantendo o mesmo faturamento com nossa IA.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 4,
      title: "Odonto Excellence",
      description: "Aumentou em 158% o número de novos pacientes sem precisar ampliar a equipe de atendimento.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 5,
      title: "Instituto Dermatológico Silva",
      description: "Economizou mais de R$35.000 mensais em custos operacionais mantendo alta qualidade de atendimento.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-custom-darkBlue relative overflow-hidden">
      {/* Circuit background effect */}
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern animate-circuit-flow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Nossas <span className="neon-text">Histórias de Sucesso</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mt-6 text-gray-300">
            Veja como transformamos o atendimento e os resultados de nossos clientes com nossa solução de IA
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="border border-custom-neonBlue/20 bg-black bg-opacity-50 overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-5 w-5 text-custom-neonBlue" />
                          <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                        </div>
                        <p className="text-gray-300">{story.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 -translate-x-4 h-10 w-10 mr-2" />
              <CarouselNext className="relative static translate-y-0 translate-x-4 h-10 w-10 ml-2" />
            </div>
          </Carousel>
          
          <div className="text-center mt-12">
            <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
              VEJA COMO PODEMOS TRANSFORMAR SUA EMPRESA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
