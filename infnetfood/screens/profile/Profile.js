import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Switch,
  StatusBar,
} from 'react-native';
import { useConfig, useAuth, useCurrentUser } from '../../hooks';
import { Screen } from '../../components';
import { useThemeColors } from '../../hooks';

export default function Profile() {
  const theme = useThemeColors();
  const { isDarkMode, toggleTheme } = useConfig();
  const logout = useAuth((state) => state.logout);
  const currentUser = useCurrentUser();

  const getInitials = (n) =>
    n
      ?.split(' ')
      .map((p) => p[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || '';

  return (
    <Screen style={{ backgroundColor: theme.bg }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.bg}
      />

      <View style={[styles.container, { backgroundColor: theme.bg }]}>
        <Text
          style={[
            styles.title,
            { color: theme.text, textAlign: 'center', marginBottom: 20 },
          ]}>
          Perfil
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              alignItems: 'center',
            },
          ]}>
          <View
            style={[
              styles.avatar,
              { backgroundColor: isDarkMode ? '#333' : '#E5E5EA' },
            ]}>
            <Text
              style={{ fontSize: 30, color: theme.sub, fontWeight: 'bold' }}>
              {getInitials(currentUser.name)}
            </Text>
          </View>
          <Text style={[styles.title, { color: theme.text }]}>
            {currentUser.name}
          </Text>
          <Text style={{ color: theme.sub }}>{currentUser.email}</Text>
        </View>

        <Text style={[styles.sectionLabel, { color: theme.sub }]}>
          CONFIGURAÇÕES
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[styles.txtBold, { color: theme.text }]}>
            Tema Escuro
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#D1D1D6', true: '#34C759' }}
            thumbColor={isDarkMode ? '#FFF' : '#FFF'}
            ios_backgroundColor="#D1D1D6"
          />
        </View>

        <Pressable
          onPress={logout}
          style={({ pressed }) => [
            styles.card,
            styles.btn,
            {
              borderColor: 'red',
              backgroundColor: pressed ? 'red' : 'transparent',
              marginTop: 'auto',
            },
          ]}>
          {({ pressed }) => (
            <Text
              style={[
                styles.txtBold,
                { color: pressed ? '#000' : 'red' },
              ]}>
              Sair da Conta
            </Text>
          )}
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 0.2,
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  txtBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});
