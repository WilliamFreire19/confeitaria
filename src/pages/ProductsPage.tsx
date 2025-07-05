import React, { useState } from 'react';
import { ShoppingBag, Filter } from 'lucide-react';
import Footer from '../components/Footer';
import { products, Product } from '../data/products';

const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filters = [
    { key: 'todos', label: 'Todos', count: products.length },
    { key: 'doces', label: 'Doces', count: products.filter(p => p.category === 'doces').length },
    { key: 'salgados', label: 'Salgados', count: products.filter(p => p.category === 'salgados').length },
    { key: 'bolos', label: 'Bolos e Tortas', count: products.filter(p => p.category === 'bolos').length },
    { key: 'bebidas', label: 'Bebidas', count: products.filter(p => p.category === 'bebidas').length }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleWhatsAppClick = (product: Product) => {
    const message = `Olá! Vim pelo site da Sabor da Vila e gostaria de pedir: ${product.name} - ${product.description} - ${product.price}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5591984494962&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header Spacing */}
      <div className="h-16 lg:h-20"></div>
      
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nosso Cardápio Completo
          </h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Descubra todos os nossos sabores artesanais, feitos com ingredientes selecionados e muito carinho
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-primary-700 font-medium">Filtrar por categoria:</span>
          </div>
          
          {/* Desktop Filter Buttons */}
          <div className="hidden sm:flex justify-center space-x-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-accent-500 text-white shadow-lg transform scale-105'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="sm:hidden">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-white"
            >
              {filters.map((filter) => (
                <option key={filter.key} value={filter.key}>
                  {filter.label} ({filter.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-accent-600 font-semibold text-lg mb-4">
                    {product.price}
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick(product)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    <ShoppingBag className="w-4 h-4 group-hover:animate-pulse" />
                    Pedir no WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600 text-lg">
                Nenhum produto encontrado para esta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;