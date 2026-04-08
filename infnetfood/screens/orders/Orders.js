import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useOrders, useThemeColors } from '../../hooks';
import { CardOrder, Screen } from '../../components';

export default function Orders() {
  const theme = useThemeColors();
  const orders = useOrders((state) => state.orders);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={[styles.mainTitle, { color: theme.text }]}>
          Histórico de Pedidos
        </Text>

        {orders.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText,{color:theme.text}]}>
              Você ainda não fez nenhum pedido.
            </Text>
          </View>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CardOrder {...item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
