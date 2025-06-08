import { colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Calender(props: { data: { week: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; day: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }) {
    return (
        <View>
            <TouchableOpacity style={styles.buttonDate}>

                <Text style={styles.textMonth} >{props.data.week}</Text>
                <Text style={styles.textDay} >{props.data.day}</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  
    buttonDate: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.2)',
        backgroundColor: colors.background,
        marginLeft: 10,
        marginVertical: 8,
        borderRadius: 8,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textMonth: {
        color: colors.gray,
        fontSize: 18,
    },

    textDay: {
        color: colors.gray,
        fontSize: 18,
        fontWeight: '500'
    },

})