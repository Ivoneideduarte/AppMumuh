import { useAuth } from '@/src/contexts/AuthContext';
import { supabase } from '@/src/lib/supabase';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Profile() {
  const { setAuth, user } = useAuth();
  const [imageUri, setImageUri] = useState<string | null>(null);

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);

    if (error) {
      Alert.alert('Error', 'Erro ao sair da conta, tente mais tarde.');
      return;
    }
  }

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para selecionar uma foto.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/(panel)/home/page')}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Perfil</Text>
      </View>

      <View style={styles.content}>
        {/* Seletor de imagem com ícone de edição */}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="camera" size={30} color={colors.gray} />
              <Text style={styles.imageText}>Selecionar foto</Text>
            </View>
          )}
          <View style={styles.editIcon}>
            <Ionicons name="create-outline" size={24} color={colors.gray} />
          </View>
        </TouchableOpacity>

        {/* Informações do usuário */}
        <TouchableOpacity style={styles.buttonInput}>
          <Ionicons name="person-outline" size={25} color={colors.gray} style={styles.iconLeft} />
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Nome completo</Text>
            <Text style={styles.value}>Ivoneide Duarte</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color={colors.gray} style={styles.iconRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonInput}>
          <Ionicons name="mail-outline" size={25} color={colors.gray} style={styles.iconLeft} />
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>ivoneide@gmail.com</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color={colors.gray} style={styles.iconRight} />
    
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonInput}>
          <Ionicons name="calendar-number-outline" size={25} color={colors.gray} style={styles.iconLeft} />
          
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Data de nascimento</Text>
            <Text style={styles.value}>28/04/1997</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color={colors.gray} style={styles.iconRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonInput}>
          <Ionicons name="call-outline" size={25} color={colors.gray} style={styles.iconLeft} />

          <View style={styles.textWrapper}>
            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.value}>85 98948-6400</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color={colors.gray} style={styles.iconRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonInput}>
          <Ionicons name="person-outline" size={25} color={colors.gray} style={styles.iconLeft} />
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Senha</Text>
            <Text style={styles.value}>********</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color={colors.gray} style={styles.iconRight} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogout} onPress={handleSignout}>
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Sair da conta</Text>
          </View>
          <Ionicons name="log-out-outline" size={25} color={colors.gray} style={styles.iconRight} />
        
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: colors.blue,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    position: 'relative',
  },
  textHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 80,
    paddingTop: 24,
    paddingHorizontal: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imagePicker: {
    alignSelf: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  imageText: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 4,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  buttonLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.red,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  iconLeft: {
    marginRight: 14,
  },
  iconRight: {
    marginLeft: 14,
  },
  textWrapper: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: 'semibold'
  },
  value: {
    fontSize: 14,
    fontWeight: '500',

    color: 'rgba(0, 0, 0, 0.4)'
  },
});