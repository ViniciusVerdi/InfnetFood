import { Text, StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';
import { Image } from 'expo-image';
import { FormatPrice } from '../../utils/FormatPrice';

export default function CardProduct({ id, name, price, image, navigation }) {
  const [imageLoadError, setImageLoadError] = useState(false);
  const fallbackImage =
    'https://www.mezzodublin.com/assets/img/pages/home/mezzo-fallback-slider-image-food.jpg';
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      onPress={() => navigation.navigate('ProductDetails', { id })}>
      <Image
        source={imageLoadError ? fallbackImage : image}
        style={styles.image}
        transition={300}
        cachePolicy="disk"
        contentFit="cover"
        onError={() => {
          console.log(`Erro ao carregar imagem do produto: ${id}`);
          setImageLoadError(true);
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{FormatPrice(price)}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 190,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 10,
  },
});
