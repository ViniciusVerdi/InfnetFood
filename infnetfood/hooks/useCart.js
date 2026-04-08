import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCart = create()(
  persist(
    (set, get) => ({
      cart: [],
      nextId: 1,

      addToCart: (idProduct, quantity, price, productName) => {
        const { nextId, cart } = get();
        const existingItem = cart.find((item) => item.idProduct === idProduct);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.idProduct === idProduct
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [
              ...cart,
              {
                id: nextId,
                idProduct,
                quantity,
                price,
                productName,
              },
            ],
            nextId: nextId + 1,
          });
        }
      },

      clearCart: () => set({ cart: [], nextId: 1 }),
      getTotal: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => {
          const price = item.price || 0;
          return acc + (price * item.quantity);
        }, 0);
      }
    }),
    {
      name: '@data-cart',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
