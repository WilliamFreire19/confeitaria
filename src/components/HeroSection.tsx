import React from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.querySelector("#produtos-preview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source
            src="https://media.istockphoto.com/id/1494392115/pt/v%C3%ADdeo/cake-manufacturer.mp4?s=mp4-640x640-is&k=20&c=ppFb3l5wdm1wu0579DsTN5FBgj_U7E-iCd8f293ret8="
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Mesa de confeitaria com diversos doces e utensílios, servindo de fundo para o site Sabor da Vila"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Content */}
      <section className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Sabor da Vila Confeitaria:</span>
          <span className="block text-accent-300 mt-2">
            Doces e Salgados Artesanais em Belém
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up text-warm-100">
          Descubra o autêntico sabor caseiro com nossos doces, bolos e salgados artesanais. Ingredientes frescos, receitas de família e uma pitada de amor em cada delícia. Perfeito para sua festa ou para adoçar o seu dia!
        </p>

        <button
          onClick={scrollToProducts}
          className="group inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up"
        >
          Conheça Nossos Doces e Salgados
          <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
        </button>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </div>
  );
};

export default HeroSection;
