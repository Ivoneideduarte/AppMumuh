import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import { useState } from 'react';
import { colors } from "@/constants/colors";
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../../lib/supabase'

export default function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp() {
    setLoading(true);

    console.log('Email:', email);
    console.log('Password:', password);

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Erro ao cadastrar', error.message);
      setLoading(false);
      return;
    }

    console.log('Usuário cadastrado:', data);

    Alert.alert(
      'Verifique seu e-mail',
      'Enviamos um link de confirmação para seu e-mail.'
    );

    setLoading(false);
    router.replace('/');
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>

        <View style={styles.container}>
          <View style={styles.header}>

            <Pressable style={styles.backButton} onPress={() => router.back()} >
              <Ionicons name='arrow-back' size={24} color={colors.white} />
            </Pressable>

            <Text style={styles.logoText} >
              App<Text style={{ color: 'rgba(255,255,255,0.6)' }}>Mumuh</Text>
            </Text>

            <Text style={styles.slogan}>
              Criar uma conta
            </Text>
          </View>

          <View style={styles.form}>

            <View>
              <Text style={styles.label}>Nome completo</Text>
              <TextInput
                placeholder='Digite seu nome completo...'
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View>
              <Text style={styles.label}>Seu aniversário</Text>
              <TextInput
                placeholder='Selecione data...'
                style={styles.input}
              />
            </View>

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

            <Pressable style={styles.button} onPress={handleSignUp} >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>

            <Link href='/' style={styles.link}>
              <Text>Já possui uma conta? Faça login</Text>
            </Link>

          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8
  }
})