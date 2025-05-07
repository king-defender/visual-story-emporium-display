
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
        <h3 className="text-gold uppercase tracking-wider mb-2 animate-fade-in">Art Director</h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 animate-slide-in">
          Visual Stories Through <br className="hidden md:block" />
          Everyday Moments
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl md:mx-0 mx-auto opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Art direction for web series, music videos, and brand advertisements, 
          with prop rentals available for your creative projects.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
            View Work
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => document.getElementById('props')?.scrollIntoView({behavior: 'smooth'})}>
            Rent Props
          </Button>
        </div>
      </div>
      
      {/* Scroll Down */}
      <a 
        href="#portfolio" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="mb-2 text-sm">Explore</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
