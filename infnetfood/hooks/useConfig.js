
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useConfig = create()(
  persist(
    (set) => ({
      isDarkMode: false,
      hasNotificationPermission: false, 
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setNotificationPermission: (status) => set({ hasNotificationPermission: status }), 
    }),
    {
      name: "@data-config", 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);