import React from 'react';
import Navbar from '../components/Navbar';
import ProductCarousel from '../components/ProductCarousel'

function Navigation() {
  return (
    <div className="flex">
      <Navbar />
      <ProductCarousel />

      <div className="p-6 w-full">
       
      </div>
    </div>
  );
};

export default Navigation;
