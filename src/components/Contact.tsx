import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Contato: ${formData.contact}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5591984494962&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', contact: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Centro\nBelém, PA - CEP: 66010-020"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(91) 98449-4962"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@sabordavila.com.br"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sábado\n08h às 18h\nDomingo: 08h às 14h"
    }
  ];

  return (
    <section id="contato" className="py-16 bg-warm-50" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Faça seu Pedido ou Venha nos Visitar
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Estamos sempre prontos para atendê-lo com carinho e criar momentos especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-serif text-2xl font-bold text-primary-800 mb-6">
              Entre em Contato
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="contact-form-heading">
             <h4 id="contact-form-heading" className="sr-only">Formulário de Contato</h4>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-primary-700 mb-2">
                  Email ou Telefone
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200"
                  placeholder="Seu email ou telefone"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-6 p-4 bg-accent-50 rounded-xl">
              <p className="text-sm text-accent-700 text-center">
                💡 <strong>Dica:</strong> Para pedidos, recomendamos o contato direto pelo nosso WhatsApp para um atendimento mais rápido!
              </p>
            </div>
          </div>

          {/* Contact Info and Map */}
          <aside className="space-y-8" aria-labelledby="contact-info-heading">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <h3 id="contact-info-heading" className="sr-only">Informações de Contato</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 text-accent-600 rounded-full mb-4">
                    <info.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-primary-800 mb-2">{info.title}</h4>
                  <p className="text-primary-600 text-sm whitespace-pre-line">{info.content}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
             <h3 className="sr-only">Mapa de Localização</h3>
              <div className="h-64 bg-primary-100 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7906567309407!2d-48.50440252406894!3d-1.459678998555916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c36cd0e5a19%3A0x8d7dd3a6a6b69a94!2sRua%20das%20Flores%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt!2sbr!4v1703070000000!5m2!1spt!2sbr"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Sabor da Vila no Google Maps"
                  className="w-full h-full"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;