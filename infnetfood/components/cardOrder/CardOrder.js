import { View, Text, StyleSheet } from 'react-native';
import { FormatPrice, FormatDate } from '../../utils';
import { useThemeColors } from '../../hooks';

const paymentMethods = {
  pix: 'PIX',
  credit_card: 'Cartão de Crédito',
  boleto: 'Boleto',
};

export default function CardOrder({
  id,
  items,
  total,
  paymentMethod,
  deliveryAddress,
  createdAt,
  status,
}) {
  const theme = useThemeColors();
  const productsList = items || [];

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.whiteBg },
      ]}>
      <View style={styles.header}>
        <Text style={styles.orderId}>Pedido Nº {id}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.productsContainer}>
        {productsList.map((product, index) => (
          <Text key={index} style={styles.infoText}>
            <Text style={styles.bold}>{product.quantity}x</Text>
            {` ${product.productName || 'Produto'} `}-{' '}
            {FormatPrice(product.price)}
          </Text>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Total:</Text> {FormatPrice(total)}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Pagamento:</Text>{' '}
          {paymentMethods[paymentMethod] || paymentMethod}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Endereço:</Text> {deliveryAddress}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.bold}>Data:</Text> {FormatDate(createdAt)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
    backgroundColor: '#E6F2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  productsContainer: {
    gap: 6,
  },
  footer: {
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
});
