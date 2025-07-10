import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Adicionado useNavigate
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/produtos', label: 'Cardápio' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#contato', label: 'Contato' },
  ];

  const navigate = useNavigate(); // Importado de react-router-dom

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Heart 
                className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                } group-hover:text-accent-500`} 
                fill="currentColor"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span 
                className={`font-serif font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-primary-800' : 'text-white'
                } group-hover:text-accent-600`}
              >
                Sabor da Vila
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                      isScrolled ? 'text-primary-700' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-300 hover:text-accent-500 ${
                      isScrolled ? 'text-primary-700' : 'text-white'
                    } ${location.pathname === item.href ? 'text-accent-500' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-700 hover:bg-primary-50' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left font-medium text-primary-700 hover:text-accent-500 transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block font-medium hover:text-accent-500 transition-colors duration-300 py-2 ${
                          location.pathname === item.href 
                            ? 'text-accent-500' 
                            : 'text-primary-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;