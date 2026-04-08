# InfnetFood
InfnetFood Um aplicativo mobile completo para exploração de restaurantes e delivery de comida, construído com React Native e Expo. O aplicativo oferece uma experiência fluida com suporte a tema claro/escuro nativo, navegação por abas, carrinho de compras e geolocalização.

🚀 Tecnologias Utilizadas
Este projeto utiliza um ecossistema moderno do React Native:

Framework: React Native com Expo

Navegação: React Navigation (Stack e Bottom Tabs)

Gerenciamento de Estado: Zustand (com persistência via AsyncStorage)

Mapas e Localização: API Nominatim (OpenStreetMap) para Geocodificação Reversa e Linking nativo para o Google Maps.

Componentes e UI: expo-image, @expo/vector-icons, e react-native-safe-area-context.

✨ Principais Funcionalidades
Sistema de Temas Dinâmico: Suporte completo a Dark Mode e Light Mode gerenciado via Zustand com hooks customizados (useThemeColors).

Autenticação: Fluxo de login e proteção de rotas (useAuth).

Carrinho de Compras: Gerenciamento global de itens do carrinho (useCart).

Integração com Mapas: Conversão de coordenadas em endereços detalhados e redirecionamento direto para rotas no Google Maps.

Navegação Intuitiva: Barra de navegação inferior (Tab Bar) tematizada e pilhas de telas (Stacks) para detalhamento de produtos e restaurantes.
