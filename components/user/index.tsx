import { colors } from '@/constants/colors';
import { Feather } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
            <Ionicons style={styles.icon} name="trash-outline" size={24} color={colors.red} />
      
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
        justifyContent: 'space-between',
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
        color: colors.gray,
        paddingLeft: 15
    }
})