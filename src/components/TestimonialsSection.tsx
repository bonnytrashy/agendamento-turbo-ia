
import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Grupo Wizard",
      role: "Franquia de Escolas de Idiomas",
      text: "A economia com a equipe foi absurda! A IA da Gambit reduziu custos e aumentou a eficiência.",
      logo: "W"
    },
    {
      name: "Clínica Estética Vitta",
      role: "Estética Avançada",
      text: "Finalmente conseguimos atender fora do horário comercial, sem contratar mais ninguém!",
      logo: "V"
    },
    {
      name: "Alphapiscinas",
      role: "Construção de Piscinas",
      text: "De 24 para 4 atendentes, mantendo o faturamento e até ampliando os horários!",
      logo: "A"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-custom-darkBlue relative overflow-hidden">
      {/* Circuit background effect */}
      <div className="absolute inset-0 opacity-5 bg-circuit-pattern animate-circuit-flow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            O que nossos <span className="neon-text">clientes</span> estão dizendo?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full bg-black border border-custom-neonBlue/50 flex items-center justify-center text-custom-neonBlue hover:bg-custom-neonBlue/20 transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full bg-black border border-custom-neonBlue/50 flex items-center justify-center text-custom-neonBlue hover:bg-custom-neonBlue/20 transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            
            {/* Testimonial cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-black bg-opacity-50 rounded-2xl p-8 md:p-12 border border-custom-neonBlue/20 card-shadow">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                          <div className="w-24 h-24 rounded-xl bg-custom-darkBlue border border-custom-neonBlue/30 flex items-center justify-center text-custom-neonBlue text-4xl font-bold">
                            {item.logo}
                          </div>
                        </div>
                        <div className="md:w-3/4 md:pl-8">
                          <div className="mb-6">
                            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#00a8f3"/>
                              <path d="M35 0L37.2451 6.90983H44.5106L38.6327 11.1803L40.8779 18.0902L35 13.8197L29.1221 18.0902L31.3673 11.1803L25.4894 6.90983H32.7549L35 0Z" fill="#00a8f3"/>
                              <path d="M60 0L62.2451 6.90983H69.5106L63.6327 11.1803L65.8779 18.0902L60 13.8197L54.1221 18.0902L56.3673 11.1803L50.4894 6.90983H57.7549L60 0Z" fill="#00a8f3"/>
                              <path d="M85 0L87.2451 6.90983H94.5106L88.6327 11.1803L90.8779 18.0902L85 13.8197L79.1221 18.0902L81.3673 11.1803L75.4894 6.90983H82.7549L85 0Z" fill="#00a8f3"/>
                              <path d="M110 0L112.245 6.90983H119.511L113.633 11.1803L115.878 18.0902L110 13.8197L104.122 18.0902L106.367 11.1803L100.489 6.90983H107.755L110 0Z" fill="#00a8f3"/>
                            </svg>
                          </div>
                          <p className="text-xl italic mb-8">"{item.text}"</p>
                          <div>
                            <h4 className="text-lg font-bold">{item.name}</h4>
                            <p className="text-gray-400">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-custom-neonBlue' 
                      : 'bg-custom-darkBlue border border-custom-neonBlue/30'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#cta" className="btn-cta inline-block animate-pulse-glow">
              VEJA MAIS HISTÓRIAS DE SUCESSO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
