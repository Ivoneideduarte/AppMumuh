import { colors } from '@/constants/colors';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface HeaderProps{
    user: String;
}

export default function Header({user} : HeaderProps) {
    return (
        <SafeAreaView style={styles.header}>

            <Text style={styles.user}>Olá, {user}</Text>

            <TouchableOpacity>
                <Feather name="user" size={30} color='#0D1321' />
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
        color: '#0D1321'
    }
})