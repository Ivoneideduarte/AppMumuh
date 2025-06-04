import User from '@/components/user';
import { colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Work(props: { data: { work: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }; }) {
  return (
    <View style={styles.cardWork}>
      <View style={styles.label}>
        <Text style={styles.title} >{props.data.work}</Text>
      </View>
      <User name='Thalita Gonçalves' img={undefined} />
      <User name='Ivoneide Duarte' img={undefined} />
    </View>
  )
}

const styles = StyleSheet.create({
  cardWork: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    backgroundColor: colors.background,
    marginTop: 20,
    height: 210,
    marginHorizontal: 20,
    borderRadius: 8,
  },

  title: {
    color: colors.background,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },

  label: {
    backgroundColor: colors.blue,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }

})