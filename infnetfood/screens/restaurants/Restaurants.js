import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Screen, CardWebMessage } from '../../components';
import { useRestaurants,useThemeColors } from '../../hooks';

let MapView;
let Marker;

if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}
export default function Restaurants({ navigation }) {
  const theme = useThemeColors();
  const restaurants = useRestaurants((state) => state.restaurants);
  const initialRegion = {
    latitude: -22.9068,
    longitude: -43.1729,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };
  if (Platform.OS === 'web') {
    return (
      <Screen>
        <CardWebMessage />
      </Screen>
    );
  }
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={[styles.title, {color:theme.text}]}>Restaurantes</Text>

        <MapView style={styles.map} initialRegion={initialRegion}>
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
              }}
              title={restaurant.name}
              description="Toque para ver os detalhes"
              onCalloutPress={() =>
                navigation.navigate('RestaurantDetails', { restaurant })
              }
            />
          ))}
        </MapView>

        <View style={[styles.listContainer, {backgroundColor:theme.whiteBg}]}>
          <Text style={styles.listTitle}>Restaurantes Próximos</Text>
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  navigation.navigate('RestaurantDetails', { restaurant: item })
                }>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listAddress}>{item.address}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
  },
  title: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    borderRadius: 14,
    marginTop: 10,
    padding: 15,
    borderWidth: 0.2,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  listItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'steelblue',
  },
  listAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
