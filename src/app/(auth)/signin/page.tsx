import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useState } from "react";
import { colors } from "@/constants/colors";
import { Link, router } from 'expo-router';
import { supabase } from '../../../lib/supabase';

export default function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    console.log({
      name,
      email,
      password
    })

    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      Alert.alert('Erro ao fazer login', error.message);
      setLoading(false);
      return;
    }

    setLoading(false)
    router.replace('/(panel)/profile/page')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText} >
          App<Text style={{ color: 'rgba(255,255,255,0.6)' }}>Mumuh</Text>
        </Text>

        <Text style={styles.slogan}>
          Faça seu login
        </Text>
      </View>

      <View style={styles.form}>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Digite seu email...'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder='Digite sua senha...'
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn} >
          <Text style={styles.buttonText}>
            {loading ? 'Carregando...' : 'Acessar'}
          </Text>
        </TouchableOpacity>

        <Link href='/(auth)/signup/page' style={styles.link}>
          <Text>Ainda não possui uma conta? Cadastre-se</Text>
        </Link>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: colors.blue

  },
  header: {
    paddingHorizontal: 14,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 8,
  },
  slogan: {
    fontSize: 34,
    color: colors.white,
    marginBottom: 34
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingHorizontal: 14,

  },
  label: {
    color: 'rgba(0,0,0,0.6)',
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 14,

  },

  button: {
    backgroundColor: colors.blue,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 16,
    textAlign: 'center'
  }
})