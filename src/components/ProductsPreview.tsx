import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { getFeaturedProducts, Product } from '../data/products';

const ProductsPreview: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  const handleWhatsAppClick = (product: Product) => {
    const message = `Olá! Vim pelo site da Sabor da Vila e gostaria de pedir: ${product.name} - ${product.price}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5591984494962&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="produtos-preview" className="py-16 bg-white" aria-labelledby="products-preview-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-preview-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Delícias da Sabor da Vila: Doces e Salgados em Destaque
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Experimente nossos produtos artesanais mais amados! De coxinhas cremosas a brigadeiros gourmet, cada item é feito com ingredientes frescos e um toque de carinho para você em Belém.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              aria-labelledby={`product-title-${product.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 id={`product-title-${product.id}`} className="font-serif text-xl font-bold text-primary-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-accent-600 font-semibold text-lg mb-4">
                  {product.price}
                </p>
                <button
                  onClick={() => handleWhatsAppClick(product)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:animate-pulse" aria-hidden="true" />
                  Pedir no WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/produtos"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            Ver Cardápio Completo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;