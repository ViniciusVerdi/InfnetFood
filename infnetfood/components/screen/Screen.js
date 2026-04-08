import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart, useThemeColors, useAuth } from '../../hooks';
import ToCartButton from '../toCartButton/ToCartButton';

export default function Screen({ children, style, backButton }) {
  const theme = useThemeColors();
  const hasItems = useCart((state) => state.cart.length > 0);
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.bg }, style]}>
      {backButton}
      <View style={[styles.content, { backgroundColor: theme.bg }]}>
        {children}
      </View>
      {hasItems && isLoggedIn && <ToCartButton />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
