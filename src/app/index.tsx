import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from "react";
import { colors } from "@/constants/colors";
import { Link } from 'expo-router';

export default function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSignIn() {
    console.log({
      name,
      email,
      password
    })
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

        <Pressable style={styles.button} onPress={handleSignIn} >
          <Text style={styles.buttonText}>Acessar</Text>
        </Pressable>

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
    borderColor: colors.gray,
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