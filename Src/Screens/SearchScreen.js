import { View, Text } from 'react-native'
import React from 'react'
import NavHeader from '../HeaderCustom/NavHeader'

const SearchScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavHeader />
            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen