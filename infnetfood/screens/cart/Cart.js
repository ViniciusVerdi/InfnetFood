import { View, Text, StyleSheet, FlatList } from 'react-native';
import {Screen,BackButton,CardCart,Button} from '../../components';
import { useCart,useProducts,useThemeColors } from '../../hooks';
import { FormatPrice } from '../../utils';

export default function Cart({ navigation }) {
  const theme = useThemeColors();
  const cart = useCart((state) => state.cart);
  const clearCart = useCart((state) => state.clearCart);
  const getProductById = useProducts((state) => state.getProductById);
  const hasItems = useCart((state) => state.cart.length > 0);
  const total = useCart((state) =>state.getTotal()) 
  
  return (
    <Screen backButton={<BackButton onPress={() => navigation.goBack()} />}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.title, {color:theme.text}]}>Carrinho</Text>
          <View>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const product = getProductById(item.idProduct);
                if (!product) return null;

                return (
                  <CardCart
                    image={product.image}
                    name={product.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.idProduct}
                    navigation={navigation}
                  />
                );
              }}
              contentContainerStyle={styles.list}
              ListEmptyComponent={
                <Text style={[styles.empty, {color:theme.text}]}>Seu carrinho está vazio.</Text>
              }
            />
            {hasItems && (
              <Text style={[styles.clear, {color:theme.text}]} onPress={() => clearCart()}>
                Limpar Carrinho
              </Text>
            )}
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Text style={[styles.total, {color:theme.text}]}>Total dos itens: </Text>
            <Text style={[styles.price, {color:theme.greenText}]}>{FormatPrice(total)}</Text>
          </View>
          <Button
            title="Finalizar Pedido"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
  },
  clear: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  total: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
