import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { Image } from 'expo-image';
import { FormatPrice } from '../../utils/FormatPrice';

export default function CardCart({
  id,
  image,
  name,
  quantity,
  price,
  navigation,
}) {
  const [imageLoadError, setImageLoadError] = useState(false);

  const fallbackImage =
    'https://www.mezzodublin.com/assets/img/pages/home/mezzo-fallback-slider-image-food.jpg';
  return (
    <Pressable
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.5 : 1 }]}
      onPress={() => navigation.navigate('ProductDetails', { id })}>
      <Image
        source={imageLoadError ? fallbackImage : image}
        style={styles.image}
        onError={() => {
          console.log(`Erro ao carregar imagem do produto: ${id}`);
          setImageLoadError(true);
        }}
        transition={300}
        cachePolicy="disk"
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>

        <View style={styles.row}>
          <Text style={styles.quantity}>Qntd: {quantity}</Text>
          <Text style={quantity === 1 ? styles.price : null}>
            {FormatPrice(price)}
          </Text>
        </View>
        {quantity != 1 && (
          <View style={styles.row}>
            <Text>Subtotal</Text>
            <Text style={styles.price}>{FormatPrice(price * quantity)}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#16976c',
  },
});
