import { View, Text } from 'react-native'
import React from 'react'

const NavHeader = () => {
  return (
    <View style={{ flex: .1, backgroundColor: "#eee", justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>Recipie umhuh!</Text>
    </View>
  )
}

export default NavHeader