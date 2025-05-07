
import React from 'react';
import Navbar from '../components/Navbar';
import PropRentalSection from '../components/PropRentalSection';
import Footer from '../components/Footer';

const PropsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <PropRentalSection />
      </div>
      <Footer />
    </div>
  );
};

export default PropsPage;
