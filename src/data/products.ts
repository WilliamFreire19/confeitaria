export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'doces' | 'salgados' | 'bolos' | 'bebidas';
}

export const products: Product[] = [
  // Doces
  {
    id: 1,
    name: "Brigadeiro Gourmet",
    description: "Brigadeiro tradicional com chocolate nobre",
    price: "R$ 4,50 a unidade",
    image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-brigadeiro-gourmet-4.jpg",
    category: "doces"
  },
  {
    id: 2,
    name: "Beijinho Especial",
    description: "Beijinho com coco fresco e leite condensado",
    price: "R$ 4,00 a unidade",
    image: "https://www.comidaereceitas.com.br/wp-content/uploads/2010/06/Beijinho-doce-freepik-780x520.jpg",
    category: "doces"
  },
  {
    id: 3,
    name: "Casadinho",
    description: "Metade brigadeiro, metade beijinho",
    price: "R$ 5,00 a unidade",
    image: "https://tse1.explicit.bing.net/th/id/OIP.wY3fQArz6cqj2zRySwr09gHaE8?pid=Api&P=0&h=180",
    category: "doces"
  },
  {
    id: 4,
    name: "Trufa de Chocolate",
    description: "Trufa com chocolate 70% cacau",
    price: "R$ 6,00 a unidade",
    image: "https://tse1.mm.bing.net/th/id/OIP.Wq2Zj6orM1Fc3Qe2WMxhTwHaE8?pid=Api&P=0&h=180",
    category: "doces"
  },
  
  // Salgados
  {
    id: 5,
    name: "Coxinha de Frango Cremosa",
    description: "Coxinha tradicional com frango desfiado",
    price: "R$ 8,00 a unidade",
    image: "https://blog.vapza.com.br/wp-content/uploads/2020/10/coxinha-de-frango.jpg",
    category: "salgados"
  },
  {
    id: 6,
    name: "Pastel de Queijo",
    description: "Pastel crocante com queijo derretido",
    price: "R$ 6,50 a unidade",
    image: "https://receitas123.com/wp-content/uploads/2023/04/pastel-de-queijo.png",
    category: "salgados"
  },
  {
    id: 7,
    name: "Risole de Camarão",
    description: "Risole especial com camarão ao molho",
    price: "R$ 9,00 a unidade",
    image: "https://momentosdocesesalgados.com/wp-content/uploads/2023/07/Thumbnail-MDS-7-1500x1000.jpg",
    category: "salgados"
  },
  {
    id: 8,
    name: "Empada de Frango",
    description: "Empada artesanal com frango temperado",
    price: "R$ 7,50 a unidade",
    image: "https://benditosalgado.com.br/wp-content/uploads/2020/04/Risole-Camarao2-819x1024.jpg",
    category: "salgados"
  },
  {
    id: 9,
    name: "Quibe Frito",
    description: "Quibe tradicional árabe frito na hora",
    price: "R$ 7,00 a unidade",
image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikXhZmoL1DqcFD1m6XAmGHwDQtwMYmOYi1LUSNQPpRgHTfQEmcckJEeFaH1z0xKKSU2kX0I9AJ5LMuJQx9n3dhkS8CfRrta5rtutQtwP2-QME0LwBnerGkiBoZoMg1FayCvUivW5Vq6GkHgPWS68SgxZg83FjCco9HbycsWsgaxINljQ-pk2nXZ5Cn/w1200/receita-de-kibe.jpg",
    category: "salgados"
  },
  
  // Bolos e Tortas
  {
    id: 10,
    name: "Bolo de Chocolate Premium",
    description: "Bolo úmido com cobertura de chocolate",
    price: "R$ 85,00 (serve 8 pessoas)",
    image: "https://assets.unileversolutions.com/recipes-v2/67404.jpg",
    category: "bolos"
  },
  {
    id: 11,
    name: "Torta de Morango",
    description: "Torta com chantilly e morangos frescos",
    price: "R$ 95,00 (serve 10 pessoas)",
    image: "https://guiadacozinha.com.br/wp-content/uploads/2020/06/torta-morango-chocolate-branco.jpg",
    category: "bolos"
  },
  {
    id: 12,
    name: "Bolo de Cenoura com Chocolate",
    description: "Bolo tradicional caseiro com cobertura",
    price: "R$ 75,00 (serve 8 pessoas)",
    image: "https://tse1.mm.bing.net/th/id/OIP.GvN6gW4P0ienl_LF7HXEAgHaEN?pid=Api&P=0&h=180",
    category: "bolos"
  },
  {
    id: 13,
    name: "Torta de Limão",
    description: "Torta refrescante com creme de limão",
    price: "R$ 90,00 (serve 10 pessoas)",
    image: "https://www.receiteria.com.br/wp-content/uploads/torta-de-limao-facil-capa.jpeg",
    category: "bolos"
  },
  
  // Bebidas
  {
    id: 14,
    name: "Suco Natural de Laranja",
    description: "Suco fresco espremido na hora",
    price: "R$ 8,00 (500ml)",
    image: "https://supernossoio.vtexassets.com/arquivos/ids/226917/95587.png?v=637874369201200000",
    category: "bebidas"
  },
  {
    id: 15,
    name: "Café Especial",
    description: "Café passado na hora com grãos selecionados",
    price: "R$ 5,00 (250ml)",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    category: "bebidas"
  },
  {
    id: 16,
    name: "Chocolate Quente",
    description: "Chocolate cremoso com chantilly",
    price: "R$ 7,00 (300ml)",
    image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-chocolate-quente.jpg",
    category: "bebidas"
  }
];

// Produtos em destaque para a página inicial
export const getFeaturedProducts = (): Product[] => {
  return [
    products.find(p => p.id === 5)!, // Coxinha de Frango Cremosa
    products.find(p => p.id === 1)!, // Brigadeiro Gourmet
    products.find(p => p.id === 10)!, // Bolo de Chocolate Premium
    products.find(p => p.id === 6)!, // Pastel de Queijo
    products.find(p => p.id === 11)!, // Torta de Morango
    products.find(p => p.id === 2)!, // Beijinho Especial
  ];
};