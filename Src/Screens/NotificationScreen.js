import { View, Text } from 'react-native'
import React from 'react'
import NavHeader from '../HeaderCustom/NavHeader'

const NotificationScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavHeader />
            <Text>NotificationScreen</Text>
        </View>
    )
}

export default NotificationScreen