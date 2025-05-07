
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgray-dark text-white py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="font-serif text-xl font-medium">
              <span className="text-gold">A</span>rt<span className="text-gold">D</span>irector
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#home" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Home</a>
              <a href="#portfolio" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Portfolio</a>
              <a href="#props" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Props</a>
              <a href="#about" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">About</a>
              <a href="#contact" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-sm opacity-70">
            &copy; {currentYear} Art Director. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
