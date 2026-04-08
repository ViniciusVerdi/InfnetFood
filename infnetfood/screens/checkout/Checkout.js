import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, BackButton, Button } from '../../components';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Picker } from '@react-native-picker/picker';
import {
  useOrders,
  useCart,
  useProducts,
  useConfig,
  useThemeColors,
} from '../../hooks';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import * as Notifications from 'expo-notifications';

const checkoutSchema = z.object({
  deliveryAddress: z
    .string()
    .min(5, 'O endereço deve ter no mínimo 5 caracteres'),
  paymentMethod: z
    .string()
    .min(1, 'Por favor, selecione um método de pagamento'),
});

export default function Checkout({ navigation }) {
  const theme = useThemeColors();
  const orders = useOrders((state) => state.orders);
  const addOrder = useOrders((state) => state.addOrder);
  const clearCart = useCart((state) => state.clearCart);
  const total = useCart((state) => state.getTotal());
  const cart = useCart((state) => state.cart);
  const updateStockFromCart = useProducts((state) => state.updateStockFromCart);
  const [isFinishing, setIsFinishing] = useState(false);
  const hasPermission = useConfig((state) => state.hasNotificationPermission);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      deliveryAddress: '',
      paymentMethod: '',
    },
  });

  const onSubmit = async (data) => {
    setIsFinishing(true);

    addOrder(cart, data.deliveryAddress, data.paymentMethod, total);
    updateStockFromCart(cart);
    clearCart();

    if (hasPermission) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Pedido Confirmado! 🎉',
          body: 'Seu pedido foi recebido com sucesso e já está sendo preparado.',
        },
        trigger: null,
      });
    }

    setTimeout(() => {
      setIsFinishing(false);
      navigation.popToTop();
      navigation.navigate('OrdersTab');
    }, 2500);
  };

  return (
    <Screen backButton={<BackButton onPress={() => navigation.goBack()} />}>
      <View style={styles.container}>
        <Text style={[styles.mainTitle, { color: theme.text }]}>
          Finalizar Compra
        </Text>

        <Input
          control={control}
          name="deliveryAddress"
          placeholder="Digite o seu endereço:"
        />

        <View style={[styles.pickerContainer, { backgroundColor: theme.input }]}>
          <Text >Forma de Pagamento:</Text>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field: { onChange, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={[styles.picker, { backgroundColor: theme.input }]}>
                <Picker.Item label="Selecione uma opção..." value="" />
                <Picker.Item label="PIX" value="pix" />
                <Picker.Item label="Cartão de Crédito" value="credit_card" />
                <Picker.Item label="Boleto" value="boleto" />
              </Picker>
            )}
          />
          {errors.paymentMethod && (
            <Text style={styles.errorText}>{errors.paymentMethod.message}</Text>
          )}
        </View>

        <Button
          title="Finalizar Pedido"
          onPress={handleSubmit(onSubmit)}
          isFinishing={isFinishing}
        />
        <View style={styles.animation}>
          {isFinishing && (
            <LottieView
              source={require('../../assets/Done.json')}
              autoPlay
              loop={false}
              style={{ width: 250, height: 250 }}
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    borderRadius: 8,
    padding: 10,
  },
  picker: {
    border: 0,
    fontSize: 15,
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },

  animation: {
    width: '100%',
    alignItems: 'center',
  },
});
