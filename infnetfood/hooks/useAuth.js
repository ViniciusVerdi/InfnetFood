import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      userId: null,
      users: [],
      nextId: 1,
      hydrated: false,

      signUp: (name, email, password) => {
        const cleanEmail = email.toLowerCase().trim();
        const cleanName = name.trim()
        
        const userExists = get().users.some(
          (user) => user.email === cleanEmail
        );

        if (userExists) {
          return { sucess: false, message: "Erro: e-mail já cadastrado." };
        }

        const id = get().nextId;

        set((state) => ({
          users: [
            ...state.users,
            { id, name:cleanName, email:cleanEmail, password },
          ],
          nextId: state.nextId + 1,
          isLoggedIn: true,
          userId: id,
        }));

        return { sucess: true };
      },

      login: (email, password) => {
        const cleanEmail = email.toLowerCase().trim();
        const usuario = get().users.find(
          (user) =>
            user.email === cleanEmail && user.password === password
        );

        if (!usuario) {
          return {
            sucess: false,
            message: "Erro: e-mail ou senha inválidos.",
          };
        }

        set({
          isLoggedIn: true,
          userId: usuario.id,
        });

        return { sucess: true };
      },
      logout: () =>
        set({
          isLoggedIn: false,
          userId: null,
        }),

      setHydrated: (value) => set({ hydrated: value }),
    }
    ),
    {
      name: "@data-login-user",
      storage: createJSONStorage(() => AsyncStorage),

      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);