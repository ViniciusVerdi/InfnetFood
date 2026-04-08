import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks';
import { Image } from 'expo-image';
import { useThemeColors } from '../hooks';
import {
  Home,
  Auth,
  Profile,
  Products,
  Loading,
  ProductDetails,
  Cart,
  Checkout,
  Orders,
  Restaurants,
  RestaurantDetails,
} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Início', headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: 'Comidas', headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Detalhes', headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Carrinho', headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ title: 'Checkout', headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function OrdersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'Detalhes', headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Carrinho', headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ title: 'Checkout', headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ title: 'RestaurantDetails', headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  const theme = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'OrdersTab') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'RestaurantsTab') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1ED760',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.card, 
          borderTopColor: theme.border,
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{ title: 'Histórico' }}
      />
      <Tab.Screen
        name="RestaurantsTab"
        component={RestaurantsStack}
        options={{ title: 'Restaurantes' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const hydrated = useAuth((state) => state.hydrated);
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  useEffect(() => {
    const loadAppResources = async () => {
      await Image.prefetch(
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8b69e912ba64c6d68ab31715c05e954e'
      );
      await Image.prefetch(
        'https://www.mezzodublin.com/assets/img/pages/home/mezzo-fallback-slider-image-food.jpg'
      );
    };

    loadAppResources();
  }, []);

  if (!hydrated) {
    return setTimeout(() => {
      <Loading />;
    }, 500);
  }
  return isLoggedIn ? (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  ) : (
    <Auth />
  );
}
