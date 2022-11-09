import { View, Text } from 'react-native'
import React from 'react'
import NavHeader from '../headerCustom/NavHeader'

const DetailsScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavHeader />
            <Text>DetailsScreen</Text>
        </View>
    )
}

export default DetailsScreen