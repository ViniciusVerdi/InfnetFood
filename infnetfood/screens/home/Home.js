import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useEffect } from 'react';
import { useCategories, useConfig, useThemeColors } from '../../hooks';
import { Screen, CardCategory } from '../../components';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Home({ navigation }) {
  const theme = useThemeColors();
  const categories = useCategories((state) => state.categories);
  const setNotificationPermission = useConfig(
    (state) => state.setNotificationPermission
  );
  useEffect(() => {
    const loadAppResources = async () => {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      setNotificationPermission(finalStatus === 'granted');
    };

    loadAppResources();
  }, [setNotificationPermission]);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={[styles.title,{color:theme.text}]}>Categorias</Text>

        <View style={styles.container}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <CardCategory {...item} navigation={navigation} />
              </View>
            )}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            columnWrapperStyle={styles.line}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 15,
  },

  item: {
    width: '45%',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    justifyContent: 'space-evenly',
  },
  title: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
});
