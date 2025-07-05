import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "Simplesmente apaixonada pelos doces da Sabor & Afeto! Pedi um bolo para o aniversário da minha filha e foi um sucesso. Todo mundo perguntou onde eu havia comprado. O sabor é incrível e o atendimento é maravilhoso!",
      location: "Belém, PA"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "Melhor confeitaria de Belém! Os salgados são fresquinhos e super saborosos. Sempre peço para as reuniões do trabalho e é sempre um sucesso. Recomendo de olhos fechados!",
      location: "Belém, PA"
    },
    {
      id: 3,
      name: "Maria Santos",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "A qualidade dos produtos é excepcional! Você consegue sentir o carinho em cada doce. Meu brigadeiro favorito da cidade! Além disso, o preço é super justo pela qualidade oferecida.",
      location: "Belém, PA"
    },
    {
      id: 4,
      name: "Pedro Costa",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "Atendimento nota 10! A Maria sempre me atende com muito carinho e paciência. Os bolos personalizados são lindos e deliciosos. Já virei cliente fiel!",
      location: "Belém, PA"
    },
    {
      id: 5,
      name: "Lucia Oliveira",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "Descobri a Sabor & Afeto através de uma amiga e me apaixonei! A coxinha é a melhor que já comi na vida. Produtos frescos, saborosos e feitos com muito amor. Super recomendo!",
      location: "Belém, PA"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Nada nos deixa mais felizes do que ver a satisfação de quem prova nossos produtos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop View - Show 3 testimonials */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-800">{testimonial.name}</h3>
                    <p className="text-sm text-primary-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-accent-300 -translate-x-1 -translate-y-1" />
                  <p className="text-primary-700 italic pl-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-md">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-primary-800">{testimonial.name}</h3>
                          <p className="text-sm text-primary-500">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="relative">
                        <Quote className="absolute top-0 left-0 w-6 h-6 text-accent-300 -translate-x-1 -translate-y-1" />
                        <p className="text-primary-700 italic pl-4 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-700 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-accent-500' : 'bg-primary-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Show remaining testimonials on desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
            {testimonials.slice(3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-800">{testimonial.name}</h3>
                    <p className="text-sm text-primary-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-accent-300 -translate-x-1 -translate-y-1" />
                  <p className="text-primary-700 italic pl-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;