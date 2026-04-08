import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useOrders = create()(
  persist(
    (set, get) => ({
      orders: [],
      nextOrderId: 1,

      addOrder: (cart, deliveryAddress, paymentMethod, total) => {
        const { orders, nextOrderId } = get();

        const newOrder = {
          id: nextOrderId,
          items: cart, 
          deliveryAddress,
          paymentMethod,
          total,
          createdAt: new Date().toISOString(), 
          status: 'Concluído', 
        };

        set({
          orders: [newOrder, ...orders], 
          nextOrderId: nextOrderId + 1,
        });
      },

    }),
    {
      name: '@data-orders',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);