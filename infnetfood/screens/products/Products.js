import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useProducts, useCategories, useThemeColors } from '../../hooks';
import { Image } from 'expo-image';
import { Loading } from '../../screens';
import { Screen, BackButton, CardProduct } from '../../components';

export default function Products({ route, navigation }) {
  const theme = useThemeColors();
  const { id } = route?.params ?? {};
  const filteredProducts = useProducts((state) =>
    state.getProductsByCategory(id)
  );
  const categoryName = useCategories((state) => state.getCategoryName(id));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const preLoadImages = async () => {
      try {
        const downloadPromise = filteredProducts.map((produto) => {
          return Image.prefetch(produto.image);
        });

        await Promise.all(downloadPromise);
      } catch (error) {
        console.warn('Alguma imagem falhou ao carregar:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    preLoadImages();
  }, [filteredProducts]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Screen backButton={<BackButton onPress={() => navigation.goBack()} />}>
      <View style={styles.container}>
        <Text style={[styles.mainTitle, {color:theme.text}]}>{categoryName}</Text>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <CardProduct {...item} navigation={navigation} />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
  },
  separator: {
    height: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
