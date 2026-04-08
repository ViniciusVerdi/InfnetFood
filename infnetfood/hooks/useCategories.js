import { create } from 'zustand';

export const useCategories = create(() => ({
  categories: [
    { id: 1, name: 'Lanches', iconName: 'hamburger', family: 'F5'},
    { id: 2, name: 'Pizza', iconName: 'pizza-slice', family: 'F6'},
    { id: 3, name: 'Marmitas', iconName: 'utensils', family: 'F6'},
    { id: 4, name: 'Doces', iconName: 'ice-cream', family: 'F6'},
    { id: 5, name: 'Bebidas', iconName: 'glass-cheers', family: 'F5' },
    { id: 6, name: 'Café', iconName: 'coffee', family: 'F5' },
    { id: 7, name: 'Saudável', iconName: 'heart-circle-plus', family: 'F6'},
    { id: 8, name: 'Japonesa', iconName: 'fish', family: 'F6' },
    { id: 9, name: 'Churrasco', iconName: 'drumstick-bite', family: 'F6'},
    { id: 10, name: 'Massas', iconName: 'bread-slice', family: 'F6' },
    { id: 11, name: 'Brasileira', iconName: 'plate-wheat', family: 'F6'},
    { id: 12, name: 'Chinesa', iconName: 'bowl-rice', family: 'F6'},
    { id: 13, name: 'Coreana', iconName: 'pepper-hot', family: 'F5' },
    { id: 14, name: 'Indiana', iconName: 'mortar-pestle', family: 'F5'},
    { id: 15, name: 'Lanches Naturais', iconName: 'leaf', family: 'F5'},
    { id: 16, name: 'Sucos', iconName: 'glass-water', family: 'F6'},
    { id: 17, name: 'Milkshake', iconName: 'blender', family: 'F6'},
    { id: 18, name: 'Cerveja / Bar', iconName: 'beer-mug-empty', family: 'F6'},
    { id: 19, name: 'Gourmet', iconName: 'utensils', family: 'F5'},
    { id: 20, name: 'Promoções', iconName: 'tags', family: 'F5'},
  ],
  getCategoryName: (id) => {
    const category = useCategories.getState().categories.find((cat) => cat.id === id); 
    return category ? category.name : 'Categoria não encontrada'
  },
}));
