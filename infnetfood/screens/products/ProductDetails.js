import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useProducts, useCart, useThemeColors } from '../../hooks';
import { Input, Screen, BackButton, Button } from '../../components';
import { Image } from 'expo-image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormatPrice } from '../../utils';

export default function ProductDetails({ route, navigation }) {
  const theme = useThemeColors();
  const [imageLoadError, setImageLoadError] = useState(false);
  const fallbackImage =
    'https://www.mezzodublin.com/assets/img/pages/home/mezzo-fallback-slider-image-food.jpg';
  const { id } = route?.params ?? {};
  const product = useProducts((state) => state.getProductById(id));
  const addToCart = useCart((state) => state.addToCart);
  const quantitySchema = z.object({
    quantity: z.coerce
      .number({
        required_error: 'A quantidade é obrigatória',
        invalid_type_error: 'Apenas números são permitidos',
      })
      .int('A quantidade deve ser um número inteiro')
      .min(1, 'A quantidade deve ser no mínimo 1')
      .max(product.stock, `Máximo disponível: ${product.stock}`),
  });
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: '',
    },
  });
  const onSubmit = (data) => {
    addToCart(id, data.quantity, product.price, product.name);
    reset();
    navigation.navigate('Cart');
  };

  return (
    <Screen backButton={<BackButton onPress={() => navigation.goBack()} />}>
      <View style={styles.container}>
        <Image
          source={imageLoadError ? fallbackImage : product.image}
          style={styles.image}
          onError={() => {
            console.log(`Erro ao carregar imagem do produto: ${id}`);
            setImageLoadError(true);
          }}
          transition={300}
          cachePolicy="disk"
        />

        <View style={styles.content}>
          <Text style={[styles.title,{color:theme.text}]}>{product.name}</Text>
          <Text style={[styles.description,{color:theme.text}]}>{product.description}</Text>
          <Text style={[styles.price,{color:theme.greenText}]}>{FormatPrice(product.price)}</Text>
          <Input
            control={control}
            name="quantity"
            placeholder="Quantidade desejada:"
            keyboardType="number-pad"
          />
        </View>

        <Button
          title="Adicionar ao Carrinho"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 12,
  },
  content: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
  },
});
