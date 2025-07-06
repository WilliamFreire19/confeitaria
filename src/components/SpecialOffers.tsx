import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

interface Offer {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  image: string;
}

const SpecialOffers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers: Offer[] = [
    {
      id: 1,
      name: "Combo Festa em Casa",
      description: "1 Bolo Médio + 50 Salgados Variados",
      originalPrice: 150.00,
      salePrice: 129.90,
      image: "https://ideogram.ai/assets/image/lossless/response/Hu10FRseStqDwviDUOEe3A"
    },
    {
      id: 2,
      name: "Kit Doce Tentação",
      description: "2 Bolos de Pote + 20 Brigadeiros + 10 Beijinhos",
      originalPrice: 85.00,
      salePrice: 69.90,
      image: "https://ideogram.ai/assets/image/lossless/response/BKbjefceRc2UyRcQpGZIeQ"
    },
    {
      id: 3,
      name: "Super Combo Salgados",
      description: "100 Salgados Variados + 2L de Refrigerante",
      originalPrice: 180.00,
      salePrice: 159.90,
      image: "https://imagens.jotaja.com/produtos/6936ce71-7105-49c5-b050-9c07779229e4.jpg"
    },
    {
      id: 4,
      name: "Kit Aniversário Completo",
      description: "1 Bolo Personalizado + 30 Salgados + 30 Docinhos",
      originalPrice: 220.00,
      salePrice: 189.90,
      image: "https://www.festlist.com.br/uploads/img/anuncios/136/anuncios_fotos/thumb-1200-0/1957e8fe1238417e9b6d4998fffd3f30.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleWhatsAppClick = (offer: Offer) => {
    const message = `Olá! Vim pelo site da Sabor da Vila e gostaria de pedir a oferta: ${offer.name} - ${offer.description} por R$ ${offer.salePrice.toFixed(2).replace('.', ',')}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5591984494962&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent-50 to-warm-100" aria-labelledby="special-offers-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="special-offers-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Ofertas Especiais da Sabor da Vila Confeitaria
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Aproveite nossas promoções exclusivas! Deliciosos combos de doces, salgados e bolos artesanais com preços imperdíveis em Belém. Peça já o seu kit festa ou lanche especial.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <article key={offer.id} aria-labelledby={`offer-title-${offer.id}`} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={`Oferta especial: ${offer.name} - ${offer.description}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((offer.originalPrice - offer.salePrice) / offer.originalPrice) * 100)}% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`offer-title-${offer.id}`} className="font-serif text-xl font-bold text-primary-800 mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-primary-600 mb-4 text-sm">
                    {offer.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-primary-400 line-through text-sm">
                        De: R$ {offer.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-accent-600 font-bold text-xl">
                        Por: R$ {offer.salePrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(offer)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                    Pedir Pelo WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {offers.map((offer) => (
                  <article key={offer.id} aria-labelledby={`mobile-offer-title-${offer.id}`} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative">
                        <img
                          src={offer.image}
                          alt={`Oferta especial mobile: ${offer.name} - ${offer.description}`}
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {Math.round(((offer.originalPrice - offer.salePrice) / offer.originalPrice) * 100)}% OFF
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 id={`mobile-offer-title-${offer.id}`} className="font-serif text-xl font-bold text-primary-800 mb-2">
                          {offer.name}
                        </h3>
                        <p className="text-primary-600 mb-4">
                          {offer.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex flex-col">
                            <span className="text-primary-400 line-through text-sm">
                              De: R$ {offer.originalPrice.toFixed(2).replace('.', ',')}
                            </span>
                            <span className="text-accent-600 font-bold text-xl">
                              Por: R$ {offer.salePrice.toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleWhatsAppClick(offer)}
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                          Pedir Pelo WhatsApp
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Oferta anterior"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima oferta"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2" role="tablist">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`Ir para oferta ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-accent-500' : 'bg-primary-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;