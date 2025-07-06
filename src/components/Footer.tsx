import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Adicionado useNavigate e useLocation

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Início' },
    { href: '/produtos', label: 'Cardápio' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#contato', label: 'Contato' }
  ];

  const navigate = useNavigate(); // Importado de react-router-dom
  const location = useLocation(); // Importado de react-router-dom

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    }
  };

  return (
    <footer className="bg-primary-800 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-accent-400" fill="currentColor" aria-hidden="true" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-300 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Sabor da Vila
                </h3>
              </div>
            </div>
            <p className="text-warm-200 text-sm leading-relaxed">
              Onde cada mordida conta uma história. Doces e salgados artesanais feitos com amor e ingredientes selecionados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-accent-500 hover:bg-accent-600 rounded-full transition-colors duration-300"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-accent-500 hover:bg-accent-600 rounded-full transition-colors duration-300"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-labelledby="footer-nav-heading">
            <h3 id="footer-nav-heading" className="font-semibold text-lg mb-4 text-accent-300">Navegação</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-warm-200 hover:text-accent-300 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-warm-200 hover:text-accent-300 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <section aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="font-semibold text-lg mb-4 text-accent-300">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-warm-200 text-sm">
                  Rua das Flores, 123 - Centro<br />
                  Belém, PA - CEP: 66010-020
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+5591984494962" 
                  className="text-warm-200 hover:text-accent-300 transition-colors duration-300 text-sm"
                >
                  (91) 98449-4962
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:contato@sabordavila.com.br" 
                  className="text-warm-200 hover:text-accent-300 transition-colors duration-300 text-sm"
                >
                  contato@sabordavila.com.br
                </a>
              </li>
            </ul>
          </section>

          {/* Business Hours */}
          <section aria-labelledby="footer-hours-heading">
            <h3 id="footer-hours-heading" className="font-semibold text-lg mb-4 text-accent-300">Horário de Funcionamento</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-warm-200">Segunda a Sábado:</span>
                <span className="text-accent-300 font-medium">08h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-200">Domingo:</span>
                <span className="text-accent-300 font-medium">08h às 14h</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-accent-500/20 rounded-lg border border-accent-500/30">
              <p className="text-accent-200 text-xs">
                💡 Encomendas especiais: agende com 48h de antecedência
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-300 text-sm text-center md:text-left">
              © {currentYear} Sabor da Vila. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;