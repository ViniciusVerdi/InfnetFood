import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useThemeColors } from '../../hooks';

export default function Loading() {
  const theme = useThemeColors();
  const imgUrl =
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8b69e912ba64c6d68ab31715c05e954e';

  return (
    <View style={[styles.containerLoading, {backgroundColor:theme.loadingBg}] }>
      <Image
        style={styles.image}
        source={{ uri: imgUrl }}
        contentFit="contain"
      />
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.loadingText}>
        Carregandos os deliciosos pratos...
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom:-20,
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
