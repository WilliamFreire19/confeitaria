import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import SpecialOffers from '../components/SpecialOffers';
import ProductsPreview from '../components/ProductsPreview';
// import AboutUs from '../components/AboutUs';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const AboutUs = lazy(() => import('../components/AboutUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <SpecialOffers />
      <ProductsPreview />
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;