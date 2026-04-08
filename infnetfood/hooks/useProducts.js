import { create } from 'zustand';

export const useProducts = create((set, get) => ({
  products: [
    {
      id: 1,
      name: 'Hambúrguer Clássico',
      price: 18.9,
      stock: 20,
      description: 'Hambúrguer suculento de carne com queijo e alface',
      image: 'https://loremflickr.com/400/190/burger,food/all?lock=1',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Sanduíche de Frango',
      price: 16.5,
      stock: 15,
      description: 'Sanduíche de frango grelhado com maionese',
      image: 'https://loremflickr.com/400/190/sandwich,food/all?lock=2',
      categoryId: 1,
    },

    {
      id: 3,
      name: 'Pizza de Pepperoni',
      price: 35.0,
      stock: 10,
      description: 'Pizza clássica com pepperoni e queijo',
      image: 'https://loremflickr.com/400/190/pepperoni,pizza/all?lock=3',
      categoryId: 2,
    },
    {
      id: 4,
      name: 'Pizza Margherita',
      price: 30.0,
      stock: 8,
      description: 'Tomate, mussarela e manjericão',
      image: 'https://loremflickr.com/400/190/margherita,pizza/all?lock=4',
      categoryId: 2,
    },

    {
      id: 5,
      name: 'Marmita de Frango',
      price: 22.0,
      stock: 12,
      description: 'Arroz, feijão e frango grelhado',
      image: 'https://loremflickr.com/400/190/meal,prep/all?lock=5',
      categoryId: 3,
    },
    {
      id: 6,
      name: 'Marmita de Carne',
      price: 24.0,
      stock: 10,
      description: 'Arroz, feijão e bife de carne',
      image: 'https://loremflickr.com/400/190/beef,meal/all?lock=6',
      categoryId: 3,
    },

    {
      id: 7,
      name: 'Bolo de Chocolate',
      price: 12.0,
      stock: 15,
      description: 'Fatia de bolo de chocolate macio',
      image: 'https://loremflickr.com/400/190/chocolate,cake/all?lock=7',
      categoryId: 4,
    },
    {
      id: 8,
      name: 'Sorvete de Baunilha',
      price: 10.0,
      stock: 20,
      description: 'Bola de sorvete de baunilha',
      image: 'https://loremflickr.com/400/190/ice,cream/all?lock=8',
      categoryId: 4,
    },

    {
      id: 9,
      name: 'Refrigerante Cola',
      price: 6.0,
      stock: 30,
      description: 'Refrigerante gelado e refrescante',
      image: 'https://loremflickr.com/400/190/soda,drink/all?lock=9',
      categoryId: 5,
    },
    {
      id: 10,
      name: 'Suco de Laranja',
      price: 8.0,
      stock: 20,
      description: 'Suco de laranja natural espremido',
      image: 'https://loremflickr.com/400/190/orange,juice/all?lock=10',
      categoryId: 5,
    },

    {
      id: 11,
      name: 'Café Expresso',
      price: 5.0,
      stock: 25,
      description: 'Café preto forte',
      image: 'https://loremflickr.com/400/190/espresso,coffee/all?lock=11',
      categoryId: 6,
    },
    {
      id: 12,
      name: 'Cappuccino',
      price: 7.5,
      stock: 18,
      description: 'Café com espuma de leite',
      image: 'https://loremflickr.com/400/190/cappuccino,coffee/all?lock=12',
      categoryId: 6,
    },

    {
      id: 13,
      name: 'Tigela de Salada',
      price: 20.0,
      stock: 10,
      description: 'Folhas frescas com vegetais',
      image: 'https://loremflickr.com/400/190/salad,bowl/all?lock=13',
      categoryId: 7,
    },
    {
      id: 14,
      name: 'Salada com Frango Grelhado',
      price: 23.0,
      stock: 8,
      description: 'Salada de frango saudável',
      image: 'https://loremflickr.com/400/190/healthy,food/all?lock=14',
      categoryId: 7,
    },

    {
      id: 15,
      name: 'Combo de Sushi',
      price: 40.0,
      stock: 12,
      description: 'Variedade de sushi',
      image: 'https://loremflickr.com/400/190/sushi,food/all?lock=15',
      categoryId: 8,
    },
    {
      id: 16,
      name: 'Lámen Tradicional',
      price: 28.0,
      stock: 10,
      description: 'Sopa japonesa de macarrão',
      image: 'https://loremflickr.com/400/190/ramen,food/all?lock=16',
      categoryId: 8,
    },

    {
      id: 17,
      name: 'Costela Barbecue',
      price: 45.0,
      stock: 6,
      description: 'Costelas ao barbecue cozidas lentamente',
      image: 'https://loremflickr.com/400/190/bbq,ribs/all?lock=17',
      categoryId: 9,
    },
    {
      id: 18,
      name: 'Bife Grelhado',
      price: 50.0,
      stock: 5,
      description: 'Bife grelhado suculento',
      image: 'https://loremflickr.com/400/190/steak,meat/all?lock=18',
      categoryId: 9,
    },

    {
      id: 19,
      name: 'Espaguete à Bolonhesa',
      price: 30.0,
      stock: 10,
      description: 'Massa com molho de carne',
      image: 'https://loremflickr.com/400/190/spaghetti,pasta/all?lock=19',
      categoryId: 10,
    },
    {
      id: 20,
      name: 'Fettuccine Alfredo',
      price: 32.0,
      stock: 8,
      description: 'Prato de massa cremoso',
      image: 'https://loremflickr.com/400/190/alfredo,pasta/all?lock=20',
      categoryId: 10,
    },

    {
      id: 21,
      name: 'Feijoada Completa',
      price: 45.0,
      stock: 10,
      description: 'Prato tradicional com feijão preto e carnes',
      image: 'https://loremflickr.com/400/190/feijoada,food/all?lock=21',
      categoryId: 11,
    },
    {
      id: 22,
      name: 'Moqueca de Peixe',
      price: 55.0,
      stock: 5,
      description: 'Ensopado de peixe com azeite de dendê',
      image: 'https://loremflickr.com/400/190/moqueca,food/all?lock=22',
      categoryId: 11,
    },

    {
      id: 23,
      name: 'Frango Xadrez',
      price: 34.0,
      stock: 12,
      description: 'Cubos de frango com legumes e amendoim',
      image: 'https://loremflickr.com/400/190/kungpao,chicken/all?lock=23',
      categoryId: 12,
    },
    {
      id: 24,
      name: 'Yakisoba Tradicional',
      price: 29.0,
      stock: 15,
      description: 'Macarrão frito com carnes e legumes',
      image: 'https://loremflickr.com/400/190/yakisoba,food/all?lock=24',
      categoryId: 12,
    },

    {
      id: 25,
      name: 'Bibimbap',
      price: 38.0,
      stock: 8,
      description: 'Tigela de arroz com carne, vegetais e ovo',
      image: 'https://loremflickr.com/400/190/bibimbap,food/all?lock=25',
      categoryId: 13,
    },
    {
      id: 26,
      name: 'Frango Frito Coreano',
      price: 42.0,
      stock: 10,
      description: 'Frango crocante agridoce e apimentado',
      image: 'https://loremflickr.com/400/190/korean,fried,chicken/all?lock=26',
      categoryId: 13,
    },

    {
      id: 27,
      name: 'Frango Tikka Masala',
      price: 36.0,
      stock: 10,
      description: 'Frango marinado em molho de curry cremoso',
      image: 'https://loremflickr.com/400/190/tikkamasala,food/all?lock=27',
      categoryId: 14,
    },
    {
      id: 28,
      name: 'Samosa de Legumes',
      price: 15.0,
      stock: 20,
      description: 'Pastel indiano frito recheado com batata e ervilha',
      image: 'https://loremflickr.com/400/190/samosa,food/all?lock=28',
      categoryId: 14,
    },

    {
      id: 29,
      name: 'Sanduíche Natural de Atum',
      price: 14.5,
      stock: 15,
      description: 'Pão integral, patê de atum, alface e cenoura',
      image: 'https://loremflickr.com/400/190/tuna,sandwich/all?lock=29',
      categoryId: 15,
    },
    {
      id: 30,
      name: 'Wrap de Peito de Peru',
      price: 18.0,
      stock: 12,
      description: 'Massa leve enrolada com peito de peru e queijo branco',
      image: 'https://loremflickr.com/400/190/wrap,food/all?lock=30',
      categoryId: 15,
    },

    {
      id: 31,
      name: 'Suco Natural de Morango',
      price: 9.0,
      stock: 20,
      description: 'Suco refrescante de morangos frescos',
      image: 'https://loremflickr.com/400/190/strawberry,juice/all?lock=31',
      categoryId: 16,
    },
    {
      id: 32,
      name: 'Limonada Suíça',
      price: 8.5,
      stock: 25,
      description: 'Suco de limão batido com leite condensado',
      image: 'https://loremflickr.com/400/190/lemonade,drink/all?lock=32',
      categoryId: 16,
    },

    {
      id: 33,
      name: 'Milkshake de Morango',
      price: 16.0,
      stock: 15,
      description: 'Sorvete de morango batido com leite',
      image: 'https://loremflickr.com/400/190/strawberry,milkshake/all?lock=33',
      categoryId: 17,
    },
    {
      id: 34,
      name: 'Milkshake de Ovomaltine',
      price: 18.0,
      stock: 12,
      description: 'Sorvete de creme batido com flocos crocantes',
      image: 'https://loremflickr.com/400/190/chocolate,milkshake/all?lock=34',
      categoryId: 17,
    },
    {
      id: 35,
      name: 'Cerveja Artesanal IPA',
      price: 22.0,
      stock: 30,
      description: 'Cerveja encorpada e amarga',
      image: 'https://loremflickr.com/400/190/craft,beer/all?lock=35',
      categoryId: 18,
    },
    {
      id: 36,
      name: 'Porção de Batatas com Bacon',
      price: 28.0,
      stock: 15,
      description: 'Batatas fritas crocantes com queijo e bacon',
      image: 'https://loremflickr.com/400/190/fries,bacon/all?lock=36',
      categoryId: 18,
    },

    {
      id: 37,
      name: 'Risoto de Cogumelos',
      price: 48.0,
      stock: 8,
      description: 'Arroz arbóreo com mix de cogumelos e queijo parmesão',
      image: 'https://loremflickr.com/400/190/risotto,food/all?lock=37',
      categoryId: 19,
    },
    {
      id: 38,
      name: 'Filé Mignon ao Molho Madeira',
      price: 65.0,
      stock: 5,
      description: 'Medalhão de filé mignon com molho especial e purê',
      image: 'https://loremflickr.com/400/190/filet,mignon/all?lock=38',
      categoryId: 19,
    },

    {
      id: 39,
      name: 'Combo Hambúrguer + Fritas + Refri',
      price: 29.9,
      stock: 20,
      description: 'Nossa melhor promoção para matar a fome',
      image: 'https://loremflickr.com/400/190/burger,combo/all?lock=39',
      categoryId: 20,
    },
    {
      id: 40,
      name: 'Pizza Família 2 Sabores',
      price: 49.9,
      stock: 10,
      description: 'Escolha dois sabores clássicos por um preço especial',
      image: 'https://loremflickr.com/400/190/pizza,promo/all?lock=40',
      categoryId: 20,
    },
  ],
  getProductsByCategory: (id) => {
    return get().products.filter(
      (product) => product && product.categoryId === id
    );
  },
  getProductById: (id) => {
    const { products } = get();
    return products.find((product) => product && product.id === id);
  },

  updateStockFromCart: (cartItems) => {
    const { products } = get();

    set({
      products: products.map((product) => {
        const cartItem = cartItems.find(
          (item) => item.idProduct === product.id
        );

        if (cartItem) {
          return {
            ...product,
            stock: Math.max(0, product.stock - cartItem.quantity),
          };
        }
        return product;
      }),
    });
  },
}));
