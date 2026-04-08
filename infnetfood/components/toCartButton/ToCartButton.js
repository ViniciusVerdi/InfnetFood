import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ToCartButton() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Cart',navigation)}
      hitSlop={10}
      style={[styles.container, { top: insets.top + 20 }]}
    >
      <Ionicons name="cart-outline" size={24} color="#35985B" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});