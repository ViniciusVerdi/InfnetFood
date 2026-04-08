import { Text, StyleSheet, Pressable } from 'react-native';
import { useThemeColors } from '../../hooks';

export default function Button({ onPress, title, isFinishing = false }) {
  const theme = useThemeColors();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isFinishing && styles.buttonDisabled,
        { opacity: pressed ? 0.6 : 1 },
        { backgroundColor: theme.button },
      ]}
      onPress={onPress}
      disabled={isFinishing}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  buttonDisabled: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});
