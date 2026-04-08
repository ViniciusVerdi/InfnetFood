import { Linking, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { Loading } from '../../screens';
import {
  Screen,
  CardRestaurantDetails,
  BackButton,
  CardWebMessage,
} from '../../components';

let MapView;
let Marker;

if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}
export default function DetailsScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const [detailedAddress, setDetailedAddress] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailedAddress = async () => {
      if (!restaurant?.lat || !restaurant?.lng) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${restaurant.lat}&lon=${restaurant.lng}&format=json`,
          {
            headers: {
              'User-Agent':
                'AppRestaurantes/1.0 (https://snack.expo.dev/@vinicius_verdi/infnetfood)',
            },
          }
        );

        const data = await response.json();
        if (data && data.address) {
          setDetailedAddress(data.address);
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do endereço:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailedAddress();
  }, [restaurant]);

  const openInMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${restaurant.lat},${restaurant.lng}(${restaurant.name})`,
      android: `geo:0,0?q=${restaurant.lat},${restaurant.lng}(${restaurant.name})`,
    });
    Linking.openURL(url);
  };
  if (Platform.OS === 'web') {
    return (
      <Screen>
        <CardWebMessage />
      </Screen>
    );
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Screen backButton={<BackButton onPress={() => navigation.goBack()} />}>
      <CardRestaurantDetails restaurant={restaurant} openInMaps={openInMaps} detailedAddress={detailedAddress} />
    </Screen>
  );
}
