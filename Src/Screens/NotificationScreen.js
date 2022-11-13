import React from 'react';
import {Text, View} from 'react-native';
import SubHeader from '../components/custom/SubHeader';

const NotificationScreen = () => {
    return (
        <View style={{flex: 1}}>
            <SubHeader title="Notifications" />
            <Text>NotificationScreen</Text>
        </View>
    );
};

export default NotificationScreen;
