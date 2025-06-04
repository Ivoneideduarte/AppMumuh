import Calender from "@/components/calender";
import { colors } from "@/constants/colors";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Work from '../../components/cardWorks';
import Header from '../../components/header';


export default function Index() {

  const [calender, useCalender] = useState([
    { _id: '1', week: 'Dom', day: '14/05' },
    { _id: '2', week: 'Dom', day: '15/05' },
    { _id: '3', week: 'Dom', day: '16/05' },
    { _id: '4', week: 'Dom', day: '17/05' },
    { _id: '5', week: 'Dom', day: '18/05' },

  ])

  const [work, useWork] = useState([
    { id: '1', work: 'Turigano' },
    { id: '2', work: 'Oráculo de Simiromba' },
    { id: '3', work: 'Cruz do caminho' },
    { id: '4', work: 'Estrela Sublimação' },

  ])


  return (
    <View style={styles.container}>

      <Header user = 'Ivoneide Duarte' />

      <FlatList
        style={styles.listCalender}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        keyExtractor={(item) => item._id}
        data={calender}
        renderItem={({ item }) => <Calender data={item} />}

      />

      <FlatList
        style={styles.listWorks}
        showsVerticalScrollIndicator={false}
        data={work}
        renderItem={({ item }) => <Work data={item} />}

      />


    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },

  listCalender: {
    maxHeight: 115,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    zIndex: 9,

  },

  listWorks: {
    maxHeight: 580,
    backgroundColor: colors.background,
    marginHorizontal: 10,
    marginTop: 10,
  },

  
})