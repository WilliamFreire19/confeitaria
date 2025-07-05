import React from 'react';
import HeroSection from '../components/HeroSection';
import SpecialOffers from '../components/SpecialOffers';
import ProductsPreview from '../components/ProductsPreview';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <SpecialOffers />
      <ProductsPreview />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;