import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components';
import { useThemeColors } from '../../hooks';

export default function CardRestaurantDetails({
  restaurant,
  openInMaps,
  detailedAddress,
}) {
  const theme = useThemeColors();
  return (
    <View style={styles.detailsContainer}>
      <Text style={[styles.title, { color: theme.text }]}>
        {restaurant.name}
      </Text>

      <View style={[styles.card, {backgroundColor:theme.whiteBg}]}>
        <Text style={styles.label}>📍 Endereço Principal:</Text>
        <Text style={styles.info}>{restaurant.address}</Text>
        <Text style={styles.label}>🔍 Detalhes da Localização:</Text>
        <Text style={styles.info}>
          {detailedAddress.state && `Estado: ${detailedAddress.state}\n`}
          {(detailedAddress.city || detailedAddress.town) &&
            `Cidade: ${detailedAddress.city || detailedAddress.town}\n`}
          {detailedAddress.suburb && `Bairro: ${detailedAddress.suburb}\n`}
          {detailedAddress.postcode && `CEP: ${detailedAddress.postcode}`}
        </Text>
        )<Text style={styles.label}>🍽️ Sugestão do Cardápio:</Text>
        <Text style={styles.info}>{restaurant.menuItem}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Abrir no Google Maps" onPress={openInMaps} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
