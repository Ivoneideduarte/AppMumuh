import { colors } from '@/constants/colors';
import { router } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps{
    user: String;
}

export default function Header({user} : HeaderProps) {
    return (
        <SafeAreaView style={styles.header}>

            <Text style={styles.user}>Olá, {user}</Text>

            <TouchableOpacity>
                <Ionicons name="person-outline" size={30} color={colors.gray} onPress={() => router.replace('/(panel)/profile/page')}/>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        maxHeight: 180,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    user: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: colors.gray
    }
})