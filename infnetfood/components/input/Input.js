import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { useThemeColors } from '../../hooks';

export default function Input({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
}) {
  const theme = useThemeColors();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <View style={styles.container}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={(text) => {
                const processedText =
                  keyboardType === 'number-pad'
                    ? text.replace(/[^0-9]/g, '')
                    : text;
                onChange(processedText);
              }}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              style={[
                styles.input,
                error && styles.inputError,
                { backgroundColor: theme.input }, {borderColor:theme.inputBorder}
              ]}
            />
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    outlineStyle: 'none'
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
