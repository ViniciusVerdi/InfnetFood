import { Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { useThemeColors } from '../../hooks';

export default function CardCategory({
  id,
  name,
  iconName,
  family,
  navigation,
}) {
  const theme = useThemeColors();
  const isLarge = name.length > 7;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
        { backgroundColor: theme.greenBg },
      ]}
      onPress={() => navigation.navigate('Products', { id })}>
      {family === 'F5' ? (
        <FontAwesome5 name={iconName} style={styles.icon} solid />
      ) : (
        <FontAwesome6 name={iconName} style={styles.icon} solid />
      )}
      <Text
        style={[styles.text, isLarge ? styles.small : '']}>{` ${name}`}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 15,
    flexDirection: 'row',
    height: 65,
    borderRadius: 10,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
  small: {
    fontSize: 15,
  },
});
