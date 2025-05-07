
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgray-dark text-white py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-serif text-xl font-medium">
              <span className="text-gold">A</span>rt<span className="text-gold">D</span>irector
            </Link>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Home</Link>
              <Link to="/portfolio" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Portfolio</Link>
              <Link to="/gallery" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Gallery</Link>
              <Link to="/props" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Props</Link>
              <Link to="/about" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">About</Link>
              <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Contact</Link>
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
