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

📱 Guia de Uso (Fluxo do Aplicativo)
O InfnetFood foi desenhado para simular a experiência real de um aplicativo de delivery. Aqui está o passo a passo do que você pode fazer dentro do app:

Autenticação (Login/Cadastro):

  Ao abrir o aplicativo pela primeira vez, você será recebido pela tela de Autenticação.
  
  É necessário criar uma conta ou fazer login para acessar o conteúdo. O app gerencia seu acesso garantindo que suas informações e carrinho fiquem salvos.

Explorando o Cardápio (Início):

  Após o login, você cai na aba Início. Aqui você pode navegar por diferentes categorias de alimentos (ex: Lanches, Sobremesas, Bebidas).
  
  Selecione uma categoria para visualizar a lista de comidas disponíveis.

Detalhes do Produto:

  Ao tocar em uma comida, você acessa a tela de detalhes, onde pode ver a descrição, preço e adicionar o item ao seu carrinho.

Carrinho e Checkout:

  Assim que você adiciona o primeiro item, um botão de atalho flutuante para o carrinho aparecerá na tela.
  
  No Carrinho, você pode revisar seus itens. Estando tudo certo, avance para a tela de Checkout para finalizar a simulação da sua compra.

Restaurantes:

  Integração com Mapa: Na tela do restaurante, você pode explorar os estabelecimentos parceiros restaurantes em uma mapa. Para exibir mais detalhes, você deve clicar no marcador.
  
  Ao clicar em um deles, você verá os Detalhes do Restaurante, incluindo sugestões do cardápio e a localização e  um botão "Abrir no Google Maps" para traçar a rota até o local.

Histórico e Perfil:

  Na aba Histórico (Pedidos), você pode consultar as compras que já foram finalizadas.
  
  Na aba Perfil, você tem acesso às suas configurações. É aqui que você pode testar o recurso de Modo Escuro (Dark Mode) — o aplicativo inteiro muda de cor instantaneamente para se adaptar à sua preferência!
