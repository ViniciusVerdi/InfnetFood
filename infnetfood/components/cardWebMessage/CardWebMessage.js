import { View, Text, StyleSheet } from 'react-native';

export default function CardWebMessage() {
  return (
    <View style={styles.webMessageContainer}>
      <Text style={styles.webTitle}>⚠️ Mapa Indisponível</Text>
      <Text style={styles.webText}>
        O mapa interativo requer módulos nativos. Por favor, abra este
        aplicativo no Expo Go em um dispositivo Android ou iOS para visualizar o
        mapa.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  webMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.2,
  },
  webTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
  webText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
