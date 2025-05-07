
import React from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-darkgray">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white max-w-5xl mx-auto px-6 text-center md:text-left">
        <h3 className="text-gold uppercase tracking-wider mb-2 animate-fade-in">Creative Direction & Art</h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 animate-slide-in">
          Transforming Visions <br className="hidden md:block" />
          Into Visual Stories
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl md:mx-0 mx-auto opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Award-winning art director with expertise in web series, music videos, brand advertisements, 
          and a prop rental business to bring your creative visions to life.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white">
            View Portfolio
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Rent Props
          </Button>
        </div>
      </div>
      
      {/* Scroll Down */}
      <a 
        href="#portfolio" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
