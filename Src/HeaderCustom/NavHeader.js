import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DetailsScreen from '../Screens/DetailsScreen'

const NavHeader = () => {
  //dimensions width,height
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{
      justifyContent: 'center',
      padding: 10, flexDirection: 'row',
      height: height - 690,
      backgroundColor: "#eee",
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{}}><Octicons name='arrow-left' size={25} color={"black"} /></View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>Recipie umhuh!</Text></View>
      <View style={{}}><AntDesign name='bars' size={25} color={"black"} onPress={DetailsScreen} /></View>
    </View>
  )
}

export default NavHeader