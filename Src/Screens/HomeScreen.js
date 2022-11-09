import { View, Text } from 'react-native'
import React from 'react'
import NavHeader from '../headerCustom/NavHeader'

const HomeScreen = () => {
    return (
        
        <View style={{flex:1}}>
            
            <NavHeader />
            <Text >HomeScreen</Text>
        </View>
    )
}

export default HomeScreen