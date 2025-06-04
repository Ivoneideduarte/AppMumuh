import { colors } from '@/constants/colors';
import { Feather } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
    name: String;
    img: String;
    icon: String;
}

export default function User({ name, img, icon }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} src={'#'} /> {img}
            <Text style={styles.user}>{name}</Text>
            <Feather style={styles.icon} name="trash-2" color="#ff0000" size={20} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        maxHeight: 70,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.blue,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    icon: {
        paddingLeft: 50,
        
    },
    user: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#0D1321',
        paddingLeft: 15
    }
})