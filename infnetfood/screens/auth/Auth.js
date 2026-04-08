import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Screen, Button } from '../../components';
import { useAuth, useThemeColors } from '../../hooks';

const loginSchema = z.object({
  email: z.string().nonempty('O E-mail é obrigatório').email('E-mail inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
});
const registerSchema = loginSchema.extend({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(5, 'Digite um nome válido!'),
});

const AUTHMESSAGE = [
  'Ainda não tem uma conta? Crie sua conta',
  'Já tem uma conta? Entre aqui',
];

const BUTTONAUTH = ['ENTRAR', 'CRIAR CONTA'];

export default function Auth() {
  const theme = useThemeColors();
  const [isLogin, setIslogin] = useState(true);
  const login = useAuth((state) => state.login);
  const signUp = useAuth((state) => state.signUp);
  const [errorMsg, setErrorMsg] = useState(null);
  const [index, setIndex] = useState(0);
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = (data) => {
    if (isLogin) {
      const result = login(data.email, data.password);
      !result.sucess && setErrorMsg(result.message);
    } else {
      const result = signUp(data.name, data.email, data.password);
      !result.sucess && setErrorMsg(result.message);
    }
  };

  useEffect(() => {
    isLogin ? setIndex(0) : setIndex(1);
  }, [isLogin]);
  return (
    <Screen>
      <View style={styles.form}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isLogin ? 'Login' : 'Cadastro'}
        </Text>
        {!isLogin && <Input control={control} name="name" placeholder="Nome" />}
        <Input control={control} name="email" placeholder="Email" />
        <Input
          control={control}
          name="password"
          placeholder="Senha"
          secureTextEntry
        />
        <Button title={BUTTONAUTH[index]} onPress={handleSubmit(onSubmit)} />
        <Text style={styles.error}>{errorMsg ? errorMsg : ''}</Text>
      </View>
      <Pressable
        style={styles.toggleButton}
        onPress={() => {
          setIslogin(!isLogin);
          reset();
          setErrorMsg(null);
        }}>
        <Text style={[styles.toggleText, {color:theme.greenText}]}>{AUTHMESSAGE[index]}</Text>
      </Pressable>
    </Screen>
  );
}
const styles = StyleSheet.create({
  form: {
    gap: 10,
    marginTop: 20,
  },
  error: {
    color: '#d11a2a',
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center',
  },
  toggleButton: {
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 15,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
});
