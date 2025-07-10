import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

// Componente para scroll para o topo e para seções
const ScrollToTopAndSection: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Atraso para garantir que o conteúdo da página (especialmente lazy loaded) esteja renderizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopAndSection />
      <div className="min-h-screen bg-warm-50">
        <Header />
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-600"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:sectionId" element={<HomePage />} /> {/* Para lidar com /#contato vindo de outra página */}
            <Route path="/produtos" element={<ProductsPage />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;