
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
