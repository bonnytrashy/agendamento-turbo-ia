
import React, { useEffect } from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import PromiseSection from "../components/PromiseSection";
import BenefitsSection from "../components/BenefitsSection";
import EnemySection from "../components/EnemySection";
import DifferentialsSection from "../components/DifferentialsSection";
import ComparisonSection from "../components/ComparisonSection";
import AuthoritySection from "../components/AuthoritySection";
import TestimonialsSection from "../components/TestimonialsSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.href.includes(window.location.origin)) {
        event.preventDefault();
        
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          // Update URL hash without page jump
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-custom-black text-custom-white overflow-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PromiseSection />
      <BenefitsSection />
      <EnemySection />
      <DifferentialsSection />
      <ComparisonSection />
      <AuthoritySection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
