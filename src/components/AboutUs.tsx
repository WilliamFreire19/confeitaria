import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada produto é preparado com carinho e dedicação, como se fosse para nossa própria família."
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas ingredientes selecionados e técnicas artesanais tradicionais."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único para nós. Oferecemos produtos personalizados para suas necessidades."
    },
    {
      icon: Clock,
      title: "Tradição Familiar",
      description: "Receitas passadas de geração em geração, mantendo o sabor autêntico da nossa família."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-gradient-to-br from-warm-50 to-primary-50" aria-labelledby="about-us-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="about-us-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Sabor da Vila: Confeitaria Artesanal com Tradição em Belém
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <article className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-primary-700 leading-relaxed">
                A <span className="font-semibold text-accent-600">Sabor da Vila Confeitaria</span> nasceu em Belém do Pará, fruto do sonho de uma família apaixonada pela arte de criar doces e salgados artesanais. Há mais de 15 anos, nossa fundadora Maria, com suas receitas caseiras e muito afeto, começou a encantar amigos e familiares. O que era um hobby se transformou em uma confeitaria reconhecida pelo sabor autêntico e qualidade.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                Com receitas de família, passadas de geração em geração, e o desejo de compartilhar momentos de felicidade, abrimos as portas da nossa confeitaria. Cada bolo, doce ou salgado que sai do nosso forno artesanal carrega não apenas ingredientes frescos e selecionados, mas também todo o carinho e dedicação que colocamos em nossa arte culinária. Servimos com orgulho a comunidade de Belém.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                Nossa filosofia é simples: <span className="font-semibold text-accent-600">ingredientes de qualidade superior, produção 100% artesanal com toque caseiro, e um atendimento que faz você se sentir parte da família Sabor da Vila</span>. Porque acreditamos que os melhores momentos da vida são celebrados com os melhores sabores de doces e salgados.
              </p>
            </div>
          </article>
          
          <aside className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Foto aconchegante do interior da confeitaria Sabor da Vila, mostrando o balcão e área de atendimento"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Clientes Felizes</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-4">
                <value.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-800 mb-2">
                {value.title}
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;